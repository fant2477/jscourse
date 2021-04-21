import { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  // React's component life cycle
  componentDidMount() {
    this.xx = setInterval(() => {
      this.setState({ date: new Date() });
    }, 500);
  }

  componentWillUnmount() {
    clearInterval(this.xx);
  }

  render() {
    return (
      <p>
        {this.props.title}
        {this.state.date.toLocaleTimeString()}
      </p>
    );
  }
}

export default Clock;