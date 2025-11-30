import React from "react";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Agenda from "./components/Agenda/Agenda";
import Workshops from "./components/Workshops/Workshops";
import Partners from "./components/Partners/Partners";
import FAQ from "./components/FAQ/FAQ";
import ContactUs from "./components/ContactUs/ContactUs";
import Header from "./components/Header/Header";
import Circledeco from "./assets/Decoration/Screenshot 2025-11-22 173803_LE_upscale_strong_x2_light_ai_30_remove_background_general_clip_to_object_on (1)_LE_upscale_digital_art_light_ai_30_remove_background_general_clip_to_object_on 1.svg";
import "./App.css";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Home />

      {/* Decorative Circle - scrolls with page */}
      <div className="relative h-0">
        <img
          src={Circledeco}
          alt=""
          className="absolute right-0 translate-x-1/2 top-[-100px] w-[400px] md:w-[500px] lg:w-[500px] opacity-10 pointer-events-none"
        />
      </div>

      <About />
      <Agenda />
      <Workshops />
      <Partners />
      <FAQ />
      <ContactUs />
    </div>
  );
}

export default App;
