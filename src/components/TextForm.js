import React, { useState } from "react";
export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked" + text);
    let newtext = text.toUpperCase();
    setText(newtext);
  };
  const handleUpClick1 = () => {
    console.log("button 2 was clicked");
    let newcontent = text.toLowerCase();
    setText(newcontent);
  };

  const handle=()=>{
    let newtext=' ';
    setText(newtext)
  }
  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };
  
  const [text, setText] = useState("ENTER TEXT HERE..");
  return (
    <>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="mybox"
          rows="8"
        ></textarea>
      </div>
      <button className=" btn btn-primary" onClick={handleUpClick}>
        CONVERT TO UPPERCASE
      </button>
      <button className="btn btn-secondary mx-2" onClick={handleUpClick1}>
        convert to lowercase
      </button>
      <button className="btn btn-success mx-2" onClick={handle}>
        clear
      </button>

      <div className="div count">YOUR TEXT SUMMARY</div>
      <p>{text.split(" ").length} <b>words</b> {text.length} <b>characters</b></p>
      <p>Time taken to read words is {0.008*text.split(" ").length}</p>
       <h2>Preview</h2>
       <p>{text}</p>
       
    </>
  );
}
