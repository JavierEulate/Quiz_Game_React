import React from "react";

export default class Question extends React.Component {
  render() {

  return <div class="font-weight-bold" id="pregunta" >{this.props.question}</div>;
  }
}
