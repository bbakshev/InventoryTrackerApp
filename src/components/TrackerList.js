import React from "react";
import Tracker from "./Tracker";
import PropTypes from "prop-types";

function TrackerList(props) {

  return (
    <React.Fragment>
      <hr />
      {props.trackerList.map((tracker) => (
        <Tracker
          whenTrackerClicked={props.onTrackerSelection}
          names={tracker.names}
          origin={tracker.origin}
          price={tracker.price}
          roast={tracker.roast}
          id={tracker.id}
          key={tracker.id}
        />
      ))}
    </React.Fragment>
  );
}

TrackerList.propTypes = {
  trackerList: PropTypes.array,
  onTrackerSelection: PropTypes.func,
};

export default TrackerList;