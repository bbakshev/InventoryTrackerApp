import React from "react";

class TrackerDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 130,
    };
  }

  handleSellClick = () => {
    if (this.state.quantity === 0) {
      return;
    }
    this.setState((prevState) => ({
      quantity: prevState.quantity - 1,
    }));
  };

  render() {
    const { tracker, onClickingDelete, onClickingEdit } = this.props;
    return (
      <React.Fragment>
        <h1>Tracker Details</h1>
        <p>
          <strong>Name of Coffee:</strong> {tracker.names}
        </p>
        <p>
          <strong>Origin:</strong> {tracker.origin}
        </p>
        <p>
          <strong>Price:</strong> ${tracker.price}
        </p>
        <p>
          <strong>Roast Level:</strong> {tracker.roast}
        </p>
        <p>
          <strong>Quantity:</strong> {this.state.quantity} lbs
        </p>
        <button onClick={this.handleSellClick}>Sell</button>
        <button onClick={() => onClickingEdit(tracker.id)}>Edit</button>
        <button onClick={() => onClickingDelete(tracker.id)}>Delete</button>
        <hr />
      </React.Fragment>
    );
  }
}

export default TrackerDetail;