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

  handleSellingTracker = (id) => {
    let selectedTracker = this.state.masterTrackerList.find(tracker => tracker.id === id);
    if (selectedTracker.quantity > 0) {
      selectedTracker.quantity -= 1;
    }
    const newMasterTrackerList = this.state.masterTrackerList.filter(tracker => tracker.id !== id).concat(selectedTracker);
    this.setState({
      masterTrackerList: newMasterTrackerList,
      selectedTracker: selectedTracker
    });
  }
}
