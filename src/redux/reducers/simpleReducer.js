const initialState = {
    result: 0
};
export default (state = initialState, action) => {
  switch (action.type) {
    case "SIMPLE_ACTION":
      return {
        result: state.result +1
      };
    default:
      return state;
  }
};
