import React from "react";
import { FooterSection } from "./footerStyle";
import { MdLocationPin, MdEmail } from "react-icons/md";
import {
  BsTelephoneFill,
  BsFacebook,
  BsInstagram,
  BsWhatsapp,
} from "react-icons/bs";

const Footer = () => {
  return (
    <FooterSection>
      {/* addess */}
      <div className="address_wrapper">
        <h4>Address</h4>
        <div className="address_details">
          <MdLocationPin />
          <p>COMPIX - VFX & ANIMATION Parraypora Srinagar 191113 Kashmir</p>
        </div>
      </div>
      {/* contact us Wrapper */}
      <div className="contact_wrapper">
        <h4>Contact Us</h4>
        <div className="contact_details">
          <BsTelephoneFill />
          <p>9622656564</p>
        </div>
        <div className="contact_details">
          <MdEmail />
          <p>sawarnabi2018@gmail.com</p>
        </div>
      </div>
      {/* links Wrapper */}
      <div className="links_wrapper">
        <h4>Links </h4>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </div>

      {/* follow us Wrapper */}
      <div className="follow_us_wrapper">
        <h4>Follow Us</h4>
        <div className="social_icons">
          <BsFacebook />
          <BsInstagram />
          <BsWhatsapp />
        </div>
        <div className="copyright">
        Copyright &copy; 2020-{new Date().getFullYear()} Compix VFX
        </div>
      </div>
    </FooterSection>
  );
};

export default Footer;
