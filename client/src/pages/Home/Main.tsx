import React, { useState } from "react";
import avatarPic from "../../assets/images/avatar.png";
import { motion } from "framer-motion";

import "./main.css";

interface Props {}

export default function Main(props: Props): JSX.Element {
  const [cursorX, setCursorX] = useState<number | undefined>();
  const [cursorY, setCursorY] = useState<number | undefined>();

  window.addEventListener("mousemove", (e) => {
    setCursorX(e.pageX);
    setCursorY(e.pageY);
  });

  return (
    <main>
      <motion.h1
        initial={{ opacity: 0, translateX: -50 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 2, delay: 0.8 }}
        className="main--title"
      >
        <span>Hi, my</span>
        <span>
          name is <b>Bar</b>
        </span>
      </motion.h1>
      <motion.img
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        src={avatarPic}
        className="main-img"
      />
      <motion.h4
        initial={{ opacity: 0, translateY: 50 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 2, delay: 1 }}
        className="main--subtitle"
      >
        I'm a <span>Full-Stack developer</span> who is{" "}
        <span>eager to help</span> you!
      </motion.h4>
      <div
        className="cursor"
        style={{
          left: cursorX + "px",
          top: cursorY + "px",
        }}
      ></div>
    </main>
  );
}
