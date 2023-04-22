import React from "react";
import PropTypes from "prop-types";

export default function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input type="text" name="names" placeholder="Name of Coffee" />
        <input type="text" name="origin" placeholder="Origin" />
        <input type="text" name="price" placeholder="Price" />
        <input type="text" name="roast" placeholder="Roast Level" />
        <input
          type="number"
          name="quantity"
          value="130"
          placeholder="Quantity"
          disabled
        />
        <button type="submit">{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
};
