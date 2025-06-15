import { useState } from "react";
import "../App.css";

const Itemsleson1 = [
  {
    title: "English for Kids & Teens",
    widthLong: "w-[32%]",
    widthLongM: "w-[72%]",
    content: [
      "ปลูกฝังพื้นฐานภาษาอังกฤษตั้งแต่เด็ก ด้วยกิจกรรมสนุก ๆ เช่น เกม เพลง และนิทาน",
      "เรียนรู้คำศัพท์และการออกเสียงที่ถูกต้อง",
      "ฝึกพูดและสร้างประโยคง่าย ๆ เพื่อสื่อสารในชีวิตประจำวัน",
    ],
  },
];

const Itemsleson2 = [
  {
    title: "General English",
    widthLong: "w-[22%]",
    widthLongM: "w-[50%]",
    content: [
      "เหมาะสำหรับทุกวัยที่ต้องการพัฒนาภาษาอังกฤษเพื่อ การสื่อสารทั่วไป",
      "เรียนรู้ไวยากรณ์ คำศัพท์ และการออกเสียงอย่างถูกต้อง",
      "ฝึกฝนการฟัง พูด อ่าน และเขียน ผ่านสถานการณ์จริง",
    ],
  },
];

const Itemsleson3 = [
  {
    title: "Business English",
    widthLong: "w-[23%]",
    widthLongM: "w-[52%]",
    content: [
      "เหมาะสำหรับพนักงานบริษัท นักธุรกิจ และผู้ที่ต้องใช้ภาษาอังกฤษในการทำงาน",
      "ฝึกการเขียนอีเมลทางธุรกิจ การนำเสนอ และการประชุม",
      "เรียนรู้คำศัพท์และวลีที่จำเป็นสำหรับการเจรจาธุรกิจ",
    ],
  },
];
const Itemsleson4 = [
  {
    title: "English for Travel",
    widthLong: "w-[25%]",
    widthLongM: "w-[55%]",
    content: [
      "ฝึกพูดภาษาอังกฤษเพื่อการเดินทางท่องเที่ยว",
      "เรียนรู้ประโยคและคำศัพท์ที่ใช้ในสนามบิน โรงแรม ร้านอาหาร และการเดินทาง",
      "ฝึกการฟังและการตอบโต้ในสถานการณ์จริง",
    ],
  },
];
const Itemsleson5 = [
  {
    title: "Conversation Class",
    widthLong: "w-[28%]",
    widthLongM: "w-[62%]",
    content: [
      "ฝึกพูดโต้ตอบอย่างเป็นธรรมชาติ กับอาจารย์เจ้าของภาษา",
      "พัฒนาทักษะการพูดผ่านหัวข้อที่น่าสนใจและการสนทนาในสถานการณ์จริง",
    ],
  },
];

// ✅ รวมสไลด์ทั้งหมดไว้ใน array เดียว
const slides = [
  { items: Itemsleson1, imageUrl: "/img/Page41.svg" },
  { items: Itemsleson2, imageUrl: "/img/Page42.svg" },
  { items: Itemsleson3, imageUrl: "/img/Page43.svg" },
  { items: Itemsleson4, imageUrl: "/img/Page44.svg" },
  { items: Itemsleson5, imageUrl: "/img/Page45.svg" },
];

function SlidePage4({ items, imageUrl }) {
  return (
    <div className="w-full h-full">
      {/* ------------------------------------------------------------------------------------------------------------------------------- */}
      {/* Decktop */}
      <div className="hidden lg:flex lg:flex-col w-full h-full items-center bg-[#D97C75] text-white">
        <div
          className="w-full h-[50%] bg-center bg-cover bg-fixed"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div className="w-full mt-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="mb-6 flex flex-col content-center justify-center"
            >
              <h1 className="Thai text-center text-5xl">{item.title}</h1>
              <div
                className={`h-[0.35rem] rounded-full my-2 mb-8 bg-white self-center ${item.widthLong}`}
              />
              <ul className="Thai-MD list-disc ml-6 space-y-1 self-center w-[60%] text-2xl">
                {item.content.map((text, i) => (
                  <li key={i}>{text}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      {/* ------------------------------------------------------------------------------------------------------------------------------- */}

      {/* ------------------------------------------------------------------------------------------------------------------------------- */}
      {/* Moblie */}
      <div className="lg:hidden flex flex-col w-full h-full items-center bg-[#E66291] text-white">
        <div
          className="w-[90%] h-[50%] bg-center bg-cover border-4 bg-no-repeat rounded-lg my-4 "
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div className="w-full">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col content-center justify-center"
            >
              <h1 className="Thai text-center text-2xl">{item.title}</h1>
              <div
                className={`h-1 rounded-full my-1 mb-4 bg-white self-center ${item.widthLongM}`}
              />
              <ul className="Thai-MD list-disc ml-6 space-y-1 self-center w-[80%] text-base">
                {item.content.map((text, i) => (
                  <li key={i}>{text}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ------------------------------------------------------------------------------------------------------------------------------- */}
    </div>
  );
}

export default function Page4() {
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => setSlideIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="w-screen h-screen overflow-hidden" id="courses">
      {/* ------------------------------------------------------------------------------------------------------------------------------- */}
      {/* Decktop */}
      <div className="w-full h-full hidden lg:flex lg:flex-col">
        <div className="w-full h-[15%] bg-white flex flex-col justify-center items-center shadow-lg">
          <h1 className="text-4xl Thai">หลักสูตรที่เปิดสอน</h1>
          <div className="bg-black w-[18%] h-[0.35rem] rounded-full mt-2" />
        </div>

        {/* Slide area */}
        <div className="w-full h-[85%] flex items-center justify-center relative">
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#F2CF67] p-2 rounded-full z-10 RotateboxLeft"
          >
            <img src="/Left-arrow.svg" alt="←" className="w-10" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#F2CF67] p-2 rounded-full z-10 RotateboxRight"
          >
            <img src="/right-arrow.svg" alt="→" className="w-10" />
          </button>

          {/* ✅ ใช้ slideIndex อย่างปลอดภัย */}
          <SlidePage4
            items={slides[slideIndex].items}
            imageUrl={slides[slideIndex].imageUrl}
          />
        </div>
      </div>
      {/* ------------------------------------------------------------------------------------------------------------------------------- */}

      {/* ------------------------------------------------------------------------------------------------------------------------------- */}
      {/* Moblie */}
      <div className="w-full h-full lg:hidden flex flex-col">
        <div className="w-full h-[12%] bg-white flex flex-col justify-center items-center shadow-lg">
          <h1 className="text-2xl Thai my-1">หลักสูตรที่เปิดสอน</h1>
          <div className="bg-black w-[54%] h-1 rounded-full " />
        </div>

        {/* Slide area */}
        <div className="w-full h-[85%] flex items-center justify-center relative">
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/4 -translate-y-1/2 bg-[#F2CF67] p-1 rounded-full z-10 RotateboxLeft"
          >
            <img src="/Left-arrow.svg" alt="←" className="w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/4 -translate-y-1/2 bg-[#F2CF67] p-1 rounded-full z-10 RotateboxRight"
          >
            <img src="/right-arrow.svg" alt="→" className="w-6" />
          </button>

          {/* ✅ ใช้ slideIndex อย่างปลอดภัย */}
          <SlidePage4
            items={slides[slideIndex].items}
            imageUrl={slides[slideIndex].imageUrl}
          />
        </div>
      </div>
      {/* ------------------------------------------------------------------------------------------------------------------------------- */}

      {/* Header */}
    </section>
  );
}
