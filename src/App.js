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
      ? this.setState({
          checked: false,
          previousColor: this.state.currentColor,
          currentColor: "gray",
        })
      : this.setState({
          checked: true,
          currentColor: this.state.previousColor,
        });
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
          id="disable-button-checkbox"
          type="checkbox"
          defaultChecked={this.state.checked}
          onClick={this.onCheckboxClick}
        />
        <label htmlFor="disable-button-checkbox">Disable button</label>
      </div>
    );
  }
}

export default App;
