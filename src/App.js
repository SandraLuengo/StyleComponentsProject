import React, {Component} from "react";
import { connect } from "react-redux";
import { simpleAction } from "./redux/actions/simpleAction";
import Header from "./components/Header/Header.styled";
import "./App.css";

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = (dispatch) => ({
  simpleAction: () => dispatch(simpleAction())
});

class App extends Component {

  simpleAction = () => {
    this.props.simpleAction();
  };

  render() {

    return (
      <div className="App">
        Style Components Project
        <Header color="red" />
        <button onClick={() => this.simpleAction()}>Test redux action</button>
        <pre>{JSON.stringify(this.props)}</pre>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
