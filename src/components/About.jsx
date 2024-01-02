import React from "react";


const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-mediumColor  to-darkColor text-textColor"
    >   
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-lightColor">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          I am an industrious and ambitious front-end developer looking for a role in an established IT and/or ICT company
          with the opportunity to work with experienced professionals and latest technologies. Am excited by 
          varied challenging tasks and projects.
        </p>

        <br />

        <p className="text-xl">
          By nature I am a calm and quiet person, super curious and continually devising ways to improve my abilities, talents and
          skills one breathe at a time. 
        </p>

        <br />

        <p className="text-xl">
          I am a social individual, old-fashioned in my belief of family and friends as important aspects of life. 
          Self-proclaimed sports fanatic, football and basketball rules the roost, also a terrible Poker player. I don't play sports much anymore unless it's over
           the summer periods but I'm an avid cyclist,gym-rat and I occassionally run/jog. 
        </p>

        <br />

        <p className="text-xl">
          My fascination with Technologies begun during the advent of smart phones and led to a Computer Science degree in Information Technology, Telecommunications major.
                 
        </p>

       

      </div>
    </div>
  );
};

export default About;