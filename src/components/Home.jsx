import React from "react";
import hezzyImage from "../assets/HezzyImage.png";
import { RiMailSendLine } from "react-icons/ri";
import { Link } from "react-scroll";


const Home = () => {
 
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-mediumColor via-mediumColor to-darkColor"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full  md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-textColor">
            
             Hi, <span className="block whitespace-nowrap">I'm Jack,</span> <span className="whitespace-nowrap"> Web Developer.</span>
          </h2>
          <p className="inline text-cyan-500 sm:text-2xl py-6 max-w-md whitespace-nowrap">
            Front-End Developer | Javascript Student | Freelancer
          </p>

          <>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="group text-textColor w-fit px-3 py-3 mx-4 flex items-center rounded-md bg-gradient-to-r from-yellow-500 to-amber-500 cursor-pointer"
            >
              Contact Me
              <span className="group-hover:rotate-180 px-2 duration-300">
                <RiMailSendLine size={25} className="ml-1" />
              </span>
            </Link>
          </>
        </div>

        <div >
          <img
            src={hezzyImage}
            alt="my profile"
            className="rounded-2xl ml-16 mx-auto w-2/3 md:w-full opacity-70"
          />
        </div>

      </div>
    </div>
  );
};

export default Home;