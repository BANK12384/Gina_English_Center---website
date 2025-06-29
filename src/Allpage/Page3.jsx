import { useState } from "react";
import "../App.css";

const items1 = [
  {
    title: "👨‍🏫 ครู จีน่า",
    content: "ครูสอนภาษาอังกฤษเจ้าของภาษามากประสบการณ์ เป็นอาจารย์สอนภาษาอังกฤษที่มีประสบการณ์สอนมากกว่า 10 ปี ทั้งในระดับโรงเรียน มหาวิทยาลัย และองค์กรธุรกิจ ด้วยพื้นฐานการสอนที่เข้าใจผู้เรียนเป็นอย่างดี เขาสามารถปรับวิธีการสอนให้เหมาะกับนักเรียนทุกระดับ ตั้งแต่เด็กเล็กไปจนถึงผู้ใหญ่",
  },
  {
    title: "🌍 ความเชี่ยวชาญของครู",
    content: "✅ การสอนภาษาอังกฤษเพื่อการสื่อสารในชีวิตประจำวัน ",
    content2: "✅ ภาษาอังกฤษเพื่อการทำงาน (Business English)",
    content3: "✅ การออกเสียง (Pronunciation & Accent Training)",
    content4: "✅ การสอนผ่านสื่อและเทคนิคที่ทันสมัย เช่น บทสนทนา เกม และภาพยนตร์",
    content5: "✅ การสร้างบรรยากาศการเรียนที่สนุกสนานและได้ผลจริง",
  },
  {
    title: "🎯 ปรัชญาการสอน",
    content:
      "“ภาษาอังกฤษไม่ใช่แค่การเรียนรู้คำศัพท์และไวยากรณ์ แต่เป็นเครื่องมือในการสื่อสาร เปิดโอกาสใหม่ ๆ และสร้างความมั่นใจให้กับผู้เรียน”",
  },
];

const items2 = [
  {
    title: "พี่เพอร์ลี่",
    content: "ครูสอนภาษาอังกฤษรุ่นใหม่ ไฟแรง และเป็นกันเอง เป็นครูสอนภาษาอังกฤษรุ่นใหม่ที่เต็มไปด้วยพลังและความคิดสร้างสรรค์ ด้วยความเข้าใจนักเรียนยุคใหม่เป็นอย่างดี ทำให้เธอสามารถออกแบบการสอนที่สนุก ไม่น่าเบื่อ และช่วยให้ผู้เรียนกล้าพูดภาษาอังกฤษได้อย่างเป็นธรรมชาติ",
  },
  {
    title: "🔥 จุดเด่น",
    content: "✅ เน้นการเรียนรู้ผ่านกิจกรรมที่สนุกและทันสมัย เช่น เกม วิดีโอ และโซเชียลมีเดีย",
    content2: "✅ เข้าใจผู้เรียนวัยรุ่นและสามารถปรับเนื้อหาให้เหมาะกับแต่ละบุคคล",
    content3: "✅ สอนภาษาอังกฤษผ่านสถานการณ์จริง ให้ใช้งานได้ทันที",
    content4: "✅ ช่วยให้ผู้เรียนกล้าพูด และสร้างความมั่นใจในการใช้ภาษาอังกฤษ",
  },
  {
    title: "💡 คติประจำใจ",
    content:
      "“ภาษาอังกฤษไม่ใช่วิชาเรียนที่น่าเบื่อ แต่เป็นทักษะที่ช่วยให้คุณเปิดโลกกว้าง และสร้างโอกาสใหม่ ๆ ให้ตัวเอง!”",
  },
];


