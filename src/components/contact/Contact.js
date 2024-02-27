import React, { useState, useRef } from "react";
import Titles from "../layouts/Titles";
import ContactLeft from "./ContactLeft";
import emailjs from "@emailjs/browser";

function Contact() {
  //===================Sending an email===================
  const form = useRef();

  const sendEmail = (e) => {
    //e.preventDefault();

    emailjs
      .sendForm(
        "service_414kml7",
        "template_kqbh4yj",
        form.current,
        "-TF_ElUxPaTBeCWM4"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message send successful");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  //============= Sending email ends===========

  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // ========== Email Validation start here ==============
  const emailValidation = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };
  // ========== Email Validation end here ================

  const handleSend = (e) => {
    e.preventDefault();
    if (username === "") {
      setErrMsg("Username is required!");
    } else if (phoneNumber === "") {
      setErrMsg("Phone number is required!");
    } else if (email === "") {
      setErrMsg("Please give your Email!");
    } else if (!emailValidation(email)) {
      setErrMsg("Give a valid Email!");
    } else if (subject === "") {
      setErrMsg("Plese give your Subject!");
    } else if (message === "") {
      setErrMsg("Message is required!");
    } else {
      setSuccessMsg(
        `Thank you dear ${username}, Your Messages has been sent Successfully!`
      );
      setErrMsg("");
      setUsername("");
      setPhoneNumber("");
      setEmail("");
      setSubject("");
      setMessage("");
      console.log(username, phoneNumber, email, subject, message);
      sendEmail();
    }
  };

  return (
    <section
      id="contact"
      className="w-full py-20 border-b-[1px border-b-black]"
    >
      <div className="flex justify-center items-center text-center">
        <Titles title="CONTACT" des="Contact With Me" />
      </div>
      <div className="w-full ">
        <div className=" w-full h-auto flex justify-between">
          <ContactLeft />
          <div className="w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-8 rounded-lg shadow-shadowOne">
            <form
              ref={form}
              onSubmit={sendEmail}
              className=" w-full flex flex-col gap-6 py-5"
            >
              {errMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                  {errMsg}{" "}
                </p>
              )}
              {successMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                  {successMsg}
                </p>
              )}
              <div className=" w-full flex gap-10">
                <div className=" w-1/2 flex flex-col gap-4">
                  <p className=" text-sm text-gray-400 uppercase tracking-wide">
                    YOUR NAME
                  </p>
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    className={`${
                      errMsg === "Username is required!" &&
                      "outline-designColor"
                    } contactInput`}
                    type="text"
                    name="username"
                  />
                </div>
                <div className=" w-1/2 flex flex-col gap-4">
                  <p className=" text-sm text-gray-400 uppercase tracking-wide">
                    PHONE NO.
                  </p>
                  <input
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value={phoneNumber}
                    className={`${
                      errMsg === "Phone number is required!" &&
                      "outline-designColor"
                    } contactInput`}
                    type="text"
                    name="phoneNumber"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className=" text-sm text-gray-400 uppercase tracking-wide">
                  Email
                </p>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className={`${
                    errMsg === "Please give your Email!" &&
                    "outline-designColor"
                  } contactInput`}
                  type="email"
                  name="email"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className=" text-sm text-gray-400 uppercase tracking-wide">
                  Subject
                </p>
                <input
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                  className={`${
                    errMsg === "Plese give your Subject!" &&
                    "outline-designColor"
                  } contactInput`}
                  type="text"
                  name="subject"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className=" text-sm text-gray-400 uppercase tracking-wide">
                  Your Message
                </p>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  className={`${
                    errMsg === "Message is required!" && "outline-designColor"
                  } contactTextArea`}
                  cols="30"
                  rows="10"
                  name="message"
                />
              </div>
              <div className="w-full">
                <button
                  type="submit"
                  onClick={handleSend}
                  className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                  value="Send"
                >
                  Send Message
                </button>
              </div>
              {errMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                  {errMsg}{" "}
                </p>
              )}
              {successMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                  {successMsg}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
