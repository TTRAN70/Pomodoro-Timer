import React from "react";
import "./Timer.css"
import React, { useState } from "react";
var intervalId;

export default function Timer() {

  const [display, setDisplay] = useState("25:00");
  const [breakLength, setBreak] = useState(5);
  const [session, setSession] = useState(25);
  const [toggle, setToggle] = useState(false);
  const [mode, setMode] = useState("Session");
  const [timerSeconds, setTimerSecond] = useState(1500);
  const [breakSeconds, setBreakSeconds] = useState(300);

  const sesh = (event) => {
    if(!toggle) {
       if (event.target.value == "-" && session >= 2) {
          setSession(prev => prev - 1);
          setTimerSecond(prev => (session-1) * 60);
         if (mode == "Session") {
          setDisplay(prev => session-1 + ":00");
        }
       }
       else if (event.target.value == "+" && session <= 59) {
          setSession(prev => prev + 1);
          setTimerSecond(prev => (session+1) * 60);
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
          setBreakSeconds(prev => (breakLength-1) * 60);
        if (mode == "Break") {
          setDisplay(prev => breakLength-1 + ":00");
        }
      }
      else if (event.target.value == "+" && breakLength <= 59) {
        setBreak(prev => prev + 1);
        setBreakSeconds(prev => (breakLength+1) * 60);
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
    setTimerSecond(1500);
    setBreakSeconds(300);
    clearInterval(intervalId);
  }

  const timing = () => {
    if (mode == "Session") {
        intervalId = setInterval((duration) => {
          var minutes = parseInt(duration / 60, 10);
          var seconds = parseInt(duration % 60, 10);
          minutes = minutes < 10 ? "0" + minutes : minutes;
          seconds = seconds < 10 ? "0" + seconds : seconds;
          setDisplay(prev => minutes + ":" + seconds);
        }, 1000, timerSeconds);
    }
  }

  const pause = () => {
    setToggle(prev => !toggle);
    if (!toggle) {
      timing();
    }
    else {
      clearInterval(intervalId);
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
          <button onClick={() => pause()} className="start">Start</button>
          <button onClick={() => reset()} className="reset">Reset</button>
        </div>
      </div>
    </div>
  );
}