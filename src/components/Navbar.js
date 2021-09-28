import React, { Component } from "react";
import "./main.css";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      darkModetext: "Dark Mode",
      mode: "Light",
    };
  }

  // Dark mode handler.
  handelDarkMode = () => {
    this.setState({ mode: "Dark" });

    if (this.state.mode === "Light") {
      this.setState({ darkModetext: "Light Mode" });
      document.body.style.backgroundColor = "#232323";
      document.body.style.color = "white";
    } else {
      this.setState({ darkModetext: "Dark Mode" });
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      this.setState({ mode: "Light" });
    }
  };

  render() {
    return (
      <div>
        <nav className="navbar  navbar-expand-lg navbar-dark bg-dark p-3">
          <div className="container-fluid">
            <Link className="navbar-brand badge bg-secondary" id="logo" to="/">
              Dictionary
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
              </ul>
              <div className="d-flex">
                <button
                  className="btn btn-primary"
                  onClick={this.handelDarkMode}
                >
                  {this.state.darkModetext}
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
