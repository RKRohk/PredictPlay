import React, { useState } from "react";
import { CircularProgress } from "@material-ui/core";
import "./App.css";
import text from "./Prediction";

function App() {
  const [play, setPlay] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <div className="App">
      <div className="container">
        <br />
        <br />
        <div className="row">
          <div className="col-md-12">
            <form class="form-group" method="POST">
              <input
                type="text"
                className="form-control"
                id="text"
                name="text"
              />
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
            <br />
            {loading ? (
              <CircularProgress color="secondary" />
            ) : (
              <div class="jumbotron jumbotron-fluid">
                <div class="container">
                  <h1 class="display-4">
                    <u>The Play</u>
                  </h1>
                  <p class="lead" style={{ textAlign: "left" }}>
                    {text.split("\n").map((i) => {
                      return <p>{i}</p>;
                    })}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
