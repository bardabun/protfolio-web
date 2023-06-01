import React from "react";
import "./button.css";


interface Props {
  action: any;
  children: React.ReactNode;
}

const Button: React.FC<Props> = ({children, action}) => {
    

  return (
    <button className="button--general" onClick={action}>
      <span>{children}</span>
    </button>
  );
};
export default Button;

