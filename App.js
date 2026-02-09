import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "Guest",
      tempName: "",
      count: 0,
      theme: "light",
      lastUpdated: "",
    };
  }

  componentDidMount() {
    console.log("componentDidMount: component has been mounted to DOM");
    console.log("This is where you would typically:");
    console.log("- fetch data from APIs, set up subscriptions, start timers");

    const savedCount = localStorage.getItem("counterValue");
    if (savedCount !== null) {
      console.log("Loading saved count:", savedCount);
      this.setState({
        count: parseInt(savedCount, 10),
        lastUpdated: new Date().toLocaleTimeString(),
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate: component has updated");
    console.log("previous state:", prevState);
    console.log("current state:", this.state);

    // ✅ Only when count changes
    if (prevState.count !== this.state.count) {
      console.log("Saving count to localStorage");
      localStorage.setItem("counterValue", this.state.count.toString());

      const now = new Date().toLocaleTimeString();

      // ✅ Avoid infinite loop: only update if different
      if (prevState.lastUpdated !== now) {
        this.setState({ lastUpdated: now });
      }
    }
  }

  componentWillUnmount() {
    console.log("componentWillUnmount: component is about to be removed");
  }

  incrementCount = () => {
    this.setState((prev) => ({ count: prev.count + 1 }));
  };

  decrementCount = () => {
    this.setState((prev) => ({ count: prev.count > 0 ? prev.count - 1 : 0 }));
  };

  resetCount = () => {
    this.setState({ count: 0 });
  };

  toggleTheme = () => {
    this.setState((prev) => ({
      theme: prev.theme === "light" ? "dark" : "light",
    }));
  };

  handleNameChange = (e) => {
    this.setState({ tempName: e.target.value });
  };

  updateUserName = () => {
    if (this.state.tempName.trim() !== "") {
      this.setState({ userName: this.state.tempName, tempName: "" });
    }
  };

  render() {
    const { userName, count, theme, lastUpdated, tempName } = this.state;

    const containerClass = `counter-container ${
      theme === "light" ? "light-theme" : "dark-theme"
    }`;

    return (
      <div className="App">
        <div className={containerClass}>
          <h1>Hello, {userName}!</h1>
          <h2>Counter: {count}</h2>

          {lastUpdated && (
            <p className="timestamp">Last Updated: {lastUpdated}</p>
          )}

          <div className="button-group">
            <button onClick={this.incrementCount}>+</button>
            <button onClick={this.decrementCount}>-</button>
            <button onClick={this.resetCount}>Reset</button>
          </div>

          <div className="name-changer">
            <input
              type="text"
              value={tempName}
              onChange={this.handleNameChange}
              placeholder="Enter name"
            />
            <button onClick={this.updateUserName}>Update Name</button>
          </div>

          <div className="theme-section">
            <p>Current theme: {theme}</p>
            <button onClick={this.toggleTheme}>
              Switch to {theme === "light" ? "dark" : "light"}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
