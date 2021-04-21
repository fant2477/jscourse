import { Component } from "react";

class User extends Component {
  render() {
    return (
      <li>
        {this.props.info}-{this.props.age}
      </li>
    );
  }
}

export default User;