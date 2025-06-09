import { useState } from "react";
import "../App.css";

export default function Page1() {
  const [count, setCount] = useState(0);

  return (
    <section
      className=" w-screen h-screen"
      id="home"
    >
      {/* ------------------------------------------------------------------------------------------------------------------------------- */}
      {/* Decktop */}
      <div className="w-screen h-screen lg:grid content-center z-20 text-center justify-center justify-items-center hidden">
        <div class="absolute inset-0 bg-[url('/img/BG-Hone.png')] bg-cover bg-center bg-fixed h-full z-10"></div>
        <div class="absolute inset-0 bg-black bg-opacity-75 z-10"></div>
        <h1 className="Eng  text-6xl font-bold text-white z-20 my-5 leading-[4.5rem]">
          Welcome to Gina
          <br /> <span className="text-[#1D6FE1]">Eng</span>
          <span className="text-[#FF0004]">lish</span> Center
        </h1>
        <div className="w-[100%] h-1 bg-white z-20  self-center rounded-full"></div>
        <p className="Thai z-20 my-4 text-4xl text-white">
          ติวเตอร์ภาษาอังกฤษที่ตอบโจทย์ทุกไลฟ์สไตล์!
        </p>
      </div>
      {/* ------------------------------------------------------------------------------------------------------------------------------- */}

      {/* ------------------------------------------------------------------------------------------------------------------------------- */}
      {/* Moblie */}
      <div className="w-screen h-screen grid content-center z-20 text-center justify-center justify-items-center lg:hidden">
        <div class="absolute inset-0 bg-[url('/img/BG-Hone.png')] bg-cover bg-center bg-fixed h-full z-10"></div>
        <div class="absolute inset-0 bg-black bg-opacity-75 z-10"></div>
        <h1 className="Eng text-4xl font-bold text-white z-20 my-4 leading-[2.5rem]">
          Welcome to Gina
          <br /> <span className="text-[#1D6FE1]">Eng</span>
          <span className="text-[#FF0004]">lish</span> Center
        </h1>
        <div className="w-[100%] h-1 bg-white z-20  self-center rounded-full"></div>
        <p className="Thai z-20 my-2 text-lg text-white">
          ติวเตอร์ภาษาอังกฤษที่ตอบโจทย์ทุกไลฟ์สไตล์!
        </p>
      </div>
      {/* ------------------------------------------------------------------------------------------------------------------------------- */}
    </section>
  );
}
