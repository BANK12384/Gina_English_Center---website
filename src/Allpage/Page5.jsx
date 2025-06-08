import { useState } from "react";
import "../App.css";

const slides = [{ imageUrl: "/img/Page41.svg" },
  {imageUrl: "/img/Page42.svg"},
  {imageUrl: "/img/Page43.svg"},
  {imageUrl: "/img/Page44.svg"},
  {imageUrl: "/img/Page45.svg"},
];

function SlidePage5({ imageUrl }) {
  return (
    <div
      className="top-0 left-0 w-full h-full bg-center bg-cover bg-fixed z-0"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
  );
}

export default function Page5() {
  const [slideIndex, setSlideIndex] = useState(0);
  const hasMultipleSlides = slides.length > 1;

  const nextSlide = () => setSlideIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="w-screen h-screen relative overflow-hidden" id="classroom">
      <div className="w-full h-[15%] bg-white flex flex-col justify-center items-center shadow-lg">
        <h1 className="text-4xl Thai">ภาพบรรยากาศ</h1>
        <div className="bg-black w-[15%] h-[0.35rem] rounded-full mt-2" />
      </div>
      {/* Background image */}
      <SlidePage5 imageUrl={slides[slideIndex].imageUrl} className="z-10"/>

      {/* Navigation Buttons */}
      {hasMultipleSlides && (
        <>
          <button
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="absolute z-40 left-4 top-1/2 -translate-y-1/2 bg-[#F2CF67] p-2 rounded-full RotateboxLeft"
          >
            <img src="/Left-arrow.svg" alt="←" className="w-10" />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next Slide"
            className="absolute z-40 right-4 top-1/2 -translate-y-1/2 bg-[#F2CF67] p-2 rounded-full RotateboxRight"
          >
            <img src="/right-arrow.svg" alt="→" className="w-10" />
          </button>
        </>
      )}
    </section>
  );
}