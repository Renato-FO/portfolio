import arrowRight from "@/images/arrowRight.png";
import api from "@/pages/api/mail/sendMail";
import Image from "next/image";
import { useState } from "react";
import Toast from "./Toast";

interface Props {
  title: string;
  subtitle: string;
  contact_name_label: string;
  contact_name_placeholder: string;
  contact_email_label: string;
  contact_email_placeholder: string;
  contact_message_label: string;
  contact_message_placeholder: string;
  contact_send: string;
}

export default function Contact({
  title,
  subtitle,
  contact_name_label,
  contact_name_placeholder,
  contact_email_label,
  contact_email_placeholder,
  contact_message_label,
  contact_message_placeholder,
  contact_send,
}: Props) {
  const [name, setName] = useState(""),
    [mail, setMail] = useState(""),
    [message, setMessage] = useState(""),
    [disabled, setDisabled] = useState(false),
    [showMessage, setShowMessage] = useState(false);

  const sendMail = () => {
    let data = {
      name,
      mail,
      message,
    };

    setDisabled(true);

    fetch("/api/mail/sendMail", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res: any) => {
      if (res.status === 200) {
        setDisabled(false);
        setShowMessage(true);
      }
    });
  };

  return (
    <section id="contact" className="w-full h-screen bgCustomized flex">
      <div className="content flex flex-col px-2 my-auto sm:mt-24 items-center">
        <h1 className="w-full text-center text-4xl lg:text-6xl font-bold text-primary-green">
          {title}
        </h1>
        <h3 className="hidden md:flex text-2xl text-center text-primary-green font-semibold max-w-lg mt-4">
          {subtitle}
        </h3>
        <div className="mt-6 w-full grid grid-cols-2 text-primary-green gap-6">
          <div>
            <label htmlFor="name" className="text-sm md:text-lg font-semibold">
              {contact_name_label}
            </label>
            <input
              id="name"
              type="text"
              placeholder={contact_name_placeholder}
              onChange={(e) => setName(e.target.value)}
              className="w-full py-2 bg-primary-blue border-b-2 border-primary-green mt-2 px-2 focus:ring-0 focus:outline-none rounded-sm placeholder-primary-green placeholder-opacity-60 placeholder:font-semibold"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm md:text-lg font-semibold">
              {contact_email_label}
            </label>
            <input
              id="email"
              type="email"
              placeholder={contact_email_placeholder}
              onChange={(e) => setMail(e.target.value)}
              className="w-full py-2 bg-primary-blue border-b-2 border-primary-green mt-2 px-2 focus:ring-0 focus:outline-none rounded-sm placeholder-primary-green placeholder-opacity-60 placeholder:font-semibold"
            />
          </div>
          <div className="col-span-2">
            <label
              htmlFor="message"
              className="text-sm md:text-lg font-semibold"
            >
              {contact_message_label}
            </label>
            <textarea
              name="message"
              id="message"
              cols={30}
              rows={6}
              placeholder={contact_message_placeholder}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full py-2 bg-primary-blue border-b-2 border-primary-green mt-2 px-2 focus:ring-0 focus:outline-none rounded-sm placeholder-primary-green placeholder-opacity-60 placeholder:font-semibold"
            ></textarea>
          </div>
        </div>
        <button
          disabled={disabled}
          onClick={sendMail}
          className={`border-2 border-primary-green w-52 py-2 rounded-md mt-4 font-semibold text-primary-green flex items-center gap-2 justify-center placeholder-primary-green placeholder-opacity-60 placeholder:font-semibold ${
            disabled ? "cursor-progress" : ""
          }`}
        >
          {contact_send}
          <Image alt={contact_send} src={arrowRight} height={15} />
        </button>
      </div>
      <Toast
        show={showMessage}
        onClose={() => {
          return setShowMessage(false);
        }}
      />
    </section>
  );
}
