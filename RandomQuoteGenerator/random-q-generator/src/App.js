import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      advice: "",
      isLoading: false,
      error: null,
    };
  }
  componentDidMount() {
    this.fetchTask();
  }

  async fetchTask() {
    this.setState({
      isLoading: true,
    });
    this.setState({
      error: null,
    });
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      if (!response.ok) {
        throw new Error("Something went wrong...!,Please contact Support");
      }
      const data = await response.json();

      const { advice } = data.slip;

      this.setState({
        advice,
      });
    } catch (err) {
      this.setState({ error: err.message });
      console.log(this.state.error);
    }
    this.setState({
      isLoading: false,
    });
  }

  render() {
    const { advice } = this.state;
    let adviceOutput = <div className="quotes">{advice}</div>;

    if (this.state?.error) {
      adviceOutput = <div className="quotes">{this.state.error}</div>;
    }

    if (this.state?.isLoading) {
      adviceOutput = <div className="quotes">Loading...</div>;
    }

    return (
      <div className="app">
        <div className="card">
          {adviceOutput}
          <button className="btn" onClick={this.fetchTask.bind(this)}>
            Give me a Advice
          </button>
        </div>
      </div>
    );
  }
}

export default App;
