const initialState = {
    counter: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT_COUNTER_ACTION":
      return {counter: state.counter +1};
    case "DECREMENT_COUNTER_ACTION":
      return {counter: state.counter-1};
    default:
      return state;
  }
};
