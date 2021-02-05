import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      intervalId: 0,
      timer: 100,
    };
  }

  componentDidMount() {
    const intervalId = setInterval(this.setTimer.bind(this), 1000);
    this.setState({ intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  setTimer() {
    this.setState({
      counter: this.state.counter + 1,
      timer: this.state.timer - 1,
    });

    if (this.state.timer <= 0) {
      this.props.submit();
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.counter > this.state.counter;
  }

  resetTimer() {
    this.state.timer = 100;
    this.props.reset();
  }

  render() {
    const timer = this.state.timer;
    return <div class="tiempo">{timer}<Link to="/game/1">
    <button class="btn btn-warning btn-rounded shadow" data-mdb-ripple-color="dark" onClick={(e) => this.resetTimer()}>Reset</button>
</Link></div>;
  }
}
