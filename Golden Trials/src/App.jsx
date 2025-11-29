import React from "react";
import Home from './components/Home/Home'
import About from './components/About/About'
import Agenda from './components/Agenda/Agenda'
import Workshops from './components/Workshops/Workshops'
import Partners from './components/Partners/Partners'
import FAQ from './components/FAQ/FAQ'
import ContactUs from './components/ContactUs/ContactUs'
import Header from "./components/Header/Header";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Agenda />
      <Workshops />
      <Partners />
      <FAQ />
      <ContactUs />
    </>
  );
}

export default App;
