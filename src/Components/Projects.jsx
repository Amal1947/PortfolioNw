import React from "react";
import {
  Card,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

function Projects() {
  const baskervvilleStyle = {
    fontFamily: '"Baskervville SC", system-ui',
    fontWeight: 400,
    fontStyle: "normal",
  };

  return (
    <div
      className="flex items-center justify-center  w-full md:bg-white "
      style={baskervvilleStyle}
    >
      <Card className="w-80 md:w-96 md:shadow-lg rounded-lg bg-white">
        <CardBody className="flex flex-col items-center">
          <img
            src="https://media.giphy.com/media/jAYUbVXgESSti/giphy.gif" // Link to a public under construction GIF
            alt="Under Construction"
            className="w-48 h-48 md:h-30 md:mb:0 m-0 mb-4"
          />
          <Typography
            variant="h5"
            color="blue-gray"
            className="text-center font-bold text-xl mb-2"
          >
            Page Under Development
          </Typography>
          <Typography color="gray" className="text-center mb-4">
            I am working hard to bring this page to life! Stay tuned for
            updates.
          </Typography>
          {/* <Button
            size="lg"
            variant="gradient"
            className="bg-blue-500 hover:bg-blue-600 text-white"
          >
            Go Back
          </Button> */}
        </CardBody>
      </Card>
    </div>
  );
}

export default Projects;
