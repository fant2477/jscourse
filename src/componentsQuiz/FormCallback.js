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

  addList() {
    console.log("Click add: ",this.state.name);
    this.props.onAddList(this.state.name);
  }

  render() {
    return (
      <div>
        <input type="text" onKeyUp={this.doKey1} />
        <button onClick={() => this.addList()}>Add</button>
      </div>
    );
  }
}

export default FormCallback;