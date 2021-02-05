import React from "react";
import { Link } from "react-router-dom";

export default class IndexButton extends React.Component {
  render() {
    const quizzes = this.props.quizzes;
    const quizbutton = quizzes.map((quiz, i) => (
      <Link to={"/game/" + (i+1)}>
        <button class="btn btn-dark btn-floating" id="botones" key={(i+1).toString()} onClick={()=>this.props.indice(i)} disabled={this.props.currentQuiz === i}> {(i+1).toString()} </button>
      </Link>
    ));

    return <div>{quizbutton}</div>;
  }
}
