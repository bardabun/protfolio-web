import React from "react";
import { motion } from "framer-motion";

import './modal.css'

const dropIn = {
  hidden: {
    x: "-70vh",
    opacity: 0,
  },
  visible: {
    x: "0",
    opacity: 1,
    transition: {
      duration: 0.3,
      type: "spring",
      damping: 25,
      stiffness: 500,
      
    }
  },
  exit: {
    x: "70vh",
    opacity: 0,
  },

}

interface Props {
  handleOpen: any;
  handleClose: any;
  text?: React.ReactNode;
}

const Modal: React.FC<Props> = ({ handleOpen, handleClose, text}) => {
  return(
    <motion.div
    className="modal orange-gradiant"
    onClick={e => e.stopPropagation()}
    onMouseEnter={handleOpen}
    onMouseLeave={handleClose}
    variants={dropIn}
    initial= "hidden"
    animate= "visible"
    exit="exit"
    >
      <p>{text}</p>
    </motion.div>
  )
}

export default Modal;