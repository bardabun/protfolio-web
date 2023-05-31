import React from "react";
import "./footer.css";
import wavesBackground from "../../assets/images/layered-waves2.svg";

export default function Header(): JSX.Element {
  return (
    <>
      <img src={wavesBackground} className="waves-img" />
    </>
  );
}
