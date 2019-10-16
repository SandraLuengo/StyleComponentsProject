import React, {Component} from "react";
import { Header, Counter, Gallery } from "./components";
import "./App.css";

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header color="#fabada" />
        <Counter/>
        <Gallery/>
      </div>
    );
  }
}

export default App;