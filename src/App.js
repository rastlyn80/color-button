import "./App.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentColor: "blue", checked: true };
  }

  onButtonClick = () => {
    this.state.currentColor === "blue"
      ? this.setState({ currentColor: "red" })
      : this.setState({ currentColor: "blue" });
  };

  onCheckboxClick = () => {
    this.state.checked === true
      ? this.setState({ checked: false })
      : this.setState({ checked: true });
  };

  render() {
    return (
      <div>
        <button
          style={{ backgroundColor: this.state.currentColor }}
          onClick={this.onButtonClick}
          disabled={!this.state.checked}
        >
          Change to {this.state.currentColor === "blue" ? "red" : "blue"}
        </button>
        <input
          type="checkbox"
          defaultChecked={this.state.checked}
          onClick={this.onCheckboxClick}
        />
      </div>
    );
  }
}

export default App;
