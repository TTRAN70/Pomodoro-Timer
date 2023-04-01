import React from "react";
import "./Timer.css"
import React, { useState } from "react";
var intervalId;
var mode = "Session";

export default function Timer() {

  const [display, setDisplay] = useState("25:00");
  const [breakLength, setBreak] = useState(5);
  const [session, setSession] = useState(25);
  const [toggle, setToggle] = useState(false);
  const [timerSeconds, setTimerSecond] = useState(1500);
  const [breakSeconds, setBreakSeconds] = useState(300);

  const sesh = (event) => {
    if(!toggle) {
       if (event.target.value == "-" && session >= 2) {
          setSession(prev => prev - 1);
          setTimerSecond(prev => (session-1) * 60);
         if (mode == "Session") {
           if (session-1 < 10) {
            setDisplay(prev => "0".concat(session-1 + ":00"));
           }
           else {
            setDisplay(prev => session-1 + ":00");
           }
        }
       }
       else if (event.target.value == "+" && session <= 59) {
          setSession(prev => prev + 1);
          setTimerSecond(prev => (session+1) * 60);
        if (mode == "Session") {
          if (session+1 < 10) {
            setDisplay(prev => "0".concat(session+1 + ":00"));
           }
           else {
            setDisplay(prev => session+1 + ":00");
           }
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
          if (breakLength-1 < 10) {
            setDisplay(prev => "0".concat(breakLength-1 + ":00"));
           }
           else {
            setDisplay(prev => breakLength-1 + ":00");
           }
        }
      }
      else if (event.target.value == "+" && breakLength <= 59) {
        setBreak(prev => prev + 1);
        setBreakSeconds(prev => (breakLength+1) * 60);
       if (mode == "Break") {
        if (breakLength+1 < 10) {
          setDisplay(prev => "0".concat(breakLength+1 + ":00"));
         }
         else {
          setDisplay(prev => breakLength+1 + ":00");
         }
        }
      }
   }
 };

  const reset = () => {
    setDisplay("25:00");
    setBreak(5);
    setSession(25);
    setToggle(false);
    mode = "Session";
    setTimerSecond(1500);
    setBreakSeconds(300);
    clearInterval(intervalId);
  }

  const timing = () => {
    if (mode == "Session") {
      var timeleft = timerSeconds;
        intervalId = setInterval(() => {
          var minutes = parseInt(timeleft / 60, 10);
          var seconds = parseInt(timeleft % 60, 10);
          minutes = minutes < 10 ? "0" + minutes : minutes;
          seconds = seconds < 10 ? "0" + seconds : seconds;
          if (timeleft <= 0) {
            mode = "Break";
            clearInterval(intervalId);
            pause();
          }
          setDisplay(prev => minutes + ":" + seconds);
          timeleft -= 1;
        }, 1000);
    }
    else if (mode == "Break") {
      var timeleft = breakSeconds;
      intervalId = setInterval(() => {
        var minutes = parseInt(timeleft / 60, 10);
        var seconds = parseInt(timeleft % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        if (timeleft <= 0) {
          mode = "Session";
          clearInterval(intervalId);
          pause();
        }
        setDisplay(prev => minutes + ":" + seconds);
        timeleft -= 1;
      }, 1000);
    }
  }

  const pause = () => {
    setToggle(prev => !toggle);
    if (mode == "Session") {
      if (!toggle) {
        timing();
      }
      else {
        setTimerSecond(prev => (parseInt(display.substring(0,2), 10) * 60) + parseInt(display.substring(3, display.length), 10));
        clearInterval(intervalId);
      }
    }
    else if (mode == "Break") {
      if (!toggle) {
        timing();
      }
      else {
        setBreakSeconds(prev => (parseInt(display.substring(0,2), 10) * 60) + parseInt(display.substring(3, display.length), 10));
        clearInterval(intervalId);
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
          <button onClick={() => pause()} className="start">Start</button>
          <button onClick={() => reset()} className="reset">Reset</button>
        </div>
      </div>
    </div>
  );
}