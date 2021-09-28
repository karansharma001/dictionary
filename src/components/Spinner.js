import React, { Component } from "react";

export class Spinner extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="d-flex justify-content-center ">
            <div className="spinner-border m-5" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
           
          </div>
        </div>
      </div>
    );
  }
}

export default Spinner;
