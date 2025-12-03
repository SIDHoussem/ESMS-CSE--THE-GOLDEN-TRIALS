"use client"
import Logo from "../../assets/Decoration/seperator.png";
import Circledeco from "../../assets/Decoration/Circledeco.svg";
import faq from "../../assets/Decoration/faq.svg";
import element from "../../assets/Decoration/element.svg";

import { useState } from "react"

 function FAQ({ id }) {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "Who may step into the Trials?",
      answer: "The Golden Trials welcome all innovators and creators willing to test their skills and courage.",
    },
    {
      question: "Must I arrive with a fellowship?",
      answer:
        "While fellowships are encouraged for collaborative challenges, individual participation is equally valued.",
    },
    {
      question: "What are Hearts?",
      answer: "Hearts represent your courage and commitment throughout the trials. Manage them wisely as you progress.",
    },
    {
      question: "Are Workshops necessary?",
      answer: "Workshops provide valuable knowledge and skills, but are optional depending on your chosen path.",
    },
    {
      question: "What awaits in the final Trial?",
      answer: "The final trial is where all your skills and courage converge. Only the truly worthy claim victory.",
    },
  ]

  return (
    <section id={id} className="my-16 px-4 md:px-8 bg-background">
     <div className="flex justify-center my-[60px]"><img src={Logo} alt="Logo"  className="w-48 md:w-64 lg:w-130" /></div>
    
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          
          <div className="flex justify-center"><img src={faq} alt="" /></div>
          <div className="space-y-2.5 md:space-y-2.5 mr-8">
            {faqs.map((faq, index) => (
              <div key={index} className="relative ">
                <div className="absolute left-1 top-1 md:left-4 w-10 h-8 md:h-[72px] ">
                  <img src={element} alt=""  className="size-12 md:size-24"/>
                </div>

                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-start justify-between p-4 md:p-6 ml-16 md:ml-20 text-left group hover:bg-yellow-600/5 transition-colors"
                >
                  <div className="flex-1">
                    <h3 style={{FontFamily:"Crimson Pro"}} className="text-[10px] md:text-2xl font-serif font-bold text-white  transition-colors">
                      {faq.question}
                    </h3>
                  </div>

                  {/* ▼ Custom Arrow (rotates) */}
                  <svg
                    className={`w-6 h-6 text-white ml-4 flex-shrink-0 transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>

                {openIndex === index && (
                  <div className="ml-16 md:ml-20 px-4 md:px-6 pb-4 md:pb-6 text-white/80">
                    <p style={{FontFamily:"Crimson Pro"}} className="text-[10px] md:text-[16px] leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
export default FAQ;
