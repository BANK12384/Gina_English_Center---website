import { useState } from "react";
import "../App.css";

export default function Page5() {
  const [count, setCount] = useState(0);
  return (
    <section
      className=" relative w-screen h-screen bg-[#24149B] lg:bg-[#F2CF67] text-black"
      id="page6"
    >
      {/* ------------------------------------------------------------------------------------------------------------------------------- */}
      {/* Decktop */}
      <div className="h-full w-full hidden lg:flex ">
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
              <img src="/Check-Box2.svg" alt="" className="w-[3.5rem] mx-4" />
              <h1 className="Thai-MD text-2xl w-[80%]">
                อาจารย์คุณภาพ มีประสบการณ์สอนจริง และใส่ใจผู้เรียน
              </h1>
            </div>
            <div className="w-[80%] h-[6rem] justify-self-start ml-2 bg-white rounded-lg shadow-md flex items-center">
              <img src="/Check-Box2.svg" alt="" className="w-[3.5rem] mx-4" />
              <h1 className="Thai-MD text-2xl w-[80%]">
                อาจารย์คุณภาพ มีประสบการณ์สอนจริง และใส่ใจผู้เรียน
              </h1>
            </div>
          </div>

          {/* Set 2 */}
          <div className="grid grid-cols-2 gap-2 z-20 mb-7">
            <div className="w-[80%] h-[6rem] justify-self-end mr-2 bg-white rounded-lg shadow-md flex items-center">
              <img src="/Check-Box2.svg" alt="" className="w-[3.5rem] mx-4" />
              <h1 className="Thai-MD text-2xl w-[80%]">
                หลักสูตรที่ออกแบบเฉพาะตัวปรับให้เหมาะสมกับแต่ละบุคคล
              </h1>
            </div>
            <div className="w-[80%] h-[6rem] justify-self-start ml-2 bg-white rounded-lg shadow-md flex items-center">
              <img src="/Check-Box2.svg" alt="" className="w-[3.5rem] mx-4" />
              <h1 className="Thai-MD text-2xl w-[80%]">
                บรรยากาศการเรียนที่เป็นมิตร สนุก และได้ผลจริง
              </h1>
            </div>
          </div>

          {/* Set 3 */}
          <div className="grid grid-cols-2 gap-2 z-20 mb-7">
            <div className="w-[80%] h-[6rem] justify-self-end mr-2 bg-white rounded-lg shadow-md flex items-center">
              <img src="/Check-Box2.svg" alt="" className="w-[3.5rem] mx-4" />
              <h1 className="Thai-MD text-2xl w-[80%]">
                ราคาเข้าถึงได้ พร้อมโปรโมชั่นพิเศษ!
              </h1>
            </div>
            <div className="w-[80%] h-[6rem] justify-self-start ml-2 bg-white rounded-lg shadow-md flex items-center">
              <img src="/Check-Box2.svg" alt="" className="w-[3.5rem] mx-4" />
              <h1 className="Thai-MD text-2xl w-[80%]">
                มีแบบทดสอบก่อนเริ่มเรียน เพื่อวางแผนการเรียนให้ตรงกับระดับของคุณ
              </h1>
            </div>
          </div>

          {/* Set 4 */}
          <div className="grid grid-cols-2 gap-2 z-20 mb-7">
            <div className="w-[80%] h-[6rem] justify-self-end mr-2 bg-white rounded-lg shadow-md flex items-center">
              <img src="/Check-Box2.svg" alt="" className="w-[3.5rem] mx-4" />
              <h1 className="Thai-MD text-2xl  w-[80%]">
                ใช้สื่อการสอนที่ทันสมัยหนังสือเรียนคุณภาพและแพลตฟอร์มออนไลน์ที่ใช้งานง่าย
              </h1>
            </div>
            <div className="w-[80%] h-[6rem] justify-self-start ml-2 bg-white rounded-lg shadow-md flex items-center">
              <img src="/Check-Box2.svg" alt="" className="w-[3.5rem] mx-4" />
              <h1 className="Thai-MD text-2xl w-[80%]">
                ใช้สื่อการสอนที่ทันสมัยหนังสือเรียนคุณภาพและแพลตฟอร์มออนไลน์ที่ใช้งานง่าย
              </h1>
            </div>
          </div>

          <h1 className="text-center Thai-MD text-3xl mt-[4rem] xl:mt-4">
            สมัครวันนี้! ทำแบบทดสอบวัดระดับฟรี <br />
            อย่าปล่อยให้ภาษาอังกฤษเป็นอุปสรรคอีก
            <br />
            ต่อไป มาร่วมพัฒนาทักษะของคุณกับเรา!
          </h1>

          {/* Background image */}
          <div className="absolute grid grid-cols-2 w-full h-full z-10">
            <div className="absolute flex flex-col h-full justify-end items-end w-full pr-4">
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

            <div className=" absolute grid mt-10 justify-start items-end w-full pl-4">
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
      </div>

      {/* ------------------------------------------------------------------------------------------------------------------------------- */}

      {/* ------------------------------------------------------------------------------------------------------------------------------- */}
      {/* Moblie */}

      <div className="h-full w-full lg:hidden flex ">
        <div className="w-full h-full flex flex-col">
          <div className="w-full h-[15%] content-center items-center justify-items-center  ">
            <h1 className="Thai text-3xl text-center text-white  ">
              🎯 ทำไมต้องเลือกเรา?
            </h1>
          </div>
          {/* Set 1 */}
          <div className="flex flex-col gap-2 z-20 mb-2 justify-center content-center items-center w-full">
            <div className="w-[90%] h-[3.5rem] justify-self-end  bg-white rounded-lg shadow-md flex items-center">
              <img src="/Check-Box2.svg" alt="" className="w-[2.5rem] mx-4" />
              <h1 className="Thai-MD text-base   w-[90%]">
                อาจารย์คุณภาพ มีประสบการณ์สอนจริง และใส่ใจผู้เรียน
              </h1>
            </div>
            <div className="w-[90%] h-[3.5rem] justify-self-start bg-white rounded-lg shadow-md flex items-center">
              <img src="/Check-Box2.svg" alt="" className="w-[2.5rem] mx-4" />
              <h1 className="Thai-MD text-base   w-[90%]">
                อาจารย์คุณภาพ มีประสบการณ์สอนจริง และใส่ใจผู้เรียน
              </h1>
            </div>
          </div>

          {/* Set 2 */}
          <div className="flex flex-col gap-2 z-20 mb-2 justify-center content-center items-center w-full">
            <div className="w-[90%] h-[3.5rem] justify-self-end bg-white rounded-lg shadow-md flex items-center">
              <img src="/Check-Box2.svg" alt="" className="w-[2.5rem] mx-4" />
              <h1 className="Thai-MD text-base   w-[90%]">
                หลักสูตรที่ออกแบบเฉพาะตัวปรับให้เหมาะสมกับแต่ละบุคคล
              </h1>
            </div>
            <div className="w-[90%] h-[3.5rem] justify-self-start  bg-white rounded-lg shadow-md flex items-center">
              <img src="/Check-Box2.svg" alt="" className="w-[2.5rem] mx-4" />
              <h1 className="Thai-MD text-base   w-[90%]">
                บรรยากาศการเรียนที่เป็นมิตร สนุก และได้ผลจริง
              </h1>
            </div>
          </div>

          {/* Set 3 */}
          <div className="flex flex-col gap-2 z-20 mb-2 justify-center content-center items-center w-full">
            <div className="w-[90%] h-[3.5rem] justify-self-end  bg-white rounded-lg shadow-md flex items-center">
              <img src="/Check-Box2.svg" alt="" className="w-[2.5rem] mx-4" />
              <h1 className="Thai-MD text-base   w-[90%]">
                ราคาเข้าถึงได้ พร้อมโปรโมชั่นพิเศษ!
              </h1>
            </div>
            <div className="w-[90%] h-[3.5rem] justify-self-start bg-white rounded-lg shadow-md flex items-center">
              <img src="/Check-Box2.svg" alt="" className="w-[2.5rem] mx-4" />
              <h1 className="Thai-MD text-base   w-[90%]">
                มีแบบทดสอบก่อนเริ่มเรียน เพื่อวางแผนการเรียนให้ตรงกับระดับของคุณ
              </h1>
            </div>
          </div>

          {/* Set 4 */}
          <div className="flex flex-col gap-2 z-20 mb-2 justify-center content-center items-center w-full">
            <div className="w-[90%] h-[3.5rem] justify-self-end bg-white rounded-lg shadow-md flex items-center">
              <img src="/Check-Box2.svg" alt="" className="w-[2.5rem] mx-4" />
              <h1 className="Thai-MD text-sm    w-[90%]">
                ใช้สื่อการสอนที่ทันสมัยหนังสือเรียนคุณภาพและแพลตฟอร์มออนไลน์ที่ใช้งานง่าย
              </h1>
            </div>
            <div className="w-[90%] h-[3.5rem] justify-self-start  bg-white rounded-lg shadow-md flex items-center">
              <img src="/Check-Box2.svg" alt="" className="w-[2.5rem] mx-4" />
              <h1 className="Thai-MD text-sm   w-[90%]">
                ใช้สื่อการสอนที่ทันสมัยหนังสือเรียนคุณภาพและแพลตฟอร์มออนไลน์ที่ใช้งานง่าย
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------------------------------------------------------------------------------------------------------------------- */}
    </section>
  );
}
