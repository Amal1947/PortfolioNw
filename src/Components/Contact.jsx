import React, { useEffect, useState } from "react";
import { Input } from "@material-tailwind/react";
import { Textarea } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";

import { Breadcrumbs } from "@material-tailwind/react";
import axios from "axios";

function Contact() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const HandelSend = () => {
    setLoading(true);
 return
    axios.post("http://localhost:7000/send-email", data).then((response) => {
      console.log("response", response);
    });
  };

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  return (
    <div>
      <div className="text-2xl mb-2">
        <b> Contact With Me</b>
      </div>
      <div className="mb-3">
        If you want to know more about me or my work, or if you would just like
        to say hello, send me a message. I'd love to hear from you.
      </div>

      <div className="md:flex  w-full gap-2 ">
        <div className="w-full mb-1 md:mb-0">
          <Input
            label="Name"
            value={data.name}
            onChange={(e) => {
              setData((ref) => ({
                ...ref,
                name: e.target.value,
              }));
            }}
          />
        </div>
        <div className="w-full md:mb-3 mb-1">
          <Input
            label="Email"
            value={data.email}
            onChange={(e) =>
              setData((ref) => ({
                ...ref,
                email: e.target.value,
              }))
            }
          />
        </div>
      </div>
      <div className="w-100 ">
        <Textarea
          label="Message"
          value={data.message}
          onChange={(e) =>
            setData((ref) => ({
              ...ref,
              message: e.target.value,
            }))
          }
        />
      </div>
      <div>
        <Button loading={loading} onClick={HandelSend}>
          {loading ? "sending" : "send"}
        </Button>
      </div>

      <div className="w-full justify-center flex mb-3">
        <b>or</b>
      </div>
      <div className="mb-3">
        <b>Reach out to some of my most active platforms.</b>
      </div>
      <Breadcrumbs>
        <Button variant="outlined" className="flex items-center gap-3">
          gmail
        </Button>
        <Button variant="outlined" className="flex items-center gap-3">
          whats app
        </Button>
        <Button variant="outlined" className="flex items-center gap-3">
          discord
        </Button>
      </Breadcrumbs>
    </div>
  );
}

export default Contact;
