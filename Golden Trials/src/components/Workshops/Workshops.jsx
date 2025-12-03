import React from "react";
import Logo from "../../assets/Decoration/logo.png";
import circle from "../../assets/Decoration/circle about.png";
import Separator from "../../assets/Decoration/separator.svg"; 
import Circledeco from "../../assets/Decoration/circledeco.svg";

const Workshops = ({ id }) => {
  return (
    <section id={id} className="relative flex flex-col items-center justify-center py-0 px-6 overflow-visible">
{/* Title circle */}
      <div className="relative flex items-center justify-center mb-12 -mt-8">
        <img src={circle} alt="decoration" className="w-32 md:w-40 lg:w-48" />
        <span
          style={{ fontFamily: "'Metal Mania', cursive" }}
          className="absolute text-yellow-600 text-2xl md:text-3xl lg:text-4xl"
        >
          Workshops
        </span>
      </div>
      <img
  src={Circledeco}
  alt=""
  className="absolute left-[-320px] top-[-180px] w-[450px] md:w-[500px] lg:w-[550px] opacity-10 hidden md:block"
/>
            <img
  src={Circledeco}
  alt=""
  className="absolute right-[-180px] top-[-250px] w-[300px] sm:right-5 sm:translate-x-1/2 sm:top-[20px] sm:w-[400px] md:w-[500px] lg:w-[650px] opacity-10 pointer-events-none"
/>
                    

      {/* Content section */}
      <div
  className="bg-[#164646]/30 rounded-xl p-6 sm:p-10 w-full max-w-6xl flex flex-row justify-between items-center gap-4 sm:gap-10"
  style={{ fontFamily: "'Crimson Pro'" }}
>
  {/* AI Column */}
  <div className="flex-1 text-center">
    <h2
      style={{ fontFamily: "'Metal Mania', cursive" }}
      className="text-yellow-600 text-2xl sm:text-3xl lg:text-5xl leading-tight mb-3 sm:mb-4 lg:pb-20"
    >
      Artificial <br /> Intelligence
    </h2>

    <p className="text-gray-200 text-sm sm:text-lg lg:text-xl leading-relaxed font-normal">
      Cybersecurity: principles of computer security, vulnerability
      management and best practices.
    </p>
  </div>

  {/* Center Decoration */}
  <img
    src={Separator}
    alt="center decoration"
    className="w-12 sm:w-20 lg:w-28 opacity-90 flex-shrink-0"
  />

  {/* Cyber Column */}
  <div className="flex-1 text-center">
    <p className="text-gray-200 text-sm sm:text-lg lg:text-xl leading-relaxed mb-3 sm:mb-4 pb-6 sm:pb-10 font-normal">
      Artificial Intelligence (AI): conceptual foundations, introduction
      to algorithms and simple practical applications. Discovery of the
      basics of AI and Machine Learning, learning a model.
    </p>

    <h2
      style={{ fontFamily: "'Metal Mania', cursive" }}
      className="text-yellow-600 text-2xl sm:text-3xl lg:text-5xl leading-tight"
    >
      Cyber <br /> Security
    </h2>
  </div>
</div>

      {/* Bottom Logo */}
      <img src={Logo} alt="Logo" className="w-48 md:w-64 lg:w-130 mt-12" />
    </section>
  );
};

export default Workshops;
