import React from "react";
import "./About.css";
import Logo from "../../assets/Decoration/logo.png";
import circle from "../../assets/Decoration/circle about.png";
import SwordIcon from "../../assets/Decoration/swordicon.png";
import Circledeco from "../../assets/Decoration/circledeco.svg";
const About = ({ id }) => {
  return (
    
    <section id={id} className="flex flex-col items-center justify-center py-13 px-4">
     
      
      {/* Logo */}
      <br />
      <br />
      <br />
      <img src={Logo} alt="Logo"  className="w-48 md:w-64 lg:w-130" />

              <img 
                src={Circledeco} 
                alt="" 
                className="absolute left-[-150px] top-[1000px] w-[400px] md:w-[500px] lg:w-[300px] opacity-10 "
              />
          
      {/* Circle with About text inside */}
      <div className="relative flex items-center justify-center mb-8">
        <img src={circle} alt="decoration" className="w-32 md:w-40 lg:w-48" />
        <span
          style={{ fontFamily: "'Metal Mania', cursive" }}
          className="absolute text-yellow-600 text-2xl md:text-3xl lg:text-4xl">
          About
        </span>
      </div>

      {/* Sword - Paragraph - Sword (horizontal) */}
      <div className="flex items-center justify-center gap-4 md:gap-8">
        <img src={SwordIcon} alt="" className="w-8 md:w-10 lg:w-12" />
        <p className="text-white text-sm md:text-base leading-re</p>laxed max-w-2xl text-center">
          The Golden Trials are no ordinary contest.
          <br />
          Across two days, fellowships of creators embark on a journey of peril
          and brilliance — where each traveler chooses their path:
          <br />
          Developer, Designer, AI Seer, Cyber Guardian, Visual Crafter, or Pitch
          Bearer.
          <br />
          Each challenge is a gate.
          <br />
          Only when one is conquered does the next reveal itself.
          <br />
          But beware: every member carries a finite number of Hearts.
          <br />
          Lose them all, and your place in the fellowship fades into shadow.
        </p>
        <img src={SwordIcon} alt="" className="w-8 md:w-10 lg:w-12" />
      </div>
<br />
<br />

      {/* Bottom Logo */}
      <img src={Logo} alt="Logo"  className="w-48 md:w-64 lg:w-130" />
    </section>
  );
};

export default About;
