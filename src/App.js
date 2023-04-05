import React from "react";
import "./style.css";
import Timer from './Timer'
import ReactFCCtest from 'react-fcctest';

export default function App() {
  return (
    <div className="mainwrapper">
      <ReactFCCtest />
      <Timer />
    </div>
  );
}
