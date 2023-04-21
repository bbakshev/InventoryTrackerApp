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
  names: PropTypes.string,
  origin: PropTypes.string,
  price: PropTypes.string,
  roast: PropTypes.string,
  id: PropTypes.string,
  whenTicketClicked: PropTypes.func
};

export default Tracker;