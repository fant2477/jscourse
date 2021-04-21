import { Component } from "react";

class User2 extends Component {
  render() {
    const data = this.props.users.map((user) => (
      <li key={user.id}>
        {user.name}, {user.age}
      </li>
    ));
    return <ul>{data}</ul>;
  }
}

export default User2;