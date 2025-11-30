import React from "react";
import "./About.css";
import Logo from "../../assets/Decoration/watermarked-941cfa63-8d55-42e6-abfd-3d611b7b984d_LE_upscale_strong_light_ai_20_remove_background_general_clip_to_object_on 5.png";
import circle from "../../assets/Decoration/circle about.png";
import SwordIcon from "../../assets/Decoration/Screenshot 2025-11-22 182757_LE_upscale_digital_art_x4_light_ai_30_remove_background_general_clip_to_object_on_LE_upscale_ultra_size_of_changes_10_intensity_10_light_ai_30_remove_background_general_clip_to_object_off_ 4.png";
import Circledeco from "../../assets/Decoration/Screenshot 2025-11-22 173803_LE_upscale_strong_x2_light_ai_30_remove_background_general_clip_to_object_on (1)_LE_upscale_digital_art_light_ai_30_remove_background_general_clip_to_object_on 1.svg";
const About = () => {
  return (
    
    <section className="flex flex-col items-center justify-center py-13 px-4">
     
      
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
