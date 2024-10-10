import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaReact,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";

const LeftBanner = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "./resume.pdf"; // Path to your resume file in the public folder
    link.download = "Dharanish_Resume.pdf"; // Name for the downloaded file
    link.click();
  };
  const [text] = useTypewriter({
    words: ["Software Developer", "MernStack Developer", "UX Enthusiast"],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        {/* <h4 className=" text-lg font-normal">Hi, I'm</h4> */}
        <br />
        <h4 className="text-6xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">
            Dharanish Karthikeyan
          </span>
        </h4>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          Enthusiastic and detail-oriented Full Stack Developer with a proven
          track record of delivering high-quality software solutions. Proficient
          in both frontend and back-end technologies, I adopt a holistic
          approach to development, encompassing everything from
          conceptualization and design to deployment and maintenance.I utilize
          Agile methodology and Scrum practices to ensure efficient and adaptive
          project management.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a href="https://github.com/Dharanish3" target="blank">
              <span className="bannerIcon">
                <FaGithub />
              </span>
            </a>
            {/* <a href="https://github.com/noorjsdivs/portfolioone" target="blank">
              <span className="bannerIcon">
                <FaFacebookF />
              </span>
            </a>
            <a href="https://github.com/noorjsdivs/portfolioone" target="blank">
              <span className="bannerIcon">
                <FaTwitter />
              </span>
            </a> */}
            <a href="https://www.linkedin.com/in/dharanishsk/" target="blank">
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
            {/* <a>
              <button
                className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                onClick={handleDownload}
              >
                Resume Download
              </button>
            </a> */}
          </div>
        </div>
        {/* <div>
          <h2 className="text-base uppercase font-titleFont mb-4">View Resume</h2>
          <div className="flex gap-4">
            
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default LeftBanner;
