import React, { Component } from "react";
import PropTypes from "prop-types";

export class ShipsSearch extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            <span>Enter search text: </span>
            <input />
          </label>
          <button type="submit">Submit / Clear</button>
        </form>
      </div>
    );
  }
}

ShipsSearch.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

ShipsSearch.defaultProps = {};
