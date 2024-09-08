import React, { useEffect, useState } from "react";
import shanu from "./assets/shanu.jpg";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import Resume from "./Components/Resume";
import Footer from "./Components/Footer";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import Contact from "./Components/Contact";
import { Breadcrumbs } from "@material-tailwind/react";
import { IoLogoLinkedin } from "react-icons/io5";
import { SiGmail } from "react-icons/si";
import { motion } from "framer-motion";
import { IoLogoWhatsapp } from "react-icons/io";
// import { FaDiscord } from "react-icons/fa";.
import amal from "./assets/mamal.jpg"
function App() {
  const baskervvilleStyle = {
    fontFamily: '"Baskervville SC", system-ui',
    fontWeight: 400,
    fontStyle: "normal",
  };

  const [navigationSet, setNavigationSet] = useState({
    Home: "true",
    Contact: "false",
    Projects: "false",
    Resume: "false",
  });

  useEffect(() => {
    console.log(navigationSet.Home, "navigate");
  }, [navigationSet]);

  return (
    <div className="container mx-auto md:p-0 p-3" style={baskervvilleStyle}>
      <div className="flex md:px-[20%]">
        <div className="w-full">
          <div className="flex gap-10">
            <div className="mt-10 w-[50%]">
              <div
                className="justify-center flex text-4xl"
                style={baskervvilleStyle}
              >
                AMAL K
              </div>
              <div
                className="justify-center flex mt-3"
                style={baskervvilleStyle}
              >
               <Breadcrumbs>
  <a href="#" className="opacity-60 cursor-default hover:text-black">
    MERN developer
  </a>
  <div className="opacity-60  cursor-default hover:text-black">
    Cloud Enthusias
  </div>
  <a href="#" className="opacity-60  cursor-default hover:text-black  ">
    learner
  </a>
</Breadcrumbs>

              </div>
              <div className="flex gap-5 justify-center flex mt-1">
                <div><IoLogoLinkedin size={20}/></div>
                <div><FaDiscord size={20} /></div>
                <div><SiGmail size={20}/></div>
                <div><IoLogoWhatsapp size={20}/></div>
              </div>
            </div>
            <div className="mt-5 flex w-40 h-40 text-white rounded-full bg-red-500 overflow-hidden">
              <img src={amal} alt="Amal K" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="mt-3 p-2  ">
  <ul className="flex  md:gap-10">
    <motion.button
      whileTap={{ scale: 0.9 }} // Animation on button click
      onClick={() => {
        setNavigationSet((ref) => ({
          ...ref,
          Home: "true",
          Contact: "false",
          Projects: "false",
          Resume: "false",
        }));
      }}
      style={{
        backgroundColor: navigationSet.Home == "true" ? "black" : "white",
        color: navigationSet.Home == "true" ? "white" : "black",
        borderRadius: "10%", // Make the button round
        padding: "7px 12px", // Adjust padding if needed
      }}
      className="focus:outline-none" // Add styling if needed
    >
      HOME
    </motion.button>

    <motion.button
  whileTap={{ scale: 0.9 }}
  onClick={() => {
    setNavigationSet((ref) => ({
      ...ref,
      Home: "false",
      Contact: "false",
      Projects: "true",
      Resume: "false",
    }));
  }}
  style={{
    backgroundColor: navigationSet.Projects == "true" ? "black" : "white",
    color: navigationSet.Projects == "true" ? "white" : "black",
    borderRadius: "10%", // Make the button round
    padding: "7px 12px", // Adjust padding if needed
  }}
  className="focus:outline-none"
>
  PROJECTS
</motion.button>



    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={() => {
        setNavigationSet((ref) => ({
          ...ref,
          Home: "false",
          Contact: "false",
          Projects: "false",
          Resume: "true",
        }));
      }}
      className="focus:outline-none"
      style={{
        backgroundColor: navigationSet.Resume == "true" ? "black" : "white",
        color: navigationSet.Resume == "true" ? "white" : "black",
        borderRadius: "10%", // Make the button round
        padding: "7px 12px", // Adjust padding if needed
      }}
    >
      RESUME
    </motion.button>

    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={() => {
        setNavigationSet((ref) => ({
          ...ref,
          Home: "false",
          Contact: "true",
          Projects: "false",
          Resume: "false",
        }));
      }}
      style={{
        backgroundColor: navigationSet.Contact == "true" ? "black" : "white",
        color: navigationSet.Contact == "true" ? "white" : "black",
        borderRadius: "10%", // Make the button round
        padding: "7px 12px", // Adjust padding if needed
      }}
      className="focus:outline-none"
    >
      CONTACT
    </motion.button>
  </ul>
</div>
          <div className="mt-5 mb-5">
            {navigationSet.Home === "true" ? (
              <Home />
            ) : navigationSet.Projects === "true" ? (
              <Projects />
            ) : navigationSet.Resume==="true"?(<Resume/>):navigationSet.Contact==="true"?(<Contact/>):(
              ""
            )}
          </div>

          {/* ---------------------footer----------------------- */}
          <div className="flex  w-full mb-2">
       <div className="w-full "><b>aml</b></div> 
       <div className="justify-end gap-3 flex w-full">
       <div className="mt-1"><FaGithub/></div>
       <div className="mt-1"><FaLinkedin/></div>

       <div className="mt-1"><FaDiscord/></div>

       </div>
       

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
