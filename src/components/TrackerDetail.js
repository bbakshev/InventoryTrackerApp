import React from "react";
import PropTypes from "prop-types";

function TrackerDetail(props){
  const { tracker, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>Tracker Details</h1>
      <h3>{tracker.names} - {tracker.origin}</h3>
      <p><em>{tracker.price}</em></p>
      <p><em>{tracker.roast}</em></p>
      <button onClick={ props.onClickingEdit }>Update Tracker</button>
      <button onClick={() => props.onClickingDelete(tracker.id) }>Delete Tracker</button>
      <hr/>
    </React.Fragment>
  );
}

TrackerDetail.propTypes = {
  tracker: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default TrackerDetail;