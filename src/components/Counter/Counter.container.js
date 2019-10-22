import { connect } from "react-redux";
import Counter from "./Counter.styled";
import { incrementCounterAction } from "../../redux/actions/incrementCounterAction";
import { decrementCounterAction } from "../../redux/actions/decrementCounterAction";

const mapStateToProps = state => ({
  counter: state.counterReducer.counter
});

const mapDispatchToProps = dispatch => ({
    incrementCounterAction: () => dispatch(incrementCounterAction()),
    decrementCounterAction: () => dispatch(decrementCounterAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
