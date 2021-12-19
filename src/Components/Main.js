import React, { Component } from "react";
import { ShipsList } from "./ShipsList/ShipsList";
import { ShipsSearch } from "./ShipsList/ShipsSearch";
import Loader from "react-loader-spinner";

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "initial", // initial, loading, success, error
      error: null,
      data: null,
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://swapi.dev/api/starships/?search=" + e.currentTarget[0].value)
      .then((res) => {
        this.setState({
          status: "loading",
          error: null,
          data: null,
        });
        return res.json();
      })
      .then((dataJSON) => {
        this.setState({
          status: "success",
          error: null,
          data: dataJSON,
        });
      })
      .catch((err) => {
        this.setState({
          status: "error",
          error: err.message,
          data: null,
        });
      });
    e.currentTarget[0].value = "";
  };
  render() {
    const { status, error, data } = this.state;
    return (
      <div style={{ textAlign: "center" }}>
        <ShipsSearch handleSubmit={this.handleSubmit} />
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
      </div>
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
      })
      .catch((err) => {
        this.setState({
          status: "error",
          error: err.message,
          data: null,
        });
      });
  }
}
