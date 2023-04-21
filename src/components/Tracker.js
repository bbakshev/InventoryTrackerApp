import React from "react";
import PropTypes from "prop-types";

function Tracker(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenTrackerClicked(props.id)}>
      <h3>Name: {props.names}</h3>
      <p><em>Origin: {props.origin}</em></p>
      <p><em>Price: {props.price}</em></p>
      <p><em>Roast Level: {props.roast}</em></p>
      <hr/>
      </div>
    </React.Fragment>
  );
}

Tracker.propTypes = {
  whenTrackerClicked: PropTypes.func,
  names: PropTypes.string,
  origin: PropTypes.string,
  price: PropTypes.string,
  roast: PropTypes.string,
  burlap: PropTypes.number,
  id: PropTypes.string,
  whenTrackerClicked: PropTypes.func
};

export default Tracker;