import { useEffect, useState } from "react";
import "../App.css";
import { createClient } from "@supabase/supabase-js";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

// ⚠️ Replace this with an env var like import.meta.env.VITE_SUPABASE_KEY for Vite
const supabaseUrl = "https://hobijcsjsmuspmytspwt.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhvYmlqY3Nqc211c3BteXRzcHd0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcwMzMzNTQsImV4cCI6MjA2MjYwOTM1NH0.63i937M0efLdNC4L4wpO9tNmZimLomL_S8DgwnD-_vg"; // or use env with REACT_APP_SUPABASE_KEY in CRA
const supabase = createClient(supabaseUrl, supabaseKey);

export default function Studentinfo() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (searchTerm.trim() === "") {
        setResults([]);
        return;
      }
      const { data, error } = await supabase
        .from("english-score")
        .select(
          "reading, writing, gramma_vocab,listening,speaking, students(id)"
        )

        .eq("students.username", `${searchTerm}`);
      if (error) {
        console.error("Search error:", error);
      } else {
        setResults(data);
      }
    };

    const delayDebounce = setTimeout(() => {
      fetchData();
    }, 300);

    if (results.length > 0) {
      const raw = Object.entries(results[0])
        .filter(([key]) => key !== "students")
        .map(([skill, score]) => ({
          skill,
          score,
        }));
      console.log(raw);
      setChartData(raw);
    }

    return () => clearTimeout(delayDebounce);
  }, [searchTerm]);

  return (
    <section
      className="w-screen h-screen  content-center z-20 text-center justify-center justify-items-center"
      id="Studentinfo"
    >
      {/* ------------------------------------------------------------------------------------------------------------------------------- */}
      {/* Decktop */}
      <div className="w-full h-full hidden lg:flex lg:flex-col justify-center items-center relative">
        <div className="absolute inset-0 lg:bg-[url('/img/StudentInifo.svg')] bg-center bg-cover bg-repeat bg-fixed z-0"></div>
        <div className="absolute inset-0 bg-black bg-opacity-55 z-10"></div>

        <h1 className="z-20 text-white Eng text-6xl xl:text-8xl font-bold my-2 mt-5">
          Student info
        </h1>
        <div className="w-[36%] xl:w-[46%] 2xl:w-[38%] h-1 bg-white z-20 rounded-full mb-10"></div>

        <div className="bg-white w-[90%] max-w-7xl z-20 rounded-xl p-3 overflow-hidden max-h-[32rem]">
          <label className="w-full block relative ">
            <input
              name="myInput"
              type="text"
              placeholder="Student Name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full text-4xl outline-none Thai-light font-light px-4 py-2 rounded-lg focus:ring-2 focus:ring-gray-200"
            />
            {searchTerm && (
              <span
                onClick={() => setSearchTerm("")}
                className="absolute right-4 top-[45%] -translate-y-1/2 text-4xl text-gray-400 cursor-pointer"
              >
                ×
              </span>
            )}
          </label>

          {/* Scrollable Chart Container */}
          <div className="overflow-y-auto max-h-[30rem] pr-2">
            {results.length > 0 && chartData.length > 0 && (
              <div className="flex flex-col justify-center items-center gap-8">
                {/* Radar Chart */}
                <div className=" p-6 flex flex-col items-center min-w-[350px] mt-4">
                  <h2 className="text-xl font-semibold text-gray-700 mb-4">
                    Skill Radar
                  </h2>
                  <RadarChart
                    className="text-sm"
                    
                    outerRadius={150}
                    width={800}
                    height={400}
                    data={chartData}
                  >
                    <PolarGrid stroke="#e5e7eb" />
                    <PolarAngleAxis dataKey="skill" stroke="#4b5563" />
                    <PolarRadiusAxis
                      angle={30}
                      domain={[0, 30]}
                      stroke="#9ca3af"
                    />
                    <Radar
                      name="Player"
                      dataKey="score"
                      stroke="#ebbc2f"
                      fill="#F2CF67"
                      fillOpacity={0.6}
                    />
                  </RadarChart>
                </div>

                {/* Bar Chart */}
                <div className=" p-6  flex flex-col items-center min-w-[450px] mb-10">
                  <h2 className="text-xl font-semibold text-gray-700 mb-4">
                    Skill Scores
                  </h2>
                  <BarChart
                    className="text-sm"
                    width={800}
                    height={250}
                    data={chartData}
                    margin={{ top: 10, right: 20, left: -20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis
                      dataKey="skill"
                      stroke="#4b5563"
                      tick={{ fontSize: 12, fill: "#374151" }}
                      axisLine={{ stroke: "#d1d5db" }}
                    />
                    <YAxis
                      domain={[0, 30]}
                      stroke="#4b5563"
                      tick={{ fontSize: 12, fill: "#374151" }}
                      axisLine={{ stroke: "#d1d5db" }}
                    />
                    <Tooltip />
                    <Legend wrapperStyle={{ fontSize: 12 }} />
                    <Bar
                      dataKey="score"
                      fill="#F2CF67"
                      radius={[4, 4, 0, 0]}
                      barSize={28}
                    />
                  </BarChart>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------------------------------------------------------------------------- */}

      {/* ------------------------------------------------------------------------------------------------------------------------------- */}
      {/* Moblie */}
      <div className="w-full h-full lg:hidden flex flex-col justify-center items-center relative">
        <div className="absolute inset-0 bg-[url('/Untitleddesign(1).png')] bg-center bg-cover z-0"></div>
        <div className="absolute inset-0 bg-black bg-opacity-55 z-10"></div>

        <h1 className="z-20 text-white Eng text-5xl  font-bold my-2 mt-5">
          Student info
        </h1>
        <div className="w-[80%] sm:w-[46%] md:w-[40%]  h-1 bg-white z-20 rounded-full mb-10"></div>

        <div className="bg-white w-[90%] max-w-7xl z-20 rounded-xl p-3 overflow-hidden max-h-[25rem]">
          <label className="w-full block relative ">
            <input
              name="myInput"
              type="text"
              placeholder="Student Name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full text-4xl outline-none Thai-light font-light px-4 py-2 rounded-lg focus:ring-2 focus:ring-gray-200"
            />
            {searchTerm && (
              <span
                onClick={() => setSearchTerm("")}
                className="absolute right-4 top-[45%] -translate-y-1/2 text-4xl text-gray-400 cursor-pointer"
              >
                ×
              </span>
            )}
          </label>

          {/* Scrollable Chart Container */}
          <div className="overflow-y-auto max-h-[30rem] pr-2">
            {results.length > 0 && chartData.length > 0 && (
              <div className="flex flex-col justify-center items-center gap-4">
                {/* Radar Chart */}
                <div className=" p-6 flex flex-col items-center min-w-[350px] mt-4">
                  <h2 className="text-xl font-semibold text-gray-700 mb-4">
                    Skill Radar
                  </h2>
                  <RadarChart
                    className="text-sm"
                    
                    outerRadius={90}
                    width={800}
                    height={250}
                    data={chartData}
                  >
                    <PolarGrid stroke="#e5e7eb" />
                    <PolarAngleAxis dataKey="skill" stroke="#4b5563" />
                    <PolarRadiusAxis
                      angle={30}
                      domain={[0, 30]}
                      stroke="#9ca3af"
                    />
                    <Radar
                      name="Player"
                      dataKey="score"
                      stroke="#ebbc2f"
                      fill="#F2CF67"
                      fillOpacity={0.6}
                    />
                  </RadarChart>
                </div>

                {/* Bar Chart */}
                <div className=" p-6  flex flex-col items-center min-w-[450px] mt-[-2rem] mb-[10rem]">
                  <h2 className="text-xl font-semibold text-gray-700 mb-4">
                    Skill Scores
                  </h2>
                  <BarChart
                    className="text-sm"
                    width={320}
                    height={200}
                    data={chartData}
                    margin={{ top: 10, right: 20, left: -20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis
                      dataKey="skill"
                      stroke="#4b5563"
                      tick={{ fontSize: 12, fill: "#374151" }}
                      axisLine={{ stroke: "#d1d5db" }}
                    />
                    <YAxis
                      domain={[0, 30]}
                      stroke="#4b5563"
                      tick={{ fontSize: 12, fill: "#374151" }}
                      axisLine={{ stroke: "#d1d5db" }}
                    />
                    <Tooltip />
                    <Legend wrapperStyle={{ fontSize: 12 }} />
                    <Bar
                      dataKey="score"
                      fill="#F2CF67"
                      radius={[4, 4, 0, 0]}
                      barSize={28}
                    />
                  </BarChart>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
