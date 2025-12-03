import React from "react";
import "./Home.css";
import Logo from "../../assets/Decoration/logo.png";
import SwordIcon from "../../assets/Decoration/swordicon.png";
import HourglassIcon from "../../assets/Decoration/eos-icons_hourglass.png";
import LocationIcon from "../../assets/Decoration/tdesign_location-filled.png";
import gtlogo from "../../assets/Decoration/gtlogo.png";

const Home = ({ id }) => {
  return (
    <section id={id} className="min-h-screen px-6 md:px-12 lg:px-20 pt-10 ">
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
              className="mt-4 bg-emerald-950 rounded text-white px-8 py-3 text-2xl md:text-3xl hover:bg-white hover:text-emerald-950 transition-colors">
              Enter the realm
            </button>
          </div>
          
    </section>
  );
};

export default Home;
