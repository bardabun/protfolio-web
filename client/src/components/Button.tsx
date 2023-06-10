import React, {useState} from "react";
import { motion , AnimatePresence} from "framer-motion";
import Modal from "./Modal/Modal";

import "./button.css";


interface Props {
  action: any;
  text?: string;
  children: React.ReactNode;
}

const Button: React.FC<Props> = ({children, action, text}) => {
  const [isDescInHovered, setDescInHovered] = useState(false);

  

  const handleMouseEnter = () => {
    setDescInHovered(true);
  };

  const handleMouseLeave = () => {
    setDescInHovered(false);
  };

  return (
    <div>
    <motion.button className="button--general" 
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    onClick={action}>
      <span>{children}</span>
    </motion.button>

    <AnimatePresence 
    initial={false}
    mode="wait"
    onExitComplete={() => null}    
    >
      {isDescInHovered && text &&
      <Modal 
        text={text}
        handleOpen={handleMouseEnter} 
        handleClose={handleMouseLeave}/>
      }

    </AnimatePresence>
    </div>
    
  );
};
export default Button;

