import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Counter from './components/Counter';
import './App.css';

const initialState = {
  count: 44
};

function reducer(state = initialState, action) {
  console.log(action)
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.payload
      };
      case "DECREMENT":
        return {
          count: state.count - action.payload
        };
    default:
      return state;
  }

}

const store = createStore(reducer);
// store.dispatch({ type: "INCREMENT", amount: 5 });
// store.dispatch({ type: "DECREMENT", amount: 5 });

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Counterpalooza</h1>
          </header>

          Here are some counters:
          <Counter />

        </div>
      </Provider>
    );
  }
}

export default App;
