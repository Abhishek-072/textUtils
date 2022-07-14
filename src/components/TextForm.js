import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text.split("\n").join(" "));
  };
  const handleClear = () => {
    setText("");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
      <div>
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor: props.mode==='dark'?'#082a4b':'white', color: props.mode==='dark'?'white':'black'}}
            id="myBox"
            rows="8"
            placeholder="Enter your text here"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick} disabled={text.length===0}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick} disabled={text.length===0}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy} disabled={text.length===0}>
          Copy to Clipboard
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClear} disabled={text.length===0}>
          Clear
        </button>
      </div>
      <div>
        <h3>Your Text has: </h3>
        <p>
          {text.trim().split(/\s+/).filter((element)=>{return element.length!==0}).length}{" "}
          words and {text.length} characters.
        </p>
        <h2>Preview</h2>
        <p>{text.length===0? "Enter your text above to preview here." : text}</p>
      </div>
      </div>
    </>
  );
}
