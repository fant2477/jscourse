import { Component } from "react";

class FormCallback extends Component {
  constructor() {
    super();
    this.state = { name: "" };
    this.doKey1 = this.doKey.bind(this);
  }

  doKey(event) {
    this.setState({ name: event.target.value });
  }

  sayHi() {
    console.log("Click say hi");
    this.props.onSayHi(this.state.name);
  }

  render() {
    return (
      <div>
        <input type="text" onKeyUp={this.doKey1} />
        <button onClick={() => this.sayHi()}>Say Hi</button>
      </div>
    );
  }
}

export default FormCallback;