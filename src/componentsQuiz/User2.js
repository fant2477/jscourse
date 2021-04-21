import React, { Component } from "react";
import './User2_css.css'

class User2 extends Component {

  // constructor() {
  //   super();
  //   this.state = {
  //     active: "active",
  //   };
  // }
  clickState(user) {
    // if (user.active == "notactive") {
    //   this.setState({
    //     active: "active"
    //   });
    // } else {
    //   this.setState({
    //     active: "notactive"
    //   });
    // }

    console.log("Click state: ", user.active);
    this.props.onClickState(user);
  }

  // mystyle = {
  //   textdecoration: "line-through",
  // };

  render() {
    // const data = this.props.users.map((user) => (
    //   <li className={this.state.active ? 'notactive' : ''} onClick={() => this.clickState(user)}>
    //     {user}{user.active}
    //   </li>
    // ));

    console.log("this.props.users: ", this.props.users);
    console.log("this.props.active: ", this.props.users.active);
    return <li className={this.props.users.active ? 'active' : 'notactive'} onClick={() => this.clickState(this.props.users)}>
    {this.props.users.name}
  </li>
  }
}

export default User2;







// body{ margin: 0; font - family: -apple - system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans - serif; -webkit - font - smoothing: antialiased; -moz - osx - font - smoothing: grayscale } code{ font - family: source - code - pro, Menlo, Monaco, Consolas, "Courier New", monospace }.App{ text - align: center }.App - logo{ height: 40vmin; pointer - events: none } @media(prefers - reduced - motion: no - preference) {.App - logo{ -webkit - animation: App - logo - spin 20s linear infinite; animation: App - logo - spin 20s linear infinite } }.App - header{ background - color:#282c34; min - height: 100vh; display: -webkit - flex; display: flex; -webkit - flex - direction: column; flex - direction: column; -webkit - align - items: center; align - items: center; -webkit - justify - content: center; justify - content: center; font - size: calc(10px + 2vmin); color:#fff }.App - link{ color:#61dafb } @-webkit - keyframes App - logo - spin{ 0 % {- webkit - transform: rotate(0deg); transform: rotate(0deg) } to{ -webkit - transform: rotate(1turn); transform: rotate(1turn) }}@keyframes App - logo - spin{ 0 % {- webkit - transform: rotate(0deg); transform: rotate(0deg) } to{ -webkit - transform: rotate(1turn); transform: rotate(1turn) }}.is - done{ color: red; text - decoration: line - through }
// /*# sourceMappingURL=main.1f3f2e79.chunk.css.map */