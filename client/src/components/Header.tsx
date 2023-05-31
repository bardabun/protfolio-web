import React, { useState } from "react";
import "./header.css";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import profilePic from "../assets/images/profile.png";
import linkedinLogo from "../assets/images/linkedin.png";
import avatarIconPic from "../assets/images/avatarIcon.png";

interface Props {}

const Header: React.FC<Props> = () => {
  
  const [rotateValue, setRotateValue] = useState(0);
  
  let navigate = useNavigate();
  
  const location = useLocation();
  if (location.pathname === '/contact') return null;
  
  function onHoverStart() {
    setRotateValue(Math.random() * 50);
  }
  function onHoverEnd() {
    setRotateValue(0);
  }
  return (
    <header className="header">
      <motion.img
        animate={{ rotate: rotateValue }}
        transition={{ duration: 1, type: "spring", bounce: 0.5 }}
        onHoverStart={onHoverStart}
        onHoverEnd={onHoverEnd}
        src={avatarIconPic}
        alt="profile one"
        className="header--image"
        onClick={() => {
          navigate("/");
        }}
      />
      <div className={"header--buttons"}>
        <button
          className="button--work"
          onClick={() => {
            navigate("/work");
          }}
        >
          Work
        </button>
        <button
          className="button--blog"
          onClick={() => {
            navigate("/blog");
          }}
        >
          Blog
        </button>
        {/* <button
          className="button--contact"
          onClick={() => {
            navigate("/contact");
          }}
        >
        Contact
        </button> */}
        </div>
        <a
    href="https://www.linkedin.com/in/bar-dabun-computer-science/"
    className="contact-in"
    target="_blank"
  >
    <p>Be In Touch 👉</p>
    <img src={linkedinLogo} alt="linkedinLogo" className="header--inLogo" />
  </a>
</header>
  );
};
export default Header;

