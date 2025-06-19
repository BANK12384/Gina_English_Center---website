import { useEffect, useState } from "react";
import "../App.css";
import { createClient } from "@supabase/supabase-js";
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from "recharts";

// ⚠️ Replace this with an env var like import.meta.env.VITE_SUPABASE_KEY for Vite
const supabaseUrl = "https://hobijcsjsmuspmytspwt.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhvYmlqY3Nqc211c3BteXRzcHd0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcwMzMzNTQsImV4cCI6MjA2MjYwOTM1NH0.63i937M0efLdNC4L4wpO9tNmZimLomL_S8DgwnD-_vg"; // or use env with REACT_APP_SUPABASE_KEY in CRA
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
        .from('english-score')
        .select('reading, writing, gramma_vocab,listening,speaking, students(id)')

        .eq('students.username', `${searchTerm}`);
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
      const raw = Object.entries(results[0]).filter(([key]) => key !== 'students').map(([skill, score]) => ({
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
      <div className="w-full h-full hidden lg:flex lg:flex-col justify-center">

        <div className="absolute inset-0 bg-[url('/img/StudentInifo.svg')] bg-center bg-cover bg-fixed h-full z-10"></div>
        <div className="absolute inset-0 bg-black bg-opacity-55 z-10"></div>
        <h1 className="z-20 text-white Eng text-8xl font-bold my-2">
          Student info
        </h1>
        <div className="px-80 h-1 bg-white z-20 self-center rounded-full mb-10"></div>
        <div className="bg-white w-[70rem] h-auto min-h-[7.5rem] z-20 rounded-lg p-6">
          <label className="w-full block relative">
            <input
              name="myInput"
              type="text"
              placeholder="Student Name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full text-4xl outline-none Thai-light font-light pr-12 p-4 border rounded"
            />
            {searchTerm && (
              <span
                onClick={() => setSearchTerm("")}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-4xl text-gray-400 cursor-pointer"
              >
                ×
              </span>
            )}
          </label>

          {results.length > 0 && chartData.length > 0 && (
            <div style={{ display: "flex", justifyContent: "space-around", padding: 50 }}>
              {/* Radar (Pentagon) Chart */}
              <RadarChart cx={200} cy={200} outerRadius={150} width={400} height={400} data={chartData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="skill" />
                <PolarRadiusAxis angle={30} domain={[0, 30]} />
                <Radar name="Player" dataKey="score" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
              </RadarChart>

              {/* Bar Chart */}
              <BarChart
                width={400}
                height={400}
                data={chartData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="skill" />
                <YAxis domain={[0, 30]} />
                <Tooltip />
                <Legend />
                <Bar dataKey="score" fill="#82ca9d" />
              </BarChart>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
