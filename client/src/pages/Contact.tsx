import React, { useEffect } from "react";
import './neobrutalism.css';

export default function Contact() {
useEffect(() => {
  //add class to body element
  document.body.classList.add('bg-yello');
  //set style on body element
  document.body.style.backgroundColor = '#FDE14F';
  return () => {
    //optionally remove styles when component unmounts
    document.body.style.backgroundColor = null;
    document.body.classList.remove('bg-yello');
  };
}, []);

return (
<div className="container-neo">
  <div className="bardab-box-neo">
    <p className="bardab-box-neo__text">BARDAB</p>
  </div>
  <div className="container-neo">
    <nav className="container-neo__nav">
      <a href="#">Title 1</a>
      <a href="#">Title 2</a>
      <a href="#">Title 3</a>
      <a href="#">Title 4</a>
    </nav>
  </div>
</div>
)
}
