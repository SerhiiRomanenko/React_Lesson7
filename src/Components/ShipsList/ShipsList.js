import React, { Component } from "react";
import PropTypes from "prop-types";
import "../ShipsList/ShipsList.css";
import faker from "faker";
import { ShipsItem } from "../ShipsItem/ShipsItem";

export class ShipsList extends Component {
  render() {
    const { data } = this.props;
    const shipsData = data.results;
    const renderShip = shipsData.map((item) => {
      return <ShipsItem item={item} key={faker.datatype.uuid()} />;
    });

    return (
      <div className="ships__page">
        <h1 className="ships__title">Ships of STAR WARS ⭐</h1>

        <div className="ships__list">{renderShip}</div>
      </div>
    );
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
