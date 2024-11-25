import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import chat from "../assets/Chat.png";
import taskTrack from "../assets/tasktrackwebp.webp";
import toDo from "../assets/toDo.png";
import aml from "../assets/aml.jpg";
function Projects() {
  // const projects = [
  //     {
  //       id: "ASPK",
  //       title: "ASPK - ERP FOR LIFE",
  //       description:
  //         "ASPK is a comprehensive ERP system designed to seamlessly integrate and optimize both personal and professional aspects of life. It offers tools for task management, financial planning, health tracking, learning development, and project execution—all in one unified platform.",
  //       liveLink: "https://aspk-2o.netlify.app/",
  //       repoLink: "https://github.com/shahnap/ASPK",
  //     },
  //     {
  //       id: "Portfolio",
  //       title: "Portfolio - A Showcase of My Work",
  //       description:
  //         "My portfolio is a testament to my skills and creativity as a developer. Built with React and modern technologies, it reflects my journey, expertise, and dedication to creating impactful digital experiences.",
  //       liveLink: "https://portfolio-nw-lac.vercel.app/",
  //       repoLink: "https://github.com/Amal1947/PortfolioNw",
  //     },
  //     {
  //       id: "ToDo",
  //       title: "To-Do Application Using useQuery",
  //       description:
  //         "This To-Do application utilizes React’s useQuery hook to manage and fetch data efficiently. It ensures seamless data synchronization with the backend, showcasing modern data-fetching techniques.",
  //       liveLink: "https://to-do-use-query.vercel.app/",
  //       repoLink: "https://github.com/Amal1947/toDoUseQuery",
  //       image: toDo,
  //     },
  //   ];   
  // for simplyfing the code we can use this array but now i am not using
  const baskervvilleStyle = {
    fontFamily: '"Baskervville SC", system-ui',
    fontWeight: 400,
    fontStyle: "normal",
  };

  return (
    <div
      className="flex items-center justify-center w-full bg-white py-10 px-4"
      style={baskervvilleStyle}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
      <Card className="w-full">
  <CardBody>
    <div className="text-4xl mb-5">
      <h1>
        <b>ASPK</b>
      </h1>
    </div>
    <Typography variant="h5" color="blue-gray" className="mb-2">
      ASPK - ERP FOR LIFE
    </Typography>
    <Typography>
      ASPK is a comprehensive ERP system designed to seamlessly integrate and
      optimize both personal and professional aspects of life. It offers tools
      for task management, financial planning, health tracking, learning
      development, and project execution—all in one unified platform. With
      ASPK, balance productivity and well-being while achieving your life goals
      effortlessly.
    </Typography>
  </CardBody>
  <CardFooter className="pt-0 flex justify-between items-center">
    <a
      href="https://aspk-2o.netlify.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block"
    >
      <Button size="sm" variant="text" className="flex items-center gap-2">
        Live Link
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          />
        </svg>
      </Button>
    </a>
    <a
      href="https://github.com/shahnap/ASPK"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block"
    >
      <Button size="sm" variant="text" className="flex items-center gap-2">
      <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="h-6 w-6 text-gray-900"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12 0C5.373 0 0 5.373 0 12c0 5.301 3.438 9.801 8.207 11.392.6.111.816-.26.816-.577v-2.091c-3.338.727-4.034-1.609-4.034-1.609-.546-1.38-1.334-1.751-1.334-1.751-1.09-.743.083-.728.083-.728 1.204.084 1.84 1.237 1.84 1.237 1.07 1.83 2.809 1.303 3.492.998.108-.775.418-1.303.762-1.603-2.668-.303-5.467-1.334-5.467-5.933 0-1.31.467-2.382 1.235-3.22-.123-.303-.535-1.522.117-3.162 0 0 1.013-.324 3.314 1.236a11.47 11.47 0 013.021-.406c1.02 0 2.04.136 3.021.406 2.3-1.56 3.312-1.236 3.312-1.236.653 1.64.241 2.859.118 3.162.768.838 1.235 1.91 1.235 3.22 0 4.606-2.805 5.63-5.479 5.927.43.37.815 1.102.815 2.22v3.278c0 .318.216.689.824.577C20.563 21.801 24 17.3 24 12c0-6.627-5.373-12-12-12z"
                />
              </svg>
      </Button>
    </a>
  </CardFooter>
</Card>


        <Card className="w-full">
  <CardBody>
    {/* Replace the heading with text */}
    <div className="text-4xl mb-5">
      <h1>
        <b>aml</b>
      </h1>
    </div>

    <Typography variant="h5" color="blue-gray" className="mb-2">
      Portfolio - A Showcase of My Work
    </Typography>
    <Typography>
      My portfolio is a testament to my skills and creativity as a developer.
      It serves as a platform where I bring my ideas to life, combining design,
      functionality, and innovation. Built with React and modern technologies,
      it reflects my journey, expertise, and dedication to creating impactful
      digital experiences. This portfolio isn’t just a collection of
      projects—it’s a living representation of my passion for development and
      continuous learning.
    </Typography>
  </CardBody>
  <CardFooter className="pt-0 flex justify-between items-center">
    <a
      href="https://portfolio-nw-lac.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block"
    >
      <Button size="sm" variant="text" className="flex items-center gap-2">
        Live Link
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          />
        </svg>
      </Button>
    </a>
    <a
      href="https://github.com/Amal1947/PortfolioNw"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block"
    >
      <Button size="sm" variant="text" className="flex items-center gap-2">
      <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="h-6 w-6 text-gray-900"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12 0C5.373 0 0 5.373 0 12c0 5.301 3.438 9.801 8.207 11.392.6.111.816-.26.816-.577v-2.091c-3.338.727-4.034-1.609-4.034-1.609-.546-1.38-1.334-1.751-1.334-1.751-1.09-.743.083-.728.083-.728 1.204.084 1.84 1.237 1.84 1.237 1.07 1.83 2.809 1.303 3.492.998.108-.775.418-1.303.762-1.603-2.668-.303-5.467-1.334-5.467-5.933 0-1.31.467-2.382 1.235-3.22-.123-.303-.535-1.522.117-3.162 0 0 1.013-.324 3.314 1.236a11.47 11.47 0 013.021-.406c1.02 0 2.04.136 3.021.406 2.3-1.56 3.312-1.236 3.312-1.236.653 1.64.241 2.859.118 3.162.768.838 1.235 1.91 1.235 3.22 0 4.606-2.805 5.63-5.479 5.927.43.37.815 1.102.815 2.22v3.278c0 .318.216.689.824.577C20.563 21.801 24 17.3 24 12c0-6.627-5.373-12-12-12z"
                />
              </svg>
      </Button>
    </a>
  </CardFooter>
</Card>


        <Card className="w-full">
  <CardBody>
    <img src={toDo} alt="To-Do Application Preview" className="lg:h-[200px]" />
    <Typography variant="h5" color="blue-gray" className="mb-2">
      To-Do Application Using useQuery
    </Typography>
    <Typography>
      This To-Do application utilizes React’s useQuery hook from the
      react-query library to manage and fetch data efficiently. It
      allows users to create, view, update, and delete tasks while
      ensuring seamless data synchronization with the backend. With
      useQuery, the app automatically handles data fetching, caching,
      and error handling, providing a smooth and responsive user
      experience. This project showcases how to integrate modern
      data-fetching techniques with React to build fast, scalable, and
      user-friendly applications.
    </Typography>
  </CardBody>
  <CardFooter className="pt-0 flex justify-between items-center">
    <a
      href="https://to-do-use-query.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block"
    >
      <Button size="sm" variant="text" className="flex items-center gap-2">
        Live Link
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          />
        </svg>
      </Button>
    </a>
    <a
      href="https://github.com/Amal1947/toDoUseQuery"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block"
    >
      <Button size="sm" variant="text" className="flex items-center gap-2">
      <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="h-6 w-6 text-gray-900"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12 0C5.373 0 0 5.373 0 12c0 5.301 3.438 9.801 8.207 11.392.6.111.816-.26.816-.577v-2.091c-3.338.727-4.034-1.609-4.034-1.609-.546-1.38-1.334-1.751-1.334-1.751-1.09-.743.083-.728.083-.728 1.204.084 1.84 1.237 1.84 1.237 1.07 1.83 2.809 1.303 3.492.998.108-.775.418-1.303.762-1.603-2.668-.303-5.467-1.334-5.467-5.933 0-1.31.467-2.382 1.235-3.22-.123-.303-.535-1.522.117-3.162 0 0 1.013-.324 3.314 1.236a11.47 11.47 0 013.021-.406c1.02 0 2.04.136 3.021.406 2.3-1.56 3.312-1.236 3.312-1.236.653 1.64.241 2.859.118 3.162.768.838 1.235 1.91 1.235 3.22 0 4.606-2.805 5.63-5.479 5.927.43.37.815 1.102.815 2.22v3.278c0 .318.216.689.824.577C20.563 21.801 24 17.3 24 12c0-6.627-5.373-12-12-12z"
                />
              </svg>
      </Button>
    </a>
  </CardFooter>
</Card>


        <Card className="w-full">
  <CardBody>
    <img src={taskTrack} alt="Task Tracker Preview" className="lg:h-[200px]" />
    <Typography variant="h5" color="blue-gray" className="mb-2">
      Task Tracker
    </Typography>
    <Typography>
      The Task Tracker application is designed to help users efficiently
      manage and track their tasks and projects. With a user-friendly
      interface, it allows users to create, update, mark as completed,
      and delete tasks. The application features real-time updates,
      smooth navigation, and the ability to organize tasks based on
      priority or deadlines. It leverages modern web technologies like
      React for the front-end, providing a responsive and interactive
      experience. This app is perfect for individuals and teams looking
      to stay organized and on top of their tasks, boosting productivity
      and workflow.
    </Typography>
  </CardBody>
  <CardFooter className="pt-0 flex justify-between items-center">
    <a
      href="https://task-track-one-delta.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block"
    >
      <Button size="sm" variant="text" className="flex items-center gap-2">
        Live Link
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          />
        </svg>
      </Button>
    </a>
    <a
      href="https://github.com/Amal1947/taskTracker"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block"
    >
      <Button size="sm" variant="text" className="flex items-center gap-2">
       
        <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="h-6 w-6 text-gray-900"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12 0C5.373 0 0 5.373 0 12c0 5.301 3.438 9.801 8.207 11.392.6.111.816-.26.816-.577v-2.091c-3.338.727-4.034-1.609-4.034-1.609-.546-1.38-1.334-1.751-1.334-1.751-1.09-.743.083-.728.083-.728 1.204.084 1.84 1.237 1.84 1.237 1.07 1.83 2.809 1.303 3.492.998.108-.775.418-1.303.762-1.603-2.668-.303-5.467-1.334-5.467-5.933 0-1.31.467-2.382 1.235-3.22-.123-.303-.535-1.522.117-3.162 0 0 1.013-.324 3.314 1.236a11.47 11.47 0 013.021-.406c1.02 0 2.04.136 3.021.406 2.3-1.56 3.312-1.236 3.312-1.236.653 1.64.241 2.859.118 3.162.768.838 1.235 1.91 1.235 3.22 0 4.606-2.805 5.63-5.479 5.927.43.37.815 1.102.815 2.22v3.278c0 .318.216.689.824.577C20.563 21.801 24 17.3 24 12c0-6.627-5.373-12-12-12z"
                />
              </svg>
      </Button>
    </a>
  </CardFooter>
</Card>


        <Card className="w-full">
          <CardBody>
            
            <img src={chat} alt="" srcset="" className="lg:h-[200px]" />
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Real-time Chat Application Using Socket.IO
            </Typography>
            <Typography>
              The Real-time Chat application utilizes Socket.IO to enable
              instant, bidirectional communication between clients and the
              server. It allows users to send and receive messages in real time,
              providing an interactive and dynamic chatting experience. With
              support for private messaging and group chats, users can connect
              and communicate seamlessly. The app uses WebSockets, allowing
              messages to be pushed to the clients as soon as they are sent,
              ensuring immediate delivery. This project demonstrates the power
              of real-time data exchange, making it perfect for building
              interactive communication platforms like customer support chats,
              team messaging, or social media applications.
            </Typography>
            {/* Add the suitable image here */}
            {/* <img
      src="your-image-path.jpg" // Replace with the actual path to your image
      alt="Real-time Chat"
      className="mt-4 w-full rounded-lg"
    /> */}
          </CardBody>
          <CardFooter className="pt-0 flex justify-between items-center">
            {/* Update Learn More to Live link */}
            <a
              href="https://chat-app2-roan.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button
                size="sm"
                variant="text"
                type="button"
                className="flex items-center gap-2"
              >
                Live Link
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Button>
            </a>

            {/* Add GitHub icon on the right-most side */}
            <a
              href="https://github.com/Amal1947/chatApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="h-6 w-6 text-gray-900"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12 0C5.373 0 0 5.373 0 12c0 5.301 3.438 9.801 8.207 11.392.6.111.816-.26.816-.577v-2.091c-3.338.727-4.034-1.609-4.034-1.609-.546-1.38-1.334-1.751-1.334-1.751-1.09-.743.083-.728.083-.728 1.204.084 1.84 1.237 1.84 1.237 1.07 1.83 2.809 1.303 3.492.998.108-.775.418-1.303.762-1.603-2.668-.303-5.467-1.334-5.467-5.933 0-1.31.467-2.382 1.235-3.22-.123-.303-.535-1.522.117-3.162 0 0 1.013-.324 3.314 1.236a11.47 11.47 0 013.021-.406c1.02 0 2.04.136 3.021.406 2.3-1.56 3.312-1.236 3.312-1.236.653 1.64.241 2.859.118 3.162.768.838 1.235 1.91 1.235 3.22 0 4.606-2.805 5.63-5.479 5.927.43.37.815 1.102.815 2.22v3.278c0 .318.216.689.824.577C20.563 21.801 24 17.3 24 12c0-6.627-5.373-12-12-12z"
                />
              </svg>
            </a>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default Projects;
