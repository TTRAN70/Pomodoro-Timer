import React from "react";
import "./Timer.css"

export default function Timer() {
  return (
    <div className="timerWrap">
      <div className="title">
        Pomodoro Timer
      </div>
      <div className="display">
      </div>
      <div className="controls">
        <div className="break">
          <button value="-" className="changeTime">-</button>
          <button value="+" className="changeTime">+</button>
        </div>
        <div className="session">
          <button value="-" className="changeTime">-</button>
          <button value="+" className="changeTime">+</button>
        </div>
        <div className="operate">
          <button className="start">Start</button>
          <button className="reset">Reset</button>
        </div>
      </div>
    </div>
  );
}