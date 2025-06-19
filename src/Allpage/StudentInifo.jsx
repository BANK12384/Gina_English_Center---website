import { useState } from "react";
import "../App.css";

export default function Studentinfo() {
  const [value, setValue] = useState("");

  return (
    <section
      className="w-screen h-screen  content-center z-20 text-center justify-center justify-items-center"
      id="Studentinfo"
    >
      <div className="w-full h-full hidden lg:flex lg:flex-col ">
        <div className="absolute inset-0 bg-[url('/img/StudentInifo.svg')] bg-center bg-cover bg-fixed h-full z-10"></div>
        <div className="absolute inset-0 bg-black bg-opacity-55 z-10"></div>
        <h1 className="z-20 text-white Eng text-8xl font-bold my-2">
          Student info
        </h1>
        <div className="px-80 h-1 bg-white z-20 self-center rounded-full mb-10"></div>
        <div className="bg-white w-[70rem] h-[7.5rem] z-20 rounded-lg flex input-wrapper relative">
          <label className="h-20 self-center w-full mx-7 flex items-center px-4 relative text-center">
            <input
              name="myInput"
              type="text"
              placeholder="Student Name"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="w-full h-full text-4xl outline-none Thai-light font-light pr-12"
            />
            {value && (
              <span
                onClick={() => setValue("")}
                className="absolute right-3 text-6xl text-gray-400 cursor-pointer text-center mb-3 "
              >
                ×
              </span>
            )}
          </label>
        </div>
      </div>

      <div className="w-full h-full lg:hidden flex flex-col relative place-items-center justify-center">
        <div className="absolute inset-0 bg-[url('/Untitleddesign(1).png')] bg-center bg-cover z-0"></div>
        <div className="absolute inset-0 bg-black bg-opacity-55 z-10"></div>

        <div className="z-20 w-full flex flex-col mt-[-4rem] items-center px-4 sm:px-0 self-center">
          <h1 className="text-white Eng text-5xl sm:text-[5rem] font-bold mb-2">
            Student info
          </h1>
          <div className="sm:w-[78%] md:w-[65%] h-1 bg-white rounded-full mb-5"></div>

          <div className="bg-white w-[80%] h-[3rem] sm:h-[4rem] rounded-lg flex items-center relative px-4">
            <input
              name="myInput"
              type="text"
              placeholder="Student Name"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="w-full h-full text-2xl outline-none Thai-light font-light pr-10"
            />
            {value && (
              <span
                onClick={() => setValue("")}
                className="absolute right-3 text-3xl mt-[-5px] text-gray-400 cursor-pointer"
              >
                ×
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
