import React from "react";
import PropTypes from "prop-types";
import TrackerList from "./TrackerList";
import SellCoffeeForm from "./SellCoffeeForm";

function TrackerDetail(props){
  const { tracker, onClickingDelete, onClickingEdit, trackerList, onTrackerSelection } = props;

  const [isSellingCoffee, setIsSellingCoffee] = useState(false);

  const handleSellCoffeeClick = () => {
    setIsSellingCoffee(true);
  };
  
  return (
    <React.Fragment>
      <h1>Tracker Details</h1>
      <TrackerList
        trackerList={trackerList}
        onTrackerSelection={onTrackerSelection}
      />
      <p>{poundsLeftInSack} pounds of coffee beans left in the burlap sack</p>
      <button onClick={onClickingEdit}>Update Coffee</button>
      <button onClick={() => onClickingDelete(tracker.id)}>Delete Coffee Tracker</button>
      <button onClick={handleSellCoffeeClick}>Sell Coffee</button>
      {isSellingCoffee && <SellCoffeeForm onSellCoffee={onSellCoffee} />}
      <hr/>
    </React.Fragment>
  );
}

TrackerDetail.propTypes = {
  tracker: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  trackerList: PropTypes.array,
  onTrackerSelection: PropTypes.func
};

export default TrackerDetail;