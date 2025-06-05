import { useState } from "react";
import "../App.css";

export default function Studentinfo() {
  const [value, setValue] = useState("");

  return (
    <section
      className="w-screen h-screen grid content-center z-20 text-center justify-center justify-items-center"
      id="Studentinfo"
    >
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
    </section>
  );
}
