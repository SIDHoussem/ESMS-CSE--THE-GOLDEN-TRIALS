import React from "react";
import Logo from "../../assets/Decoration/logo.png";
import circle from "../../assets/Decoration/circle about.png";
import Circledeco from "../../assets/Decoration/circledeco.svg";
 import knife from "../../assets/Decoration/KNIFE.svg";

import Sonatrach from "../../assets/Decoration/sonatrachh.svg";

import Yassir from "../../assets/Decoration/yassirwhite.png";
import Ooredoo from "../../assets/Decoration/oreedo.png";

const Partners = () => {
  return (
    <section className="relative flex flex-col items-center justify-center py-16 px-6 overflow-visible">
           {/* Title circle */}
      <div className="relative flex items-center justify-center mb-12 -translate-y-[20%]">
        <img src={circle} alt="decoration" className="w-32 md:w-40 lg:w-48" />
        <span
          style={{ fontFamily: "'Metal Mania', cursive" }}
          className="absolute text-yellow-600 text-2xl md:text-3xl lg:text-4xl pt-0"
        >
          Partners
        </span>
      </div>

      {/* Background decorative circles */}
      <img
        src={Circledeco}
        alt=""
        className="absolute left-[-370px] top-[250px] w-[450px] md:w-[500px] lg:w-[600px] opacity-10 hidden md:block"
      />
      <img
        src={Circledeco}
        alt=""
        className="absolute right-[-180px] top-[50px] w-[300px] sm:right-60 sm:translate-x-1/2 sm:top-[700px] sm:w-[400px] md:w-[500px] lg:w-[700px] opacity-10 pointer-events-none"
      />

      {/* Main content section */}
      <div
        className="p-8 sm:p-12 w-full max-w-6xl -translate-y-[15%]"
        style={{ fontFamily: "'Crimson Pro'" }}
      >
        {/* Title */}
        <h2
          style={{ fontFamily: "'Cinzel', serif" }}
          className="text-yellow-600 text-3xl sm:text-4xl lg:text-5xl text-center mb-6"
        >
          Allies of the Golden Realm
        </h2>

       

{/* Description with background SVG */}
<div className="relative text-center text-gray-200 text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto mb-12 space-y-2">
  {/* Background SVG */}
 <img 
  src={knife} 
  alt="" 
  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[30%] pointer-events-none"
/>

  <div className="-translate-y-[-30%]">
  {/* Text content */}
  <p className="relative z-10">Great journeys are never faced alone.</p>
  <p className="relative z-10">
    Our partners stand as steadfast allies — offering their strength,
  </p>
  <p className="relative z-10">
    wisdom, and support as new innovators rise to meet their destiny.
  </p>
  </div>
</div>

{/* Brand logos grid */}
<div className="flex flex-nowrap sm:flex-wrap justify-center gap-6 sm:gap-10 mb-8 text-gray-200 pt-15">

  {/* ooredoo */}
  <div className="p-2 sm:p-9 inline-block text-center">
    <img src={Ooredoo} alt="Ooredoo" className="w-20 sm:w-32 lg:w-48" />
  </div>

  {/* Yassir (décalé vers le bas) */}
  <div className="p-2 sm:p-9 inline-block text-center translate-y-0 sm:translate-y-0">
    <img src={Yassir} alt="Yassir" className="w-20 sm:w-32  lg:w-60" />
  </div>

  {/* Sonatrach */}
  <div className="p-2 sm:p-9 inline-block text-center">
    <img src={Sonatrach} alt="Sonatrach" className="w-20 sm:w-32 lg:w-48" />
  </div>

</div>




{/* Naftal centered */}


      </div>

      {/* Bottom Logo */}
   
    </section>
  );
};

export default Partners;