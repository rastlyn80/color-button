import "./App.css";
import React from "react";

export const replaceCamelWithSpaces = (text) => {
  return text.replace(/\B([A-Z])\B/g, " $1");
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentColor: "MediumVioletRed", checked: true };
  }

  onButtonClick = () => {
    this.state.currentColor === "MediumVioletRed"
      ? this.setState({ currentColor: "MidnightBlue" })
      : this.setState({ currentColor: "MediumVioletRed" });
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
          Change to{" "}
          {this.state.currentColor === "MediumVioletRed"
            ? "Midnight Blue"
            : "Medium Violet Red"}
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
