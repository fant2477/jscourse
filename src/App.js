import { Component } from "react";
import Clock from "./components/Clock";
import User from "./components/User";

class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <User info="User 01" age="30" />
          <User info="User 02" />
          <User info="User 03" />
        </ul>
        <Clock title="Current data naja = " />
      </div>
    );
  }
}

export default App;