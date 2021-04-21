import { Component } from "react";
import Clock from "./components/Clock";
import Form from "./components/Form";
import FormCallback from "./components/FormCallback";
import User from "./components/User";
import User2 from "./components/User2";

class App extends Component {
  users = [
    { id: 1, name: "User 01", age: 10 },
    { id: 2, name: "User 02", age: 20 },
  ];

  constructor() {
    super();
    this.state = { message: "-------" };
    this.xyz = this.xyz.bind(this);
  }

  // Callback
  xyz(input) {
    this.setState({ message: "New section : " + input });
  }

  render() {
    return (
      <div>
        <ul>
          <User info="User 01" age="30" />
          <User info="User 02" />
          <User info="User 03" />
        </ul>
        
        <hr/>
        <br/>

        <User2 users={this.users} />
        
        <hr/>
        <br/>

        <Clock title="Current data naja = " />
        
        <hr/>
        <br/>
        
        <p>Form: </p>
        <Form />
        
        <hr/>
        <br/>

        <p>FormCallback: </p>
        <FormCallback onSayHi={this.xyz} />
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default App;