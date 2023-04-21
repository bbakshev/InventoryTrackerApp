import React, { useState } from "react";
import PropTypes from "prop-types";

function SellCoffeeForm(props) {
  const [poundsSold, setPoundsSold] = useState(0);

  const handleInputChange = (event) => {
    setPoundsSold(parseInt(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (poundsSold > 0) {
      props.onSellCoffee(poundsSold);
      setPoundsSold(0);
    }
  };

  return (
    <React.Fragment>
      <h2>Sell Coffee Beans</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Pounds Sold:
          <input
            type="number"
            value={poundsSold}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Sell</button>
      </form>
    </React.Fragment>
  );
}

SellCoffeeForm.propTypes = {
  onSellCoffee: PropTypes.func.isRequired,
};

export default SellCoffeeForm;