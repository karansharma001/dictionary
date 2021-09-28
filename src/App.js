import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Def from "./components/Def";
import "./components/main.css";
import Spinner from "./components/Spinner";
import { Route, Switch } from "react-router-dom";
import About from "./components/About";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      word: "",
      data: [],
      loading: false,
      default:
        "Enter the word in the above input box and click on find. You will get all the results available related to the entered word. The definitions may not be right, this is just a practice project. The main motive of this react app is to test skills.",
    };
  }

  // Input word change handler.
  handelWordChange = (e) => {
    this.setState({ word: e.target.value });
  };

  // Function for fetching and rendering the data.
  showData = async () => {
    this.setState({ loading: true, data: [], default: "" });
    let url = `https://api.urbandictionary.com/v0/define?term=${this.state.word}`;
    let rawData = await fetch(url);
    let parsedData = await rawData.json();

    // Checking the condition, if the user enters a strange word and the response for that word is an empty string, show the "Result not available text".
    if (parsedData.list.length === 0) {
      this.setState({
        data: {
          list: [{ definition: "Results are not available for this word." }],
        },
        loading: false,
      });
    } else {
      this.setState({ data: parsedData, loading: false });
    }
  };

  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <div
              id="srch-sec"
              className=" text-center p-5 d-flex align-items-center justify-content-center  m-3  flex-column"
            >
              <h1>Enter the word below...</h1>

              <div className="my-2 d-flex align-items-center">
                <input
                  type="text"
                  value={this.state.value}
                  onChange={this.handelWordChange}
                  className="col-form-label mx-2"
                />

                <button
                  onClick={this.showData}
                  className="btn btn-success px-4 py-2 mob"
                >
                  Find
                </button>
              </div>
            </div>

            {/* Loading spinner effect */}
            {this.state.loading && <Spinner />}

            <div className="container content text-center">
              <p>{this.state.default} </p>
              {this.state.data.list?.map((e) => {
                return <Def defs={e.definition} />;
              })}
            </div>
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </>
    );
  }
}

export default App;
