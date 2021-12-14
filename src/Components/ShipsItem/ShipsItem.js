import React, { Component } from "react";
import "../ShipsItem/ShipsItem.css";
import faker from "faker";
import Moment from "react-moment";

export class ShipsItem extends Component {
  //   constructor(props) {
  //     super(props);
  //     // console.log(props);
  //   }

  render() {
    const { item } = this.props;
    return (
      <div className="ship__item">
        <h2 className="ship__name">{item.name}</h2>

        <p className="ship__model">
          <b>Model: </b>
          {item.model}
        </p>

        <p className="ship__manufacturer">
          <b>Manufacturer: </b>
          {item.manufacturer}
        </p>

        <p className="ship__cost_in_credits">
          <b>Cost in credits: </b>
          {item.cost_in_credits}
        </p>

        <p className="ship__length">
          <b>Length: </b>
          {item.length} meters
        </p>

        <p className="ship__speed">
          <b>Max speed: </b>
          {item.MGLT} km / h
        </p>

        <p className="ship__capacity">
          <b>Cargo capacity: </b>
          {item.cargo_capacity}
        </p>

        <p className="ship__films">
          <b>Films: </b>
          {item.films.map((i) => {
            return (
              <a
                key={faker.datatype.uuid()}
                style={{ display: "block" }}
                href={i}
              >
                {i}
              </a>
            );
          })}
        </p>

        {item.pilots.length !== 0 ? (
          <div>
            <b>Pilots: </b>
            {item.pilots.map((i) => {
              return (
                <a
                  key={faker.datatype.uuid()}
                  href={i}
                  style={{ display: "block" }}
                >
                  {i}
                </a>
              );
            })}
          </div>
        ) : (
          <p>
            <b> There is no pilots :(</b>
          </p>
        )}

        <p className="ship__consumables">
          <b>Ship consumables: </b>
          {item.consumables}
        </p>

        <p className="ship__created">
          <b>Date of create: </b>
          <Moment format="DD.MM.YYYY">{item.created}</Moment>
        </p>

        <p className="ship__crew">
          <b>Crew: </b>
          {item.crew} peoples
        </p>

        <p className="ship__hyperdrive_rating">
          <b>Hyperdrive rating: </b>
          {item.hyperdrive_rating}
        </p>

        <p className="ship__max_atmosphering_speed">
          <b>Max atmosphering speed: </b>
          {item.max_atmosphering_speed} km / hour
        </p>

        <p className="ship__passengers">
          <b>Maximum number of passengers: </b>
          {item.passengers}
        </p>

        <p className="ship__starship_class">
          <b>Starship class: </b>
          {item.starship_class}
        </p>

        <p className="ship__url">
          <b>Link: </b>
          <a href={item.url}>{item.url}</a>
        </p>

        <p className="ship__edited">
          <b>Edited: </b>
          <Moment format="DD.MM.YYYY">{item.edited}</Moment>
        </p>
      </div>
    );
  }
}
