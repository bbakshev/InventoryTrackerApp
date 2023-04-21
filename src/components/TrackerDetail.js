import React from "react";
import PropTypes from "prop-types";
import TrackerList from "./TrackerList";

function TrackerDetail(props){
  const { tracker, onClickingDelete, onClickingEdit, onSellCoffee, poundsLeftInSack, trackerList, onTrackerSelection } = props;

  return (
    <React.Fragment>
      <h1>Tracker Details</h1>
        <TrackerList
          trackerList={trackerList}
          onTrackerSelection={onTrackerSelection}
        />
        <p>pounds of coffee beans left in the burlap sack</p>
      <button onClick={onClickingEdit}>Update Coffee</button>
      <button onClick={() => onClickingDelete(tracker.id)}>Delete Coffee Tracker</button>
      <button onClick={props.onSellCoffee}>Sell Coffee</button>
      <hr/>
    </React.Fragment>
  );
}

TrackerDetail.propTypes = {
  tracker: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onSellCoffee: PropTypes.func,
  trackerList: PropTypes.array,
  onTrackerSelection: PropTypes.func
};

export default TrackerDetail;