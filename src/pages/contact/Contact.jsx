import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Title } from "../../Components";
import { Section } from "./ContactUsStyle";
import Loader from "../../Components/loader/Loader";

const Contact = () => {
  const [loader, setLoader] = useState("OK");
  const form = useRef();

  const fields = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };

  const toastProperties = {
    position: "bottom-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  };

  const [contactFrom, setContactForm] = useState(fields);

  const formHandler = (e) => {
    const { name, value } = e.target;

    // setContactForm({...contactFrom, [name]: value})

    setContactForm((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const submitHandler = (e) => {
    const { name, email, message, phone } = contactFrom;

    if (name === "" && email === "" && message === "" && phone === "") {
      toast.error("All Fields are required", toastProperties);
    } else if (name === "") {
      toast.error("Please Enter Your Name", toastProperties);
    } else if (email === "") {
      toast.error("Please Enter Your Email", toastProperties);
    } else if (phone === "") {
      toast.error("Please Enter Your Phone", toastProperties);
    } else if (message === "") {
      toast.error("Please Enter Your Message", toastProperties);
    } else {
      setLoader("not OK");
      emailjs
        .sendForm(
          "service_vowqu1c",
          "template_ncdi60o",
          form.current,
          "QSe4CdFu5PhIGItYD"
        )
        .then(
          (result) => {
            if (result.status === 200) {
              setLoader("OK");
            }
            toast.success("Message Successfully Send!!!", toastProperties);
          },
          (error) => {
            toast.error("Somethings Wents Wrong!!!", toastProperties);
          }
        );
      console.log(contactFrom);
      setContactForm(fields);
    }
    e.preventDefault();
  };

  return (
    <Section>
      <Title title="contact us" lineWidth={200} />
      <div className="contact_info_wrapper">
        {/* map  */}
        <div className="map_wrapper">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2828.3374133994407!2d74.79200361469896!3d34.03914132586892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e18fb855d5e4d1%3A0x9e93cd29cbd41862!2sCompix%20-VFX%20%26%20Animation!5e1!3m2!1sen!2sin!4v1680347597404!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: "0" }}
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        {/* contact input wrapper */}
        <form action="" onSubmit={submitHandler} ref={form}>
          <div className="input_wrapper">
            {/* name input */}
            <div className="inputs">
              <label htmlFor="name">Enter Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter Name"
                value={contactFrom.name}
                onChange={formHandler}
              />
            </div>
            {/* email input */}
            <div className="inputs">
              <label htmlFor="email">Enter Email:</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter Email"
                value={contactFrom.email}
                onChange={formHandler}
              />
            </div>

            {/* phone number input */}
            <div className="inputs">
              <label htmlFor="phone">Enter Phone:</label>
              <input
                type="number"
                id="phone"
                name="phone"
                placeholder="Enter Phone"
                // max="10"
                value={contactFrom.phone}
                onChange={formHandler}
              />
            </div>

            {/* message input */}
            <div className="inputs">
              <label htmlFor="message">Enter Message:</label>
              <textarea
                type="text"
                id="message"
                name="message"
                placeholder="Enter Message"
                value={contactFrom.message}
                onChange={formHandler}
              />
            </div>

            {/* submit button */}
            <button type="submit" style={{ textAlign: "center" }}>
              {loader === "OK" ? "Submit" : <Loader />}
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </Section>
  );
};

export default Contact;
