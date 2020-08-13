import React, { useState } from "react";
import { CircularProgress } from "@material-ui/core";
import "./App.css";
import axios from 'axios';

function App() {
  const [inputText, setInputText] = useState("");
  const [play, setPlay] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit (event){
    event.preventDefault();
    console.log(inputText);
    setLoading(true);
    setSuccess(false);
    try{
      const res = await axios.post(`http://0.0.0.0:5000/predict`, { "text": inputText });
      console.log(res.data);
      console.log(inputText);
      setPlay(res.data.prediction);
      setLoading(false);
      setSuccess(true);
    }
    catch(e){
      setLoading(false);
      console.log(e)
    }
  }

  const handleChange = event => {
    setInputText(event.target.value);
  }

  let id = 0; // acts as a key for <p></p> mapping

  return (
    <div className="App">
      <div className="container">
        <br />
        <br />
        <div className="row">
          <div className="col-md-12">
            <form className="form-group" method="POST" onSubmit={handleSubmit}>
              <input
                type="text"
                className="form-control"
                id="text"
                name="text"
                onChange={handleChange}
              />
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
            <br />
            {loading ? (
              <CircularProgress color="secondary" />
            ) : (
              <div className="jumbotron jumbotron-fluid">
                <div className="container">
                  <h1 className="display-4">
                    <u>The Play</u>
                  </h1>
                  {success ? <div className="lead" style={{ textAlign: "left" }}>
                    {play.split("\n").map((i) => {
                      return <p key={id++}>{i}</p>;
                    })}
                  </div> : <div></div> }
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
