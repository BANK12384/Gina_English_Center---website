import { useState } from "react";
import "../App.css";

// ✅ แทนค่าตัวอย่างที่ต้องมีจริง
const slides = [
  {
    items: [
      {
        title: "Stats",
        widthLong: "lg:w-[25%] lg:mb-6 2xl:w-[15%] w-[20%]",
      },
    ],
  },
  {
    items: [
      {
        title: "Graph",
        widthLong: "lg:w-[25%] lg:mb-6 2xl:w-[15%] w-[20%]",
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
            <h1 className="Thai text-center lg:-5xl lg:mt-4 ">{item.title}</h1>
            <div
              className={`h-1 lg:h-[0.3rem]  rounded-full lg:my-2 mb-2 lg:mb-0 bg-[#313131] self-center ${item.widthLong}`}
            />
            <div className="w-[52%] h-[8rem] sm:h-[15rem] lg:w-[60%] lg:h-[25rem] bg-black self-center"></div>
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
      <div className="w-full h-full lg:flex lg:flex-col hidden">
        {/* background layers */}
        <div className="absolute inset-0 bg-[url('/img/StudentInifo.svg')] bg-center bg-cover bg-fixed h-full z-10"></div>
        <div className="absolute inset-0 bg-black bg-opacity-55 z-10"></div>

        {/* header */}
        <h1 className="z-20 text-white Eng text-8xl font-bold my-2 mt-20">
          Student info
        </h1>
        <div className="w-[50%] xl:w-[45%] 2xl:w-[32%] h-1 bg-white z-20 self-center rounded-full mb-10"></div>

        {/* content card */}
        <div className="bg-[#F2CF67] w-full h-[65%] z-20 input-wrapper flex shadow-lg">
          {/* left profile box */}
          <div className="w-[45rem] ml-[-6rem] xl:ml-0 flex-none flex flex-col items-center">
            <div className="bg-black border-[0.4rem]  w-[50%] h-[50%] self-center rounded-lg mt-[3.4rem] bg-cover bg-[url('/img/Dan103.png')] bg-center" />
            <div className="w-[30%] h-[3rem] bg-black mt-5 flex justify-center text-white rounded-full">
              <p className="text-center self-center">NAME</p>
            </div>
            <div className="grid grid-cols-2 text-2xl">
              <p className="p-3">AGE : None</p>
              <p className="p-3">Gender : M</p>
            </div>
          </div>

          {/* right slide section */}
          <div className="flex-1 items-center justify-items-start content-center ml-[-4rem]">
            <div className="ml-[-5rem] xl:ml-[0rem] w-[30rem] xl:w-[80%] h-[85%] bg-[#FFE9A9] rounded-xl relative overflow-hidden">
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
      </div>

      <div className="w-full h-full flex flex-col lg:hidden relative">
        {/* background layers */}
        <div className="absolute inset-0 bg-[url('/img/StudentInifo.svg')] bg-center bg-cover z-0"></div>
        <div className="absolute inset-0 bg-black bg-opacity-55 z-10"></div>

        {/* header */}
        <div className="z-20 flex flex-col items-center mt-20 px-4">
          <h1 className="text-white Eng text-5xl font-bold mb-2">
            Student info
          </h1>
          <div className="h-1 w-[80%] sm:w-[50%] md:w-[40%] bg-white rounded-full mb-10"></div>
        </div>

        {/* content card */}
        <div className="bg-[#F2CF67] w-full h-[70%] z-20 flex flex-col shadow-lg px-4 py-6">
          {/* left profile box */}
          <div className="flex flex-col items-center w-full h-full">
            <div className="bg-black border-[0.2rem] w-[80%] h-[50%] sm:w-[60%] rounded-lg bg-cover bg-center bg-[url('/img/Dan103.png')]"></div>
            <div className="w-[30%] h-10 bg-black mt-2 flex justify-center items-center text-white rounded-full">
              <p className="text-center text-lg">NAME</p>
            </div>
            <div className="grid grid-cols-2 text-base">
              <p className="p-3">AGE : None</p>
              <p className="p-3">Gender : M</p>
            </div>
            <div className="w-[90%] h-[60%] bg-[#FFE9A9] rounded-xl relative overflow-hidden self-center">
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/4 bg-[#F2CF67] p-1 rounded-full z-20 RotateboxLeft"
              >
                <img src="/Left-arrow.svg" alt="←" className="w-5 sm:w-8" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/4 bg-[#F2CF67] p-1 rounded-full z-20 RotateboxRight"
              >
                <img src="/right-arrow.svg" alt="→" className="w-5 sm:w-8" />
              </button>

              <SlideSP
                items={slides[slideIndex].items}
                imageUrl={slides[slideIndex].imageUrl}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
