import React, { Component } from 'react';

import { createStore } from 'redux';

function incrementReducer(state=0, action) {
  if(action.type === "INCREMENT") {
    return state + 1;
  }
  return state;
}

const store = createStore(incrementReducer);

console.log("getState()", store.getState());

store.subscribe(() => {
  console.log("subscribe method excuted it means that state is updated...", store.getState());
});

store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });


class App extends Component {
  render() {
    return (
      <div>
        <p>Open console to see first redux basic application</p>
        <hr />
      </div>
    );
  }
}

export default App;
