import React from "react";
import "./UserInput.css";
const userInput = props => {
  return (
    <div>
      <input
        className="Input"
        type="text"
        value={props.value}
        onChange={e => props.changed(e, props.index)}
      />
    </div>
  );
};

export default userInput;
