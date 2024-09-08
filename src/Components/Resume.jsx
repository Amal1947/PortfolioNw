import React from 'react'
import { MdSchool } from "react-icons/md";
import { DiHtml5 } from "react-icons/di";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { FaDownload } from "react-icons/fa";
import resume from "../assets/AmalResumeOG.pdf"
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { DiMongodb } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
function Resume() {
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = resume; // Path to your resume file
    link.download = 'resume.pdf'; // Desired filename
    link.click(); // Programmatically trigger the download
  };
  return (
    <div>
        <div className='flex w-full'>
 <div><b className=' text-2xl justify-start flex-1 flex '>ABOUT ME</b>  </div> 
 <div className='justify-end flex flex-1 '><FaDownload style={{cursor:"pointer"}} onClick={downloadResume} className='mt-2 text-lg'/></div>


        </div>
        <div className='mt-3 text-lg'>
  <p className='mb-3'>
    As a full-stack developer, I have a strong foundation, yet I remain down-to-earth, always acknowledging the potential for improvement and seeking opportunities to grow. I have a genuine passion for acquiring knowledge in areas where I am currently unfamiliar.
  </p>
  <p className='mb-3'>
    Learning new technologies and exploring different aspects of web development excites me. Moreover, I am determined to enhance my expertise in the MERN (MongoDB, Express.js, React.js, Node.js) stack, which I already have a solid foundation in.
  </p>
  <p className='mb-3'>
    I'm enthusiastic about trying out new things and exploring various possibilities to broaden my horizons. Additionally, I'm eager to apply my knowledge and expertise in the MERN stack to create innovative solutions.
  </p>
  <p className='mb-3'>
    My ultimate goal is to become a well-rounded and skilled full-stack web developer capable of delivering cutting-edge solutions that positively impact the digital world.
  </p>
</div>

<div className='text-2xl mb-2'>
    <b>Education</b>
</div>

<div className='mb-2 '>
<a href="#" class="block w-full  p-6 bg-gray-100 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
<div className='flex gap-2'>
<div><MdSchool size={40}/></div>
<div className='w-full'>
<h5 class=" text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-1  ">MES KALLADI COLLAGE </h5>
Bachelor degree, Computer Applications


</div>
<div className='justify-end flex w-full text-lg'>
 <b style={{fontFamily:"serif"}}>2020-2023</b> 
</div>
</div>

{/* <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p> */}
</a>
</div>


<div className='mb-3 '>
<a href="#" class="block w-full  p-6 bg-gray-100 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
<div className='flex gap-2'>
<div><MdSchool size={40}/></div>
<div className='w-full'>
<h5 class=" text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-1  ">East Ottapalam GHSS </h5>
Higher Secondary, Computer Science


</div>
<div className='justify-end flex w-full text-lg'>
 <b style={{fontFamily:"serif"}}>2018-2020  </b> 
</div>
</div>

{/* <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p> */}
</a>
</div>

<div className='text-2xl mb-2'>
    <b>Tech Skills</b>
</div>

<div className='flex w-full gap-2 mb-3 flex-wrap '>
<div className="flex-1 flex bg-gray-300 rounded gap-1 p-1 sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/8 "><DiHtml5 size={25} color='red' style={{marginTop:"px"}}/> <span className='mt-'>HTML </span> </div>
<div className="flex-1 flex bg-gray-300 rounded gap-1 p-1  sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/8"><IoLogoCss3 size={25} color='blue' style={{marginTop:"px"}}/> <span className='mt-'>CSS </span> </div>
<div className="flex-1 flex bg-gray-300 rounded gap-1 p-1 sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/8 "><IoLogoJavascript size={25} color='yellow' style={{marginTop:"px"}}/> <span className='mt-'>Javascript </span> </div>
<div className="flex-1 flex bg-gray-300 rounded gap-1 p-1 sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/8 "><FaReact size={25} color='blue' style={{marginTop:"px"}}/> <span className='mt-'>React </span> </div>
<div className="flex-1 flex bg-gray-300 rounded gap-1 p-1 sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/8"><FaNodeJs size={25} color='green' style={{marginTop:"px"}}/> <span className='mt-'>node js </span> </div>
<div className="flex-1 flex bg-gray-300 rounded gap-1 p-1 sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/8 "><DiMongodb size={25} color='green' style={{marginTop:"px"}}/> <span className='mt-'>mongoDb </span> </div>
<div className="flex-1 flex bg-gray-300 rounded gap-1 p-1 sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/8 "><RiTailwindCssFill size={25} color='blue' style={{marginTop:"px"}}/> <span className='mt-'>tailwind </span> </div>
{/* <div className="flex-1 flex bg-gray-300 rounded gap-1 p-1  sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/8"><IoLogoCss3 size={25} color='blue' style={{marginTop:"px"}}/> <span className='mt-'>CSS </span> </div> */}



</div>
<div className='flex w-full gap-2 mb-3 flex-wrap '>
<div className="flex-1 flex bg-gray-300 rounded gap-1 p-1 sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/8 "><FaBootstrap size={25} color='blue' style={{marginTop:"px"}}/> <span className='mt-'>boottstrp </span> </div>
<div className="flex-1 flex bg-gray-300 rounded gap-1 p-1 sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/8 "><FaGithub size={25} color='black' style={{marginTop:"px"}}/> <span className='mt-'>git </span> </div>
<div className="flex-1 flex bg-gray-300 rounded gap-1 p-1 sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/8 "><SiNextdotjs size={25} color='black' style={{marginTop:"px"}}/> <span className='mt-'>next js </span> </div>
{/* <div className="flex-1 flex bg-gray-300 rounded gap-1 p-1 sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/8"><IoLogoCss3 size={25} color='blue' style={{marginTop:"px"}}/> <span className='mt-'>CSS </span> </div> */}
{/* <div className=" flex-1 flex bg-gray-300 rounded gap-1 p-1 sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/8"><IoLogoCss3 size={25} color='blue' style={{marginTop:"px"}}/> <span className='mt-'>CSS </span> </div> */}
{/* <div className="  flex-1 flex bg-gray-300 rounded gap-1 p-1 sm:w-1/3 md:w-1/4 lg:w-1/8 xl:w-1/8"><IoLogoCss3 size={25} color='blue' style={{marginTop:"px"}}/> <span className='mt-'>CSS </span> </div> */}
{/* <div className="   flex-1 flex bg-gray-300 rounded gap-1 p-1 sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/8"><IoLogoCss3 size={25} color='blue' style={{marginTop:"px"}}/> <span className='mt-'>CSS </span> </div> */}
{/* <div className="    flex-1 flex bg-gray-300 rounded gap-1 p-1 sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/8"><IoLogoCss3 size={25} color='blue' style={{marginTop:"px"}}/> <span className='mt-'>CSS </span> </div> */}
    



</div>

<div className='text-2xl mb-2'>
 <b> Soft Skills</b>
</div>

<div className='flex w-full gap-2 mb-3 flex-wrap '>
<div className="flex-1 flex bg-gray-300 rounded gap-1 p-1 sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/8"> <span className='mt-'>Communication </span> </div>
<div className=" flex-1 flex bg-gray-300 rounded gap-1 p-1 sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/8"> <span className='mt-'>Collaboration </span> </div>
<div className="  flex-1 flex bg-gray-300 rounded gap-1 p-1 sm:w-1/3 md:w-1/4 lg:w-1/8 xl:w-1/8"> <span className='mt-'>Time-Management </span> </div>
<div className="   flex-1 flex bg-gray-300 rounded gap-1 p-1 sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/8"> <span className='mt-'>Problem Solving </span> </div>
<div className="    flex-1 flex bg-gray-300 rounded gap-1 p-1 sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/8"> <span className='mt-'>Adaptability </span> </div>

</div>

<div className='text-2xl mb-2'>
 <b> languages</b>
</div>

<div className='flex w-full gap-2 mb-3 flex-wrap '>
<div className="flex-1 flex bg-gray-300 rounded gap-1 p-1 sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/8 justify-center"> <span className='mt-'>english </span> </div>
<div className=" flex-1 flex bg-gray-300 rounded gap-1 p-1 sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/8 justify-center"> <span className='mt-'>malayalam </span> </div>

</div>


    </div>
  )
}

export default Resume