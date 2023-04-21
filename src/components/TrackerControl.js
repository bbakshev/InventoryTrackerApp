import React from "react";
import TrackerList from "./TrackerList";
import NewTrackerForm from "./NewTrackerForm.js";
import TrackerDetail from "./TrackerDetail";
import EditTrackerForm from "./EditTrackerForm.js";

class TrackerControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterTrackerList: [],
      selectedTracker: null,
      editing: false,
      poundsLeftInSack: 130,
    };
  }

  handleClick = () => {
    if (this.state.selectedTracker != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedTracker: null,
        editing: false,
      });
    } else {
      this.setState((prevState) => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  };

  handleAddingNewTrackerToList = (newTracker) => {
    const newMasterTrackerList =
      this.state.masterTrackerList.concat(newTracker);
    this.setState({
      masterTrackerList: newMasterTrackerList,
      formVisibleOnPage: false,
    });
  };

  handleChangingSelectedTracker = (id) => {
    const selectedTracker = this.state.masterTrackerList.filter(
      (tracker) => tracker.id === id
    )[0];
    this.setState({ selectedTracker: selectedTracker });
  };

  handleEditTrackerClick = () => {
    this.setState({ editing: true });
  };

  handleEditingTrackerInList = (trackerToEdit) => {
    const editedMasterTrackerList = this.state.masterTrackerList
      .filter((tracker) => tracker.id !== this.state.selectedTracker.id)
      .concat(trackerToEdit);
    this.setState({
      masterTrackerList: editedMasterTrackerList,
      editing: false,
      selectedTracker: null,
    });
  };

  handleSellingCoffee = () => {
    if (this.state.poundsLeftInSack > 0) {
      this.setState((prevState) => ({
        poundsLeftInSack: prevState.poundsLeftInSack - 1,
      }));
    }
  };

  handleDeletingTracker = (id) => {
    const newMasterTrackerList = this.state.masterTrackerList.filter(
      (tracker) => tracker.id !== id
    );
    this.setState({
      masterTrackerList: newMasterTrackerList,
      selectedTracker: null,
    });
  };

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing) {
      currentlyVisibleState = (
        <EditTrackerForm
          tracker={this.state.selectedTracker}
          onEditTracker={this.handleEditingTrackerInList}
        />
      );
      buttonText = "Return to Coffee Tracker List";
    } else if (this.state.selectedTracker != null) {
      currentlyVisibleState = (
        <TrackerDetail
          tracker={selectedTracker}
          onClickingDelete={this.handleDeletingTracker}
          onClickingEdit={this.handleEditClick}
          onTrackerSelection={this.handleChangingSelectedTracker}
          poundsLeftInSack={poundsLeftInSack}
          onSellCoffee={handleSellingCoffee}
          trackerList={this.props.masterTrackerList}
        />
      );
      buttonText = "Return to Coffee Tracker List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = (
        <NewTrackerForm
          onNewTrackerCreation={this.handleAddingNewTrackerToList}
        />
      );
      buttonText = "Return to Coffee Tracker List";
    } else {
      currentlyVisibleState = (
        <TrackerList
          trackerList={this.state.masterTrackerList}
          onTrackerSelection={this.handleChangingSelectedTracker}
          poundsLeftInSack={this.state.poundsLeftInSack}
        />
      );
      buttonText = "Add Coffee";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default TrackerControl;
