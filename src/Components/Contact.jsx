import React, { useState } from "react";
import { Input } from "@material-tailwind/react";
import { Textarea } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";

import { Breadcrumbs } from "@material-tailwind/react";


function Contact() {
  const [loading, setLoading] = useState(false)

  const HandelSend = ()=>{
    setLoading(true)
    setTimeout(() => {

      setLoading(false)
    }, 2000);
  }
  return (
    <div>
      <div className="text-2xl mb-2">
        <b> Contact With Me</b>
      </div>
      <div className="mb-3">
      If you want to know more about me or my work, or if you would just like to say hello, send me a message. I'd love to hear from you.
      </div>

      <div className="flex w-full gap-2 ">
      <div className="w-full">
      <Input label="Name" />
    </div>
    <div className="w-full mb-3">
      <Input label="Email" />
    </div>
     
      </div>
      <div className="w-100 ">
      <Textarea label="Message" />
    </div>
    <div>
    <Button loading={loading} onClick={HandelSend}>{loading?"sending":"send"}</Button>
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
          />
        </svg>
      </Button>
      <Button variant="outlined" className="flex items-center gap-3">
        whats app
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
          />
        </svg>
      </Button>
      <Button variant="outlined" className="flex items-center gap-3">
        discord
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
          />
        </svg>
      </Button>
</Breadcrumbs>
    </div>

  );
}

export default Contact;
