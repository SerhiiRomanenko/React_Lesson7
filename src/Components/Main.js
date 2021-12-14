import React, { Component } from "react";
import { ShipsList } from "./ShipsList/ShipsList";
import Loader from "react-loader-spinner";

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "initial", // initial, loading, success, error
      error: null,
      data: null,
    };
    // console.log("-----------------> Main - constructor");
  }

  render() {
    const { status, error, data } = this.state;
    return (
      <>
        {status === "initial" || status === "loading" ? (
          <div style={{ color: "blue", textAlign: "center" }}>
            <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
          </div>
        ) : status === "success" ? (
          <>
            <ShipsList data={data} />
          </>
        ) : (
          <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>
        )}
      </>
    );
  }

  componentDidMount() {
    fetch("https://swapi.dev/api/starships/")
      .then((res) => {
        this.setState({
          status: "loading",
          error: null,
          data: null,
        });
        return res.json();
      })
      .then((dataJSON) => {
        setTimeout(() => {
          this.setState({
            status: "success",
            error: null,
            data: dataJSON,
          });
        }, 2000);
        // console.log(dataJSON);
      })
      .catch((err) => {
        this.setState({
          status: "error",
          error: err.message,
          data: null,
        });
      });
    // console.log("-----------------> Main - componentDidMount");
  }
}
