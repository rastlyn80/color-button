import "./App.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentColor: "blue" };
  }

  onButtonClick = () => {
    this.state.currentColor === "blue"
      ? this.setState({ currentColor: "red" })
      : this.setState({ currentColor: "blue" });
  };

  render() {
    return (
      <div>
        <button
          style={{ backgroundColor: this.state.currentColor }}
          onClick={this.onButtonClick}
        >
          Change to {this.state.currentColor === "blue" ? "red" : "blue"}
        </button>
      </div>
    );
  }
}

export default App;
