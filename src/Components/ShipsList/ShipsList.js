import React, { Component } from "react";
import PropTypes from "prop-types";
import "../ShipsList/ShipsList.css";
import faker from "faker";
import { ShipsItem } from "../ShipsItem/ShipsItem";

export class ShipsList extends Component {
  //   constructor(props) {
  //     super(props);
  //     // console.log("-----> ShipsList - constructor");
  //   }

  handleSubmit = (e) => {
    e.preventDefault();
    //   console.dir(e.currentTarget[0].value);

    fetch("https://swapi.dev/api/starships/?search=" + e.currentTarget[0].value) //не могу проверить правильность, проверь плиз
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
  };

  render() {
    const { data } = this.props;
    const shipsData = data.results;
    // console.log(shipsData);
    const renderShip = shipsData.map((item) => {
      return <ShipsItem item={item} key={faker.datatype.uuid()} />;
    });

    return (
      <div className="ships__page">
        <h1 className="ships__title">Ships of STAR WARS ⭐</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            <span>Enter search text: </span>
            <input />
          </label>
          <button type="submit">Submit</button>
        </form>
        <div className="ships__list">{renderShip}</div>
      </div>
    );
    // console.log("-----> ShipsList - render");
    // return <div>asasd</div>;
  }
}

ShipsList.propTypes = {
  data: PropTypes.shape({
    results: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        model: PropTypes.string.isRequired,
        manufacturer: PropTypes.string,
        cost_in_credits: PropTypes.string,
        length: PropTypes.string.isRequired,
        max_atmosphering_speed: PropTypes.string.isRequired,
        crew: PropTypes.string.isRequired,
        passengers: PropTypes.string.isRequired,
        cargo_capacity: PropTypes.string.isRequired,
        consumables: PropTypes.string.isRequired,
        hyperdrive_rating: PropTypes.string.isRequired,
        MGLT: PropTypes.string.isRequired,
        starship_class: PropTypes.string.isRequired,
        pilots: PropTypes.arrayOf(PropTypes.string),
        films: PropTypes.arrayOf(PropTypes.string),
        created: PropTypes.string.isRequired,
        edited: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
};

ShipsList.defaultProps = {
  data: {
    pilots: [],
    films: [],
  },
};
