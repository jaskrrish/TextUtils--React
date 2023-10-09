import React, { useState } from "react";
import { syllable } from "syllable";
//
export default function TextForm(props) {
  //
  function countSyllables(word) {
    return syllable(word);
  }
  //
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success");
  };
  //
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success");
  };
  //
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared", "success");
  };
  //
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard", "success");
  };
  //
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed Extra Spaces", "success");
  };
  //
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  //
  function lengthOfWord(text){
    let count=0;
    for(let i=0;i<text.split(" ").length;i++){
      if(text.split(" ")[i]===""){
        count++;
      }
    }
    return text.split(" ").length - count
  }
  //
  const [text, setText] = useState("");
  /*text="Enter your text here";--> wrong way */
  //
  /*setText("Enter your text here");//correct way to change your text*/
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            style={{
              backgroundColor:
                props.mode === "dark" ? "rgb(56,58,61)" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert To UpperCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert To LowerCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button
          className= "btn btn-primary mx-1"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
        <button
          className="btn btn-primary mx-1"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
      </div>
      <div className="container my-2">
        <h2>Your Text Summary</h2>
        <p>Number of Words:{lengthOfWord(text)}</p>
        <p>Number of Character:{text.length}</p>
        <p>Number of Syllable:{countSyllables(text)}</p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter Something to Preview Here"}</p>
      </div>
    </>
  );
}
