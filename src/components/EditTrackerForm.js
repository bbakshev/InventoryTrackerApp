import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditTrackerForm (props) {
  const { tracker } = props;

  function handleEditTrackerFormSubmission(event) {
    event.preventDefault();
    props.onEditTracker({
      names: event.target.names.value, 
      origin: event.target.origin.value, 
      price: event.target.price.value, 
      roast: event.target.roast.value, 
      id: tracker.id}
      );
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditTrackerFormSubmission}
        buttonText="Update Tracker" />
    </React.Fragment>
  );
}

EditTrackerForm.propTypes = {
  onEditTracker: PropTypes.func
};

export default EditTrackerForm;