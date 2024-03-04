import React, { useState } from "react";

export default function TextForm(props) {
  //for upper case
  const handleToUpperCase = () => {
    console.log("upper case is clicked" + text);
    setText(text.toUpperCase());
    props.showAlert("Converted To UpperCase", "success");
  };

  //for lower case
  const handleToLowerCase = () => {
    console.log("lower case is clicked" + text);
    setText(text.toLowerCase());
    props.showAlert("Converted To LowerCase", "success");
  };

  //to remove text
  const handleToRemove = () => {
    setText("");
    props.showAlert("Clear Text", "danger");
  };

  //to capitalizecase
  const handleToCapi = () => {
    let cap = text
      .split(" ")
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(" ");
    setText(cap);
    props.showAlert("Converted To Capitalize", "success");
  };

  //to remove extra spaces
  const handleToRemoveES = () => {
    let newSp = text.split(/[ ]+/);
    setText(newSp.join(" "));
    props.showAlert("Remove Extra Spaces", "success");
  };

  //for word count
  let previousWordCount = 0;
  const space = (text) => {
    if (text === "") {
      return previousWordCount;
    } else {
      let nextWord = text.split(" ").length;
      previousWordCount = nextWord;
      return nextWord;
    }
  };

  //variable to find email
  //if you use include method it return only boolean value not number of time counting
  //so, match method is use to find number of time coming matching value.
  const email = (text) => {
    const matches = text.match(/@gmail\.com/g);
    return matches ? matches.length : 0;
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
    console.log("onchange");
  };
  const [text, setText] = useState("");
  //   text = "kjvrbebvr";//wrong way to set state.

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <div className="mb-3">
          <label htmlFor="myText" className="form-label">
            <h4>{props.heading}</h4>
          </label>
          <textarea
            className="form-control"
            id="myBox"
            value={text}
            placeholder="Enter text here"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "gray",
              color: props.mode === "light" ? "black" : "white",
            }}
            onChange={handleOnChange}
            rows="8"
          ></textarea>
          <button className="btn btn-primary my-2" onClick={handleToUpperCase}>
            Convert to Uppercase
          </button>
          <button
            className="btn btn-success my-2 mx-2"
            onClick={handleToLowerCase}
          >
            Convert to Lowercase
          </button>
          <button
            className="btn btn-secondary my-2 mx-2"
            onClick={handleToCapi}
          >
            Convert to CapitalizeCase
          </button>
          <button
            className="btn btn-danger my-2 mx-2"
            onClick={handleToRemoveES}
          >
            Remove Extra Spaces
          </button>
          <button className="btn btn-danger my-2 mx-2" onClick={handleToRemove}>
            Remove
          </button>
        </div>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1>Text Summery</h1>

        {/* to find word and char count*/}
        <p>
          {space(text)} Word and {text.length} Character
        </p>

        {/* in how many time to complete reading */}
        <p>{0.008 * text.split(" ").length} Min to read</p>

        {/* is text contain email or not */}
        <p>Number of Email : {email(text)}</p>
        <h3>Preview</h3>
        <p>{text === "" ? "Enter Someting To Preview It" : text}</p>
        {/* or
          <p>{text.length>0?'Enter someting to Preview It':text}</p> */}
      </div>
    </>
  );
}
