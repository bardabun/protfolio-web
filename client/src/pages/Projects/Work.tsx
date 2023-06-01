import React, { FC } from "react";
import Button from "../../components/Button";
import Footer from '../../components/Footer';
import { motion } from "framer-motion";

import './work.css'

const CODEPAIRUP_URL = "https://codepairup.up.railway.app/";

interface Props {}

const Work: FC<Props> = () => {


const handleGoTo = (url: string): void => {
  window.location.href = url;
};

return (
  <div className="container--work">
    <div className="content--work">
      <motion.div className="button-container--work"
      animate={{ x: -100 }}
      transition={{ type: "spring", stiffness: 100 }}>
        <Button action={() => handleGoTo("/work/carporate")}>
          Carporate
        </Button>
        <Button action={() => handleGoTo(CODEPAIRUP_URL)}>
          Code Pair Up
        </Button>
      </motion.div>
    </div>
    <div className="footer--work">
      <Footer />
    </div>
  </div>
);

};

export default Work;