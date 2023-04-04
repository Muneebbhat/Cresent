import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Model } from "./registerStyle";
import { AiFillCloseCircle } from "react-icons/ai";
import Loader from "../loader/Loader";

const RegisterUser = ({ toggle }) => {
  const franchiseFormRef = useRef()
  const [loader, setLoader] = useState("OK");
  
  const franchise = {
    franchise_name: "",
    franchise_email: "",
    franchise_phone: "",
    franchise_select: "",
  };

  const [franchiseForm, setFranchiseFrom] = useState(franchise);

  const formHandler = (e) => {
    e.preventDefault();
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

    const {
      franchise_name: name,
      franchise_email: email,
      franchise_phone: phone,
      franchise_select: message,
    } = franchiseForm;

    if (name === "" && email === "" && message === "" && phone === "") {
      toast.error("All Fields are required", toastProperties);
    } else if (name === "") {
      toast.error("Please Enter Your Name", toastProperties);
    } else if (email === "") {
      toast.error("Please Enter Your Email", toastProperties);
    } else if (phone === "") {
      toast.error("Please Enter Your Phone", toastProperties);
    } else if (message === "") {
      toast.error("Please Select Franchise", toastProperties);
    } else {
      setLoader("not OK");
      emailjs
        .sendForm(
          "service_vowqu1c",
          "template_9cw76ee",
          franchiseFormRef.current,
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
        setFranchiseFrom(franchise)
    }
  };

  const onchnageFormHandler = (e) => {
    const { name, value } = e.target;
    setFranchiseFrom((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <Model>
      <div className="popup_background"></div>
      <div className="morel_wrapper">
        {/* header wrapper */}
        <div className="title_wrapper">
          <div className="title">
            <h3>Apply For Franchise</h3>
          </div>
          <div className="close_wrapper">
            <AiFillCloseCircle onClick={() => toggle()} />
          </div>
        </div>

        {/* form wrapper */}
        <div className="form_wrapper">
          <form action="" onSubmit={formHandler} ref={franchiseFormRef}>
            {/* name */}
            <div className="franchise_input_wrapper">
              <label htmlFor="franchise_name">Enter Name:</label>
              <input
                type="text"
                id="franchise_name"
                name="franchise_name"
                placeholder="Enter Name"
                value={franchiseForm.franchise_name}
                onChange={onchnageFormHandler}
                autoComplete="off"
              />
            </div>

            {/* email */}
            <div className="franchise_input_wrapper">
              <label htmlFor="franchise_email">Enter Email:</label>
              <input
                type="text"
                id="franchise_email"
                name="franchise_email"
                placeholder="Enter Email"
                value={franchiseForm.franchise_email}
                onChange={onchnageFormHandler}
                autoComplete="off"
              />
            </div>

            {/* phone */}

            <div className="franchise_input_wrapper">
              <label htmlFor="franchise_phone">Enter Phone:</label>
              <input
                type="text"
                id="franchise_phone"
                name="franchise_phone"
                placeholder="Enter Phone"
                value={franchiseForm.franchise_phone}
                onChange={onchnageFormHandler}
                autoComplete="off"
              />
            </div>

            {/* select franchise */}
            <div className="franchise_input_wrapper">
              <label htmlFor="franchise_franchise">Select Franchise:</label>
              <select
                value={franchiseForm.franchise_select}
                onChange={onchnageFormHandler}
                name="franchise_select"
                id="franchise_select"
                autoComplete="off"
              >
                <option value="select">Select</option>
                <option value="franchise_one">Franchise One</option>
                <option value="franchise_two">Franchise Two</option>
                <option value="franchise_three">Franchise Three</option>
                <option value="franchise_four">Franchise Four</option>
              </select>
            </div>

            {/* button */}
            <div className="franchise_input_wrapper">
              <button type="submit">
                {loader === "OK" ? "Submit" : <Loader />}
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </Model>
  );
};

export default RegisterUser;
