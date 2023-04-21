
import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types"; 
import ReusableForm from "./ReusableForm";

function NewTrackerForm(props){
  function handleNewTrackerFormSubmission(event) {
    event.preventDefault();
    props.onNewTrackerCreation({
      names: event.target.names.value, 
      origin: event.target.origin.value, 
      price: event.target.price.value, 
      roast: event.target.roast.value, 
      id: v4()
    });
  }
  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewTrackerFormSubmission}
        buttonText="Add Tracker" />
    </React.Fragment>
  );
}

NewTrackerForm.propTypes = {
  onNewTrackerCreation: PropTypes.func
};

export default NewTrackerForm;