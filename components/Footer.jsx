import React from "react";
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiOutlineFacebook,
} from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer-container">
      <p> 2023 AfricaBazin Store All Rights Reserverd</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineFacebook />
        <AiOutlineTwitter />
      </p>
    </div>
  );
};

export default Footer;
