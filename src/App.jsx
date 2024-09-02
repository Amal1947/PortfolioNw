import React, { useEffect, useState } from "react";
import shanu from "./assets/shanu.jpg";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import Resume from "./Components/Resume";
import Footer from "./Components/Footer";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
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
                React Developer in Kochi
              </div>
              <div className="flex gap-9 justify-center flex">
                <div>a</div>
                <div>a</div>
                <div>a</div>
                <div>a</div>
              </div>
            </div>
            <div className="mt-5 flex w-40 h-40 text-white rounded-full bg-red-500 overflow-hidden">
              {/* <img src={shanu} alt="Amal K" className="w-full h-full object-cover" /> */}
            </div>
          </div>
          <div className="mt-3 p-2">
            <ul className="flex gap-8 md:gap-10   ">
              <li
                onClick={() => {
                  setNavigationSet((ref) => ({
                    ...ref,
                    Home: "true",
                    Contact: "false",
                    Projects: "false",
                    Resume: "false",
                  }));
                }}
              >
                HOME
              </li>
              <li
                onClick={() => {
                  setNavigationSet((ref) => ({
                    ...ref,
                    Home: "false",
                    Contact: "false",
                    Projects: "true",
                    Resume: "false",
                  }));
                }}
              >
                PROJECTS
              </li>
              <li
                onClick={() => {
                  setNavigationSet((ref) => ({
                    ...ref,
                    Home: "false",
                    Contact: "false",
                    Projects: "false",
                    Resume: "true",
                  }));
                }}
              >
                RESUME
              </li>
              <li
                onClick={() => {
                  setNavigationSet((ref) => ({
                    ...ref,
                    Home: "false",
                    Contact: "true",
                    Projects: "false",
                    Resume: "false",
                  }));
                }}
              >
                CONTACT
              </li>
              {/* <li>amla</li> */}
            </ul>
          </div>
          <div className="mt-5 mb-5">
            {navigationSet.Home === "true" ? (
              <Home />
            ) : navigationSet.Projects === "true" ? (
              <Projects />
            ) : navigationSet.Resume==="true"?(<Resume/>): (
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
