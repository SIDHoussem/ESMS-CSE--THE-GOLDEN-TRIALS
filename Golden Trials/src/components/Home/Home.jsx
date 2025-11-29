import React from "react";
import "./Home.css";
import Logo from "../../assets/Decoration/watermarked-941cfa63-8d55-42e6-abfd-3d611b7b984d_LE_upscale_strong_light_ai_20_remove_background_general_clip_to_object_on 5.png";
import SwordIcon from "../../assets/Decoration/Screenshot 2025-11-22 182757_LE_upscale_digital_art_x4_light_ai_30_remove_background_general_clip_to_object_on_LE_upscale_ultra_size_of_changes_10_intensity_10_light_ai_30_remove_background_general_clip_to_object_off_ 4.png";
import HourglassIcon from "../../assets/Decoration/eos-icons_hourglass.png";
import LocationIcon from "../../assets/Decoration/tdesign_location-filled.png";
import gtlogo from "../../assets/Decoration/Screenshot 2025-11-24 191725_LE_upscale_balanced_x4_remove_background_general_clip_to_object_off 1.png";

const Home = () => {
  return (
    <section className="min-h-screen px-6 md:px-12 lg:px-20 pt-10 ">
      {/* Logo */}
      <div className="flex justify-center mb-8">
        <img
          src={Logo}
          alt="Golden Trials Logo"
          className="w-48 md:w-64 lg:w-130"
        />
      </div>
      
        
           
             
               <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Content */}
       <div className="border-l-4 border-yellow-600 pl-8">
          {/* Title */}
       
          
             <div className="flex items-center gap-4 mb-6">
            <h2
              style={{ fontFamily: "Crimson Pro" }}
              className="text-yellow-600 text-2xl md:text-3xl lg:text-4xl">
              The Golden Trials Await The Worthy
            </h2>
            <img src={SwordIcon} alt="" className="w-8 md:w-10 lg:w-12" />
          </div>

          {/* Description */}
          <p className="text-white text-sm  md:text-base leading-relaxed mb-8">
            A summons echoes across the realm of innovators.
            <br />
            Only those with courage in their hearts and mastery in their craft
            will rise.
            <br />
            Gather your fellowship.
            <br />
            Step into the Trials.
            <br />
            Let destiny be forged.
          </p>

          {/* Date */}
          <div className="flex items-center gap-3 mb-4">
            <img src={HourglassIcon} alt="Date" className="w-5 md:w-6" />
            <span className="text-white text-sm md:text-base">Date</span>
          </div>

          {/* Location */}
          <div className="flex items-start gap-3 mb-8">
            <img
              src={LocationIcon}
              alt="Location"
              className="w-5 md:w-6 mt-1"
            />
            <div className="text-white text-sm md:text-base">
              <p>Esi - Ecole nationale supérieure d'informatique</p>
              <p className="text-gray-400">algiers, oued smar</p>
            </div>
          </div>
 
        
        </div>
        
       <img src={gtlogo}></img>
      </div>
        {/* Button */}
          <div className="flex justify-center">
            <button
              style={{ fontFamily: "'Metal Mania', cursive" }}
              className="mt-4 bg-emerald-950 rounded text-white px-8 py-3 text-2xl md:text-3xl">
              Enter the realm
            </button>
          </div>
          
    </section>
  );
};

export default Home;
