import reactImg from "./react.png";
import React from "react";
class Details extends React.Component {
  render() {
    return (
      <div className="details">
        <h1>I am a React Developer</h1>
        <img src={reactImg} alt="react logo" style={{ width: "100%" }} />
      </div>
    );
  }
}

export default Details;