function Slide({ items, bgColor, imageUrl, openIndex, toggleAccordion }) {
  return (
    <div className="w-full h-full">
      {/* ------------------------------------------------------------------------------------------------------------------------------- */}
      {/* Decktop */}
      <div className="lg:grid lg:grid-cols-2 gap-8 items-center w-[90%] h-[90%] text-white mt-8 hidden ">
        {/* Left Image */}
        <div
          className="lg:w-[90%] xl:w-[70%] h-full bg-cover bg-center border-4 border-white rounded-md self-end lg:ml-[10%] xl:ml-[30%]"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />

        <div className="w-full max-w-[850px] self-start">
          {items.map((item, index) => (
            <div key={index} className="mb-3 bg-white rounded-lg self-start">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between h-[5rem] items-center p-4 font-semibold text-black hover:bg-gray-300 hover:rounded-md"
              >
                <span className="text-2xl Thai-MD">{item.title}</span>
                <span className="text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div
                  className="p-4 text-black rounded-b-lg"
                  style={{ backgroundColor: bgColor }}
                >
                  <p className="text-xl Thai-light">{item.content}</p>
                  <p className="text-xl Thai-light">{item.content2}</p>
                  <p className="text-xl Thai-light">{item.content3}</p>
                  <p className="text-xl Thai-light">{item.content4}</p>
                  <p className="text-xl Thai-light">{item.content5}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* ------------------------------------------------------------------------------------------------------------------------------- */}

      {/* ------------------------------------------------------------------------------------------------------------------------------- */}
      {/* Moblie */}
      <div className="flex flex-col  items-center w-full h-full text-white mt-4 lg:hidden  justify-items-center">
        {/* Left Image */}
        <div
          className="w-[90%] h-[15rem] bg-cover bg-center border-4 border-white rounded-md mb-2 "
          style={{ backgroundImage: `url(${imageUrl})` }}
        />

        <div className="w-[90%] max-w-[850px] self-cneter">
          {items.map((item, index) => (
            <div key={index} className="mb-2 bg-white rounded-lg self-center  ">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between h-[3rem] items-center p-4 font-semibold text-black hover:bg-gray-300 hover:rounded-md"
              >
                <span className="text-base  Thai-MD">{item.title}</span>
                <span className="text-base">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div
                  className="p-4 text-black rounded-b-lg"
                  style={{ backgroundColor: bgColor }}
                >
                  <p className="text-sm Thai-light">{item.content}</p>
                  <p className="text-sm Thai-light">{item.content2}</p>
                  <p className="text-sm Thai-light">{item.content3}</p>
                  <p className="text-sm Thai-light">{item.content4}</p>
                  <p className="text-sm Thai-light">{item.content5}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* ------------------------------------------------------------------------------------------------------------------------------- */}
    </div>
  );
}

export default function Page3() {
  const [count, setCount] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);
  const [openIndex1, setOpenIndex1] = useState(null);
  const [openIndex2, setOpenIndex2] = useState(null);

  const nextSlide = () => setSlideIndex((prev) => (prev + 1) % 2);
  const prevSlide = () => setSlideIndex((prev) => (prev - 1 + 2) % 2);

  const toggleAccordion1 = (index) => {
    setOpenIndex1(openIndex1 === index ? null : index);
  };

  const toggleAccordion2 = (index) => {
    setOpenIndex2(openIndex2 === index ? null : index);
  };

  return (
    <section className="w-screen h-screen" id="teachers">
      {/* ------------------------------------------------------------------------------------------------------------------------------- */}
      {/* Decktop */}
      <div className="bg-[#24149B] lg:flex lg:flex-col w-screen h-screen  hidden">
        {/* Header */}
        <div className="bg-white w-full h-[15%] flex flex-col justify-center items-center">
          <h1 className="text-4xl Thai">Teachers</h1>
          <div className="bg-black w-[10%] h-[0.35rem] rounded-full mt-2" />
        </div>
        {/* Navigation Arrows */}
        <div className="w-full h-[85%] flex items-center justify-center relative text-lg font-semibold">
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-3xl text-white bg-[#F2CF67] p-2 rounded-full RotateboxRight"
          >
            <img src="./Left-arrow.svg" alt="" className="w-10" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-3xl text-white bg-[#F2CF67] p-2 rounded-full RotateboxLeft"
          >
            <img src="./right-arrow.svg" alt="" className="w-10" />
          </button>

          {/* Slide Content */}
          {slideIndex === 0 ? (
            <Slide
              items={items1}
              bgColor="#F2CF67"
              imageUrl="./img/BG-Hone.png"
              openIndex={openIndex1}
              toggleAccordion={toggleAccordion1}
            />
          ) : (
            <Slide
              items={items2}
              bgColor="#E66291"
              imageUrl="./P-jay.jpg"
              openIndex={openIndex2}
              toggleAccordion={toggleAccordion2}
            />
          )}
        </div>
      </div>
      {/* ------------------------------------------------------------------------------------------------------------------------------- */}

      {/* ------------------------------------------------------------------------------------------------------------------------------- */}
      {/* Moblie */}
      <div className="bg-[#24149B] flex flex-col w-screen h-screen  lg:hidden">
        {/* Header */}
        <div className="bg-white w-full h-[12%] flex flex-col justify-center items-center">
          <h1 className="text-2xl Thai">Teachers</h1>
          <div className="bg-black w-[30%] h-1 rounded-full mt-1" />
        </div>
        {/* Navigation Arrows */}
        <div className="w-full h-[85%] flex items-center justify-center relative text-lg font-semibold">
          <button
            onClick={prevSlide}
            className="absolute left-2   top-1/4 -translate-y-1/2 text-3xl text-white bg-[#F2CF67] p-1 rounded-full RotateboxRight"
          >
            <img src="./Left-arrow.svg" alt="" className="w-6 " />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/4 -translate-y-1/2 text-3xl text-white bg-[#F2CF67] p-1 rounded-full RotateboxLeft"
          >
            <img src="./right-arrow.svg" alt="" className="w-6" />
          </button>

          {/* Slide Content */}
          {slideIndex === 0 ? (
            <Slide
              items={items1}
              bgColor="#F2CF67"
              imageUrl="./img/BG-Hone.png"
              openIndex={openIndex1}
              toggleAccordion={toggleAccordion1}
            />
          ) : (
            <Slide
              items={items2}
              bgColor="#E66291"
              imageUrl="./P-jay.jpg"
              openIndex={openIndex2}
              toggleAccordion={toggleAccordion2}
            />
          )}
        </div>
      </div>

      {/* ------------------------------------------------------------------------------------------------------------------------------- */}
    </section>
  );
}
