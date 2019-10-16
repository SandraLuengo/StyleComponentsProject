import React, {Component} from "react";
import { connect } from "react-redux";
import { counterAction } from "./redux/actions/counterAction";
import Header from "./components/Header/Header.styled";
import "./App.css";

const mapStateToProps = state => ({
  counter: state.counterReducer.counter
});

const mapDispatchToProps = (dispatch) => ({
  counterAction: () => dispatch(counterAction())
});

class App extends Component {

  render() {
    console.log(this.props)
    return (
      <div className="App">
        Style Components Project
        <Header color="red" />
        <button onClick={() => this.props.counterAction()}>Test redux action</button>
        <pre>{JSON.stringify(this.props)}</pre>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
