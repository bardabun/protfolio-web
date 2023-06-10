import React, {useState} from "react";
import { motion } from "framer-motion";

import 'backdrop.css'

interface Props {
  onClick: any;
  children: React.ReactNode;
}

const Backdrop: React.FC<Props> = ({children, onClick}) => {
  return(
    <motion.div
    className="backdrop"
    onClick={onClick}
    >
      {children}
    </motion.div>
  )
}

export default Backdrop;