import { useState } from "react";
import "../App.css";

export default function Page5() {
  const [count, setCount] = useState(0);
  return (
    <section className=" relative w-screen h-screen bg-[#F2CF67] text-black" id="page6">
      <div className="w-full h-full flex flex-col">
        <div className="w-full h-[15%] content-center items-center justify-items-center  ">
          <h1 className="Thai text-4xl text-center mb-3 ">
            🎯 ทำไมต้องเลือกเรา?
          </h1>
          <div className="w-[20%] self-center bg-black h-[0.35rem] rounded-full"></div>
        </div>
        {/* Set 1 */}
        <div className="grid grid-cols-2 gap-2 z-20 mb-7">
          <div className="w-[80%] h-[6rem] justify-self-end mr-2 bg-white rounded-lg shadow-md flex items-center">
            <img src="/Check-Box2.svg" alt="" className="w-[4rem] mx-4" />
            <h1 className="Thai-MD text-2xl">
              อาจารย์คุณภาพ มีประสบการณ์สอนจริง และใส่ใจผู้เรียน
            </h1>
          </div>
          <div className="w-[80%] h-[6rem] justify-self-start ml-2 bg-white rounded-lg shadow-md flex items-center">
            <img src="/Check-Box2.svg" alt="" className="w-[4rem] mx-4" />
            <h1 className="Thai-MD text-2xl">
              อาจารย์คุณภาพ มีประสบการณ์สอนจริง และใส่ใจผู้เรียน
            </h1>
          </div>
        </div>

        {/* Set 2 */}
        <div className="grid grid-cols-2 gap-2 z-20 mb-7">
          <div className="w-[80%] h-[6rem] justify-self-end mr-2 bg-white rounded-lg shadow-md flex items-center">
            <img src="/Check-Box2.svg" alt="" className="w-[4rem] mx-4" />
            <h1 className="Thai-MD text-2xl">
              หลักสูตรที่ออกแบบเฉพาะตัวปรับให้เหมาะสมกับแต่ละบุคคล
            </h1>
          </div>
          <div className="w-[80%] h-[6rem] justify-self-start ml-2 bg-white rounded-lg shadow-md flex items-center">
            <img src="/Check-Box2.svg" alt="" className="w-[4rem] mx-4" />
            <h1 className="Thai-MD text-2xl">
              บรรยากาศการเรียนที่เป็นมิตร สนุก และได้ผลจริง
            </h1>
          </div>
        </div>

        {/* Set 3 */}
        <div className="grid grid-cols-2 gap-2 z-20 mb-7">
          <div className="w-[80%] h-[6rem] justify-self-end mr-2 bg-white rounded-lg shadow-md flex items-center">
            <img src="/Check-Box2.svg" alt="" className="w-[4rem] mx-4" />
            <h1 className="Thai-MD text-2xl">
              ราคาเข้าถึงได้ พร้อมโปรโมชั่นพิเศษ!
            </h1>
          </div>
          <div className="w-[80%] h-[6rem] justify-self-start ml-2 bg-white rounded-lg shadow-md flex items-center">
            <img src="/Check-Box2.svg" alt="" className="w-[4rem] mx-4" />
            <h1 className="Thai-MD text-2xl">
              มีแบบทดสอบก่อนเริ่มเรียน เพื่อวางแผนการเรียนให้ตรงกับระดับของคุณ
            </h1>
          </div>
        </div>

        {/* Set 4 */}
        <div className="grid grid-cols-2 gap-2 z-20 mb-7">
          <div className="w-[80%] h-[6rem] justify-self-end mr-2 bg-white rounded-lg shadow-md flex items-center">
            <img src="/Check-Box2.svg" alt="" className="w-[4rem] mx-4" />
            <h1 className="Thai-MD text-2xl">
              ใช้สื่อการสอนที่ทันสมัยหนังสือเรียนคุณภาพและแพลตฟอร์มออนไลน์ที่ใช้งานง่าย
            </h1>
          </div>
          <div className="w-[80%] h-[6rem] justify-self-start ml-2 bg-white rounded-lg shadow-md flex items-center">
            <img src="/Check-Box2.svg" alt="" className="w-[4rem] mx-4" />
            <h1 className="Thai-MD text-2xl">
              ใช้สื่อการสอนที่ทันสมัยหนังสือเรียนคุณภาพและแพลตฟอร์มออนไลน์ที่ใช้งานง่าย
            </h1>
          </div>
        </div>

        <h1 className="text-center Thai-light text-5xl mt-4">
          สมัครวันนี้! ทำแบบทดสอบวัดระดับฟรี <br />
          อย่าปล่อยให้ภาษาอังกฤษเป็นอุปสรรคอีก
          <br />
          ต่อไป มาร่วมพัฒนาทักษะของคุณกับเรา!
        </h1>

        {/* Background image */}
        <div className="absolute grid grid-cols-2 w-full h-full z-10">
          <div className="absolute grid mt-[41%] justify-end items-end w-full pr-4">
            <div className="grid grid-cols-7 mb-5 ">
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

          <div className=" absolute grid mt-10 justify-start items-start w-full pl-4">
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
        </div>
      </div>
    </section>
  );
}
