import React from "react";
import "./Agenda.css";
import circle from "../../assets/Decoration/circle about.png";
import Logo from "../../assets/Decoration/logo.png";
import Circledeco from "../../assets/Decoration/circledeco.svg";

const Agenda = ({ id }) => {
  const day1Events = [
    { time: "09h00 - 09h30", title: "Check-in" },
    {
      time: "09h30 - 10h00",
      title: "Opening Ceremony and Icebreaker Activity",
    },
    { time: "10h00 - 12h00", title: "Individual Challenges Part 1" },
    { time: "12h00 - 14h30", title: "Lunch Break + Prayer" },
    { time: "14h30-16h30", title: "Individual Challenges Part 2" },
    { time: "16h30 - 17h00", title: "Coffee Break and Fun Activities" },
    { time: "17h00-20h00", title: "Individual Challenges Part 3" },
    {
      time: "20h00",
      title: "End of Phase 1 Challenges & Submission of Projects",
    },
    { time: "21h00 - 22h00", title: "Dinner" },
    { time: "22h00 - 00h00", title: "Launch of the Collaborative Challenge" },
  ];

  const day2Events = [
    { time: "12:30-1:00", title: "Midnight Break" },
    { time: "1:00-7:00", title: "Collaborative Work: Part1" },
    { time: "7:00-7:30", title: "Breakfast" },
    { time: "8:00-11:00", title: "Collaborative Work: Part 2" },
    { time: "11:00 -12:00", title: "Presentation Preparation" },
    { time: "12:00-1:00", title: "Lunch Break + Prayer" },
    { time: "1:00-2:30", title: "Final Presentations" },
    {
      time: "2:30-4:30 PM",
      title: "Coffee Break + Fun Activities and Networking",
    },
    { time: "4:30-6:30 PM", title: "Awards Ceremony and Winners Announcement" },
  ];

  return (
    <section id={id} className="flex flex-col items-center  pb-16 px-4 overflow-hidden">
      {/* Title with Circle */}
      <div className="relative flex items-center justify-center mb-12">
        <img src={circle} alt="decoration" className="w-32 md:w-40 lg:w-48" />
        <span
          style={{ fontFamily: "'Metal Mania', cursive" }}
          className="absolute text-yellow-600 text-2xl md:text-3xl lg:text-4xl">
          Agenda
        </span>
      </div>
      <img
        src={Circledeco}
        alt=""
        className="absolute left-[-150px] top-[1500px] w-[400px] md:w-[500px] lg:w-[250px] opacity-10 "
      />
      {/* Two Column Schedule */}
      <div
        className="flex flex-col md:flex-row gap-8 md:gap-16 w-full max-w-5xl "
        style={{ fontFamily: "'Crimson Pro'" }}>
        {/* Day 1 */}
        <div className="flex-1 border-l-2 border-yellow-600 pl-6">
          <h3 className="text-yellow-600 text-xl md:text-2xl mb-6">
            <span className="block text-3xl md:text-4xl ">06</span>
            FEBRUARY
          </h3>
          <ul className="space-y-4">
            {day1Events.map((event, index) => (
              <li key={index} className="text-white text-sm md:text-base">
                <span className="text-yellow-600 font-semibold">
                  {event.time}
                </span>{" "}
                {event.title}
              </li>
            ))}
          </ul>
        </div>

        {/* Day 2 */}
        <div
          className="flex-1 border-l-2 border-yellow-600 pl-6"
          style={{ fontFamily: "'Crimson Pro'" }}>
          <h3 className="text-yellow-600 text-xl md:text-2xl mb-6">
            <span className="block text-3xl md:text-4xl ">07</span>
            FEBRUARY
          </h3>
          <ul className="space-y-4">
            {day2Events.map((event, index) => (
              <li key={index} className="text-white text-sm md:text-base">
                <span className="text-yellow-600 font-semibold">
                  {event.time}
                </span>{" "}
                {event.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="relative h-0 w-full">
        <img
          src={Circledeco}
          alt=""
          className="absolute right-0 translate-x-1/2 top-[-550px] w-[400px] md:w-[500px] lg:w-[500px] opacity-10 pointer-events-none"
        />
      </div>
      <img src={Logo} alt="Logo" className="w-48 md:w-64 lg:w-130 mt-12" />
    </section>
  );
};

export default Agenda;
