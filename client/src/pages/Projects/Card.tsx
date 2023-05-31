import React, { FC, useRef, useEffect, useState } from "react";
import "./card.css";
import { motion } from "framer-motion";
import useIntersectionObserver from "../../hook/IntersectionObserver";

interface CardProps {
children: React.ReactNode;
gridArea: string;
margin: string;
}

const Card: FC<CardProps> = ({ children, gridArea, margin }) => {
const [elementRef, isElementInView] = useIntersectionObserver();
// const isElementInView = true;
return (
<motion.div
ref={elementRef}
initial={{ opacity: 0 }}
animate={{ opacity: isElementInView ? 1 : 0 }}
transition={{ duration: 1, delay: 0.3 }}
className="container"
style={{ margin, gridArea }}
>
{children}
</motion.div>
);
};

export default Card;