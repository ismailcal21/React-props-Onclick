import React from "react";
import "../styles/style.css";

const Button = (props) => {
  return (
    <div className="container my-3">
      {props.type === "primary" && (
        <button className={props.type} onClick={props.basilinca}>
          {props.text}
        </button>
      )}
      {props.type === "secondary" && (
        <button className={props.type} onClick={props.basilinca}>
          {props.text}
        </button>
      )}
      {props.type === "third" && (
        <button className={props.type} onClick={props.basilinca}>
          {props.text}
        </button>
      )}
    </div>
  );
};

export default Button;
