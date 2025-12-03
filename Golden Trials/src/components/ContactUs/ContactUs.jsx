"use client"
import Logo from "../../assets/Decoration/seperator.png";
import Circledeco from "../../assets/Decoration/Circledeco.svg";
import contact from "../../assets/Decoration/contac.svg";
import cse from "../../assets/Decoration/cse.svg";
import headerImage from "../../assets/Header/logo.png";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";

function ContactUs() {
  const iconClasses = "w-6 h-6"; // Tailwind classes for size

  return (
    <section className="min-h-screen px-6 md:px-12 lg:px-20 pt-10 ">
      <div className="flex justify-center"><img src={Logo} alt="Logo"  className="w-48 md:w-64 lg:w-130" /></div>
       <div className="relative"><img  src={Circledeco} alt="" className="absolute left-[-300px] bottom-[-300px] w-[400px] md:w-[500px] lg:w-[600px] opacity-10 "/></div>
      <div className="max-w-4xl mx-auto">
        <div className="p-12 text-center">

          {/* Section heading */}
          <div className="flex justify-center mb-2.5 md:mb-6">
            <img src={contact} alt="Contact" />
          </div>

          {/* Textured title */}
          <div className="flex justify-center mb-2.5 md:mb-6">
            <img src={headerImage} alt="LOGO" className="" />
          </div>

          {/* Descriptive text */}
          <p style={{FontFamily:"Crimson Pro"}} className="text-white text-center text-[8px] sm:text-[14px] mb-2.5 md:mb-6 max-w-md mx-auto leading-relaxed">
            Seek guidance, ask your questions, or call upon the Council for aid.
            <br />
            We stand ready to answer.
          </p>

          {/* Social icons */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-6 md:gap-8 mb-2.5 md:mb-6">
  <a
    href="#"
    className="w-10 h-10 sm:w-14 sm:h-14 rounded-full border-2 border-y-yellow-600 flex items-center justify-center text-yellow-600 hover:bg-yellow-600/10 transition-colors"
    aria-label="Facebook"
  >
    <FaFacebookF className={iconClasses} />
  </a>

  <a
    href="#"
    className="w-10 h-10 sm:w-14 sm:h-14 rounded-full border-2 border-y-yellow-600 flex items-center justify-center text-yellow-600 hover:bg-yellow-600/10 transition-colors"
    aria-label="LinkedIn"
  >
    <FaLinkedinIn className={iconClasses} />
  </a>

  <a
    href="#"
    className="w-10 h-10 sm:w-14 sm:h-14 rounded-full border-2 border-y-yellow-600 flex items-center justify-center text-yellow-600 hover:bg-yellow-600/10 transition-colors"
    aria-label="Instagram"
  >
    <FaInstagram className={iconClasses} />
  </a>

  <a
    href="#"
    className="w-10 h-10 sm:w-14 sm:h-14  rounded-full border-2 border-y-amber-600 flex items-center justify-center text-yellow-600 hover:bg-yellow-600/10 transition-colors"
    aria-label="TikTok"
  >
    <FaTiktok className={iconClasses} />
  </a>

  <a
    href="#"
    className="w-10 h-10 sm:w-14 sm:h-14 rounded-full border-2 border-y-amber-600 flex items-center justify-center text-yellow-600 hover:bg-yellow-600/10 transition-colors"
    aria-label="Twitter"
  >
    <FaTwitter className={iconClasses} />
  </a>
</div>


          {/* Organization logo/text */}
          <div className="flex justify-center">
            <img src={cse} alt="CSE Logo" />
          </div>
        </div>
      </div>
      <div className="relative h-0">
                    <img
                      src={Circledeco}
                      alt=""
                      className="absolute right-[-50px] translate-x-1/2 bottom-[0px] w-[400px] md:w-[500px] lg:w-[500px] opacity-10 pointer-events-none"
                    />
              </div>
      
    </section>
  );
}
export default ContactUs;
