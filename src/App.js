import React, {Component} from "react";
import { Header, Counter, Gallery } from "./components";
import "./App.css";

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header color="#4492ae" />
        
        <Counter/>
        <Gallery/>
      </div>
    );
  }
}

export default App;