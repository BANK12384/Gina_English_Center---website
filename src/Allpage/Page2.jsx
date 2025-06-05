import { useState } from "react";
import "../App.css";

export default function Page2() {
  const [count, setCount] = useState(0);

  return (
    <section className=" relative w-full h-screen flex flex-col bg-[#F2CF67]" id="Page2">
      <div className=" bg-[url('/img/Page2.svg')] w-full h-[48%] relative bg-cover bg-center bg-fixed inset-0 shadow-md "></div>
      <div className="w-full h-[35%] flex-col flex mt-[3.2rem] text-[#313131]">
        <h1 className="Thai text-4xl text-center mb-3 ">
          ⭐ เรียนสนุก เข้าใจง่าย ใช้ได้จริง ⭐
        </h1>
        <div className="w-[33%] self-center bg-[#313131] h-[0.35rem] rounded-full mb-6"></div>
        <p className="Thai w-[90%] self-center text-2xl ">
          ไม่ว่าคุณจะต้องการพัฒนาภาษาอังกฤษเพื่อการเรียน การทำงาน
          หรือการสื่อสารในชีวิตประจำวัน เรามีหลักสูตรที่เหมาะสมสำหรับคุณ!
          ด้วยวิธีการสอนที่เป็นกันเอง เข้าใจง่าย และเน้นการใช้งานจริง
          คุณจะสามารถพัฒนาภาษาอังกฤษได้อย่างมั่นใจ และรวดเร็ว
          พร้อมด้วยเทคนิคการสอนที่ช่วยให้คุณจดจำคำศัพท์ ไวยากรณ์
          และโครงสร้างประโยคได้อย่างมีประสิทธิภาพ
        </p>
      </div>

      {/* BG Effect */}
      <div className=" absolute grid mt-[41%] justify-end items-end w-full pr-4">
        <div className="grid grid-cols-7 mb-5">
          <div className="w-2 h-2 bg-black rounded-full mx-3"></div>
          <div className="w-2 h-2 bg-black rounded-full mx-3"></div>
          <div className="w-2 h-2 bg-black rounded-full mx-3"></div>
          <div className="w-2 h-2 bg-black rounded-full mx-3"></div>
          <div className="w-2 h-2 bg-black rounded-full mx-3"></div>
          <div className="w-2 h-2 bg-black rounded-full mx-3"></div>
          <div className="w-2 h-2 bg-black rounded-full mx-3"></div>
        </div>
        <div className="grid grid-cols-7 mb-5">
          <div className="w-2 h-2 bg-black rounded-full mx-3"></div>
          <div className="w-2 h-2 bg-black rounded-full mx-3"></div>
          <div className="w-2 h-2 bg-black rounded-full mx-3"></div>
          <div className="w-2 h-2 bg-black rounded-full mx-3"></div>
          <div className="w-2 h-2 bg-black rounded-full mx-3"></div>
          <div className="w-2 h-2 bg-black rounded-full mx-3"></div>
          <div className="w-2 h-2 bg-black rounded-full mx-3"></div>
        </div>
        <div className="grid grid-cols-7 mb-5">
          <div className="w-2 h-2 bg-black rounded-full mx-3"></div>
          <div className="w-2 h-2 bg-black rounded-full mx-3"></div>
          <div className="w-2 h-2 bg-black rounded-full mx-3"></div>
          <div className="w-2 h-2 bg-black rounded-full mx-3"></div>
          <div className="w-2 h-2 bg-black rounded-full mx-3"></div>
          <div className="w-2 h-2 bg-black rounded-full mx-3"></div>
          <div className="w-2 h-2 bg-black rounded-full mx-3"></div>
        </div>
        <div className="grid grid-cols-7 mb-5">
          <div className="w-2 h-2 bg-black rounded-full mx-3"></div>
          <div className="w-2 h-2 bg-black rounded-full mx-3"></div>
          <div className="w-2 h-2 bg-black rounded-full mx-3"></div>
          <div className="w-2 h-2 bg-black rounded-full mx-3"></div>
          <div className="w-2 h-2 bg-black rounded-full mx-3"></div>
          <div className="w-2 h-2 bg-black rounded-full mx-3"></div>
          <div className="w-2 h-2 bg-black rounded-full mx-3"></div>
        </div>
        <div className="grid grid-cols-7 mb-5">
          <div className="w-2 h-2 bg-black rounded-full mx-3"></div>
          <div className="w-2 h-2 bg-black rounded-full mx-3"></div>
          <div className="w-2 h-2 bg-black rounded-full mx-3"></div>
          <div className="w-2 h-2 bg-black rounded-full mx-3"></div>
          <div className="w-2 h-2 bg-black rounded-full mx-3"></div>
          <div className="w-2 h-2 bg-black rounded-full mx-3"></div>
          <div className="w-2 h-2 bg-black rounded-full mx-3"></div>
        </div>
      </div>
    </section>
  );
}
