import React from 'react';
import { connect } from "react-redux";

class Counter extends React.Component {
  // state = { count: 0 }

  increment = () => {
    this.props.dispatch({ type: "INCREMENT", payload: 5 })
  }

  decrement = () => {
    this.props.dispatch({ type: "DECREMENT", payload: 3 })
  }

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span>{this.props.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  count: state.count
});

export default connect(mapStateToProps)(Counter);