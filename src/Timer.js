import React from "react";
import "./Timer.css"
import React, { useState } from "react";

export default function Timer() {

  const [display, setDisplay] = useState("25:00");
  const [breakLength, setBreak] = useState(5);
  const [session, setSession] = useState(25);
  const [toggle, setToggle] = useState(false);
  const [mode, setMode] = useState("Session");

  const sesh = (event) => {
    if(!toggle) {
       if (event.target.value == "-" && session >= 2) {
         setSession(prev => prev - 1);
         if (mode == "Session") {
         setDisplay(prev => session-1 + ":00");
        }
       }
       else if (event.target.value == "+" && session <= 59) {
        setSession(prev => prev + 1);
        if (mode == "Session") {
          setDisplay(prev => session+1 + ":00");
         }
       }
  }
};

  const breaking = (event) => {
    if(!toggle) {
      if (event.target.value == "-" && breakLength >= 2) {
        setBreak(prev => prev - 1);
        if (mode == "Break") {
        setDisplay(prev => breakLength-1 + ":00");
        }
      }
      else if (event.target.value == "+" && breakLength <= 59) {
       setBreak(prev => prev + 1);
       if (mode == "Break") {
        setDisplay(prev => breakLength+1 + ":00");
        }
      }
   }
 };

  const reset = () => {
    setDisplay("25:00");
    setBreak(5);
    setSession(25);
    setToggle(false);
    setMode("Session");
  }

  const timing = () => {
    if (mode == "Session") {
      setToggle(prev => !toggle);
      if (toggle) {
        
      }
    }
  }

  return (
    <div className="timerWrap">
      <div className="title">
        Pomodoro Timer
      </div>
      <div className="display">
        {display}
      </div>
      <div className="controls">
        <div className="break">
          <button onClick={e => breaking(e)} value="-" className="changeTime">-</button>
          {breakLength}
          <button onClick={e => breaking(e)} value="+" className="changeTime">+</button>
        </div>
        <div className="session">
          <button onClick={e => sesh(e)} value="-" className="changeTime">-</button>
          {session}
          <button onClick={e => sesh(e)} value="+" className="changeTime">+</button>
        </div>
        <div className="operate">
          <button onClick={() => timing()} className="start">Start</button>
          <button onClick={() => reset()} className="reset">Reset</button>
        </div>
      </div>
    </div>
  );
}