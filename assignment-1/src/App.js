import React, { Component } from "react";
import UserOutput from "./UserOutput/UserOutput";
import UserInput from "./UserInput/UserInput";
import "./App.css";
import { maxHeaderSize } from "http";

class App extends Component {
  state = {
    userName: ["nik048", "Ai-bin"]
  };

  userNameChangeHandler = (event, i) => {
    const userName = this.state.userName.slice();
    userName[i] = event.target.value;
    this.setState({
      userName: userName
    });
  };

  render() {
    const cardStyle = {
      backgroundColor: "#fbfbfb",
      border: "1px solid #d1d1d1",
      padding: "8px",
      width: "350px",
      margin: "10px auto"
    };

    return (
      <div className="App">
        <div style={cardStyle}>
          <UserInput
            index="0"
            value={this.state.userName[0]}
            changed={this.userNameChangeHandler}
          />
          <UserOutput userName={this.state.userName[0]} />
        </div>

        <div style={cardStyle}>
          <UserInput
            index="1"
            value={this.state.userName[1]}
            changed={this.userNameChangeHandler}
          />
          <UserOutput userName={this.state.userName[1]} />
        </div>
      </div>
    );
  }
}

export default App;
