import { Component } from "react";
import FormCallback from "./componentsQuiz/FormCallback";
import User2 from "./componentsQuiz/User2";

class Quiz extends Component {
    list = [
        { id: 1, name: "User 01", age: 10 },
        { id: 2, name: "User 02", age: 20 },
      ];

  constructor() {
    super();
    this.state = { 
        message: ["User 01",] ,
        currentTask: "0",
        allTask: "0"
    };
    this.xyz = this.xyz.bind(this);
  }

  // Callback
  xyz(input) {
    this.setState({ 
        message: [...this.state.message, input]
        ,currentTask: this.state.message.length
        ,allTask: this.state.message.length });
  }

  render() {
    return (
      <div>

        <p>FormCallback: </p>
        <FormCallback onSayHi={this.xyz} />
        <p>{this.state.currentTask} remaining out of {this.state.allTask} tasks</p>
        <br/>

        <p>{this.state.message}</p>
        <hr/>
        <br/>

        <User2 list={this.list} />
        
      </div>
    );
  }
}

export default Quiz;