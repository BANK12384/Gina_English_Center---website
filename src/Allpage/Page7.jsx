import { useState } from "react";
import "../App.css";

export default function Contact() {
  const [count, setCount] = useState(0);
  return (
    <section
      className="w-screen h-screen max-h-screen  bg-white flex flex-col "
      id="contact"
    >
      {/* ------------------------------------------------------------------------------------------------------------------------------- */}
      {/* Decktop */}
      <div className="w-full h-full lg:flex hidden lg:flex-col">
        <div className="w-full h-[9rem] items-center flex-col flex place-content-center ">
          <h1 className="Thai text-4xl text-center mb-3">ช่องทางติดต่อ</h1>
          <div className="w-[15%] self-center bg-black h-[0.35rem] rounded-full mb-0"></div>
        </div>

        <div className="w-full h-[15rem] text-left text-4xl Thai-light flex flex-col content-center justify-center items-center">
          <p className="w-[80%]">
            📞 <span className="Thai-EX text-[#24149B]">ติดต่อเรา :</span>{" "}
            089-788-0964
          </p>
          <p className="w-[80%]">
            📍 <span className="Thai-EX text-[#24149B]">ที่ตั้ง :</span> 253/969
            ถ.เคหะร่มเกล้า64 เขต ลาดกระบัง แขวง คลองสองต้นนุ่น
          </p>
          <p className="w-[80%]">
            📌 <span className="Thai-EX text-[#24149B]">Facebook :</span> Gina
            English Center
          </p>
        </div>
        <div className="w-full h-[10rem] bg-[#24149B] Thai-MD text-white justify-center  flex items-center ">
          <h1 className="text-5xl text-center">
            ✨ พิสูจน์ด้วยตัวคุณเองว่า "ภาษาอังกฤษไม่ยากอย่างที่คิด!" ✨
          </h1>
        </div>
        <div className="map-container w-full h-[40%] max-h-[50rem]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.104462609181!2d100.7222763751369!3d13.772573486621463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d65474153fd97%3A0x57b769058e3cfc1e!2sGina%20English%20Center!5e0!3m2!1sth!2sth!4v1749451537908!5m2!1sth!2sth"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full aspect-video border-0"
          ></iframe>
        </div>
      </div>

      {/* ------------------------------------------------------------------------------------------------------------------------------- */}

      {/* ------------------------------------------------------------------------------------------------------------------------------- */}
      {/* Moblie */}
      <div className="w-full h-full flex flex-col lg:flex-none lg:hidden  place-content-center justify-center items-center content-center ">
        <div className="w-full h-[9rem] items-center flex-col flex place-content-center ">
          <h1 className="Thai text-2xl text-center ">ช่องทางติดต่อ</h1>
          <div className="w-[40%] self-center bg-black h-1 rounded-full mb-0"></div>
        </div>

        <div className="w-full h-[15rem] text-left text-sm Thai-light flex flex-col content-center justify-center items-center self-center">
          <p className="w-[80%]">
            📞 <span className="Thai-EX text-[#24149B]">ติดต่อเรา :</span>{" "}
            089-788-0964
          </p>
          <p className="w-[80%]">
            📍 <span className="Thai-EX text-[#24149B]">ที่ตั้ง :</span> 253/969
            ถ.เคหะร่มเกล้า64 เขต ลาดกระบัง<br/><span className="ml-14">แขวง คลองสองต้นนุ่น</span>
          </p>
          <p className="w-[80%]">
            📌 <span className="Thai-EX text-[#24149B]">Facebook :</span> Gina
            English Center
          </p>
        </div>
        <div className="w-full h-[10rem] bg-[#24149B] Thai-MD text-white justify-center  flex items-center ">
          <h1 className="text-lg text-center">
            ✨ พิสูจน์ด้วยตัวคุณเองว่า "ภาษาอังกฤษไม่ยากอย่างที่คิด!" ✨
          </h1>
        </div>
        <div className="map-container w-full h-[60%] max-h-[50rem]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.104462609181!2d100.7222763751369!3d13.772573486621463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d65474153fd97%3A0x57b769058e3cfc1e!2sGina%20English%20Center!5e0!3m2!1sth!2sth!4v1749451537908!5m2!1sth!2sth"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full aspect-video border-0"
          ></iframe>
        </div>
      </div>
      {/* ------------------------------------------------------------------------------------------------------------------------------- */}
    </section>
  );
}
