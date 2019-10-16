import { connect } from "react-redux";
import Counter from "./Counter.styled";
import { counterAction } from "../../redux/actions/counterAction";

const mapStateToProps = state => ({
  counter: state.counterReducer.counter
});

const mapDispatchToProps = dispatch => ({
  counterAction: () => dispatch(counterAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
