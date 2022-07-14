//import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import "./main.scss";

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () =>{
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#082a4b';
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>
      <Navbar  title="TextUtils" aboutUs="About Us" mode={mode} toggleMode={toggleMode} />
      <div className="container" mode={mode}>
        <TextForm heading="Text Converter" mode={mode}/>
      </div>
      
    </>
  );
}

export default App;
