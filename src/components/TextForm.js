import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const [bgColor, setBgColor] = useState("white");

  const handleUpClick = () => {
    // console.log("uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleClearClick = () => {
    setText("");
  };

  let clicked = true;
  const handleChangeColor = () => {
    if (clicked === true) {
      document.getElementById("myBox").style.backgroundColor = "red";
      clicked = false;
    } else if (clicked === false) {
      document.getElementById("myBox").style.backgroundColor =
        props.mode === "dark" ? "#2e2c2c" : "white";
      clicked = true;
    }
  };

  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#2e2c2c" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="myBox"
            rows="6"
          ></textarea>
        </div>

        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to Uppercase
        </button>

        <button className="btn btn-primary mx-2" onClick={handleLowClick}>
          Convert to Lowercase
        </button>

        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          Clear Text
        </button>

        <button
          className="btn btn-primary mx-2 my-2"
          onClick={handleChangeColor}
        >
          Change Color
        </button>
      </div>

      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>Read in {text.split(" ").length * 0.008} minutes</p>

        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox above to preview here"}
        </p>
      </div>
    </>
  );
}
