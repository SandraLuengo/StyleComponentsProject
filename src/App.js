import React, {Component} from "react";
import { connect } from "react-redux";
import { Header, Counter } from "./components";
import "./App.css";

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header color="red" />
        <Counter/>
      </div>
    );
  }
}

export default App;