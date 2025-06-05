import { useState } from "react";
import "../App.css";

// ✅ แทนค่าตัวอย่างที่ต้องมีจริง
const slides = [
  {
    items: [
      {
        title: "Stats",
        widthLong: "w-[12%]",
      },
    ],
  },
  {
    items: [
      {
        title: "Graph",
        widthLong: "w-[15%]",
      },
    ],
  },
  // เพิ่ม slide ตามต้องการ
];

function SlideSP({ items, imageUrl }) {
  return (
    <div className="flex flex-col w-full h-full items-center bg-[#FFE9A9] text-[#313131] rounded-xl overflow-auto">
      <div className="w-full">
        {items.map((item, index) => (
          <div
            key={index}
            className="mb-6 flex flex-col content-center justify-center"
          >
            <h1 className="Thai text-center text-5xl mt-4">{item.title}</h1>
            <div className={`h-[0.35rem] rounded-full my-2 mb-2 bg-[#313131] self-center ${item.widthLong}`}/>
            <div className="w-[60%] h-[25rem] bg-black self-center">

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Studentinfo2() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [value, setValue] = useState("");

  const nextSlide = () => setSlideIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section
      className="w-screen h-screen flex flex-col content-center z-20 text-center justify-center justify-items-center"
      id="Studentinfo2"
    >
      {/* background layers */}
      <div className="absolute inset-0 bg-[url('/img/StudentInifo.svg')] bg-center bg-cover bg-fixed h-full z-10"></div>
      <div className="absolute inset-0 bg-black bg-opacity-55 z-10"></div>

      {/* header */}
      <h1 className="z-20 text-white Eng text-8xl font-bold my-2">
        Student info
      </h1>
      <div className="px-80 h-1 bg-white z-20 self-center rounded-full mb-10"></div>

      {/* content card */}
      <div className="bg-[#F2CF67] w-full h-[65%] z-20 input-wrapper flex shadow-lg">
        {/* left profile box */}
        <div className="w-[45rem] flex-none flex flex-col items-center">
          <div className="bg-black border-[0.4rem] w-[60%] h-[60%] self-center rounded-lg mt-[3.4rem] bg-cover bg-[url('/img/Dan103.png')] bg-center" />
          <div className="w-[30%] h-[3rem] bg-black mt-5 flex justify-center text-white rounded-full">
            <p className="text-center self-center">NAME</p>
          </div>
          <div className="grid grid-cols-2 text-2xl">
            <p className="p-3">AGE : None</p>
            <p className="p-3">Gender : M</p>
          </div>
        </div>

        {/* right slide section */}
        <div className="flex-1 items-center justify-items-start content-center">
          <div className="ml-[-4rem] w-full h-[90%] bg-[#FFE9A9] rounded-xl relative overflow-hidden">
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#F2CF67] p-2 rounded-full z-20 RotateboxLeft"
            >
              <img src="/Left-arrow.svg" alt="←" className="w-10" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#F2CF67] p-2 rounded-full z-20 RotateboxRight"
            >
              <img src="/right-arrow.svg" alt="→" className="w-10" />
            </button>

            <SlideSP
              items={slides[slideIndex].items}
              imageUrl={slides[slideIndex].imageUrl}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
