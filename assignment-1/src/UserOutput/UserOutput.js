import React from "react";
import "./UserOutput.css";
const userOutput = props => {
  return (
    <div className="Output">
      <p>This is a component.</p>
      <p>{props.userName}</p>
    </div>
  );
};

export default userOutput;
