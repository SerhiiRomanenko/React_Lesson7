import React, { Component } from "react";
import "../ShipsList/ShipsList.css";
import faker from "faker";

import { ShipsItem } from "../ShipsItem/ShipsItem";

export class ShipsList extends Component {
  //   constructor(props) {
  //     super(props);
  //     // console.log("-----> ShipsList - constructor");
  //   }

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
        <div className="ships__list">{renderShip}</div>
      </div>
    );
    // console.log("-----> ShipsList - render");
    // return <div>asasd</div>;
  }
}
