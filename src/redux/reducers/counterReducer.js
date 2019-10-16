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


//Se hace un reducer por cada una de las acciones?? y se pone en cada uno de los reducer un initial State??