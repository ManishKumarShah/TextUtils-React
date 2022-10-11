import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked")
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase ","success");

  };
  const handleLoClick = () => {
    // console.log("Uppercase was clicked")
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase ","success");
  };
  const handleClearClick = () => {
    // console.log("Uppercase was clicked")
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared ","success");

  };

  const handleOnChange = (event) => {
    // console.log("on change")
    setText(event.target.value);
  };
  const handleCopy = () => {
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied to clipboard","success");

  };
  const handleExtraSpaces = () => {
    var newText = text.split(/[  ]+/);
    setText(newText.join("  "));
    props.showAlert("Extra Spaces are removed","success");

  };
  const [text, setText] = useState("");
  // setText("Hey Manish"); //to setanew text in text area

  return (
    <>
      <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "9ea1ab", color:props.mode==='light'?'black':'black'
            }}
            id="mybox"
            rows="8"
            placeholder="Enter your text"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button
          className="btn btn-primary mx-2 my-2"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button
          className="btn btn-primary mx-2 my-2"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <h3>
          {text.split(" ").length} words and {text.length} characters
        </h3>
        <h4>
          {0.008 * text.split(" ").length - 0.008} Miniutes taken to read the
          whole text
        </h4>
        <h2>
          <u> Preview</u>
        </h2>
        <p>{text.length>0?text:"Enter something in above textbox to preview it here"}</p>
      </div>
    </>
  );
}
