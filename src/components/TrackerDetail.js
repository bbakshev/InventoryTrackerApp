import React from "react";
import PropTypes from "prop-types";
import TrackerList from "./TrackerList";

function TrackerDetail(props){
  const { tracker, onClickingDelete, onClickingEdit, onClickingSell, poundsLeftInSack, trackerList, onTrackerSelection } = props;

  return (
    <React.Fragment>
      <h1>Tracker Details</h1>
      <div>
        <TrackerList
          trackerList={trackerList}
          onTrackerSelection={onTrackerSelection}
        />
        <p>{poundsLeftInSack} pounds of coffee beans left in the burlap sack</p>
      </div>
      <button onClick={onClickingEdit}>Update Tracker</button>
      <button onClick={() => onClickingDelete(tracker.id)}>Delete Tracker</button>
      <button onClick={onClickingSell}>Sell Tracker</button>
      <hr/>
    </React.Fragment>
  );
}

TrackerDetail.propTypes = {
  tracker: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingSell: PropTypes.func,
  poundsLeftInSack: PropTypes.number,
  trackerList: PropTypes.array,
  onTrackerSelection: PropTypes.func
};

export default TrackerDetail;