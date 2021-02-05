import "./App.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import Game from "./Game";
import { HashRouter as Router, Link, Redirect, Route } from "react-router-dom";
import Inicio from "./Inicio";
import Timer from "./Timer";

import {
  initQuizzes,
  questionAnswer,
  changeQuiz,
  submit,
  reset,
} from "./redux/actions";

class App extends React.Component {
  constructor(props) {
    super();
  }

  async componentDidMount() {
    this.fetching();
  }

  fetching = () => {
    fetch(
      "https://core.dit.upm.es/api/quizzes/random10wa?token=81d52404c0b23d72ef51"
    )
      .then((data) => data.json())
      .then((quizzes) => this.props.dispatch(initQuizzes(quizzes)))
      .catch((error) => console.log(error));
  };

  reset = () => {
    fetch(
      "https://core.dit.upm.es/api/quizzes/random10wa?token=81d52404c0b23d72ef51"
    )
      .then((data) => data.json())
      .then((quizzes) => this.props.dispatch(initQuizzes(quizzes)))
      .catch((error) => console.log(error));
  };

  render() {
    if (this.props.quizzes.length !== 0) {
      if (!this.props.finished) {
        return (
          <div>
            <Router>
              <Route path="/">
                <Redirect to="/inicio" />
              </Route>
              <Route path="/inicio" component={Inicio} />
              <Route
                path="/game/:id"
                render={() => (
                  <Game
                    quiz={this.props.quizzes[this.props.currentQuiz]}
                    finished={this.props.finished}
                    score={this.props.score}
                    quizzes={this.props.quizzes}
                    currentQuiz={this.props.currentQuiz}
                    reset={this.reset}
                    onQuestionAnswer={(answer) => {
                      this.props.dispatch(
                        questionAnswer(this.props.currentQuiz, answer)
                      );
                    }}
                    previous={() => {
                        this.props.dispatch(
                          changeQuiz(this.props.currentQuiz - 1)
                        );
                    }}
                    next={() => {
                        this.props.dispatch(
                          changeQuiz(this.props.currentQuiz + 1)
                        );
                    }}
                    submit={() => {
                      this.props.dispatch(submit(this.props.quizzes));
                    }}
                    indice={(index) => {
                      this.props.dispatch(changeQuiz(index));
                    }}
                  />
                )}
              />
            </Router>

          </div>
        );
      } else {
        return (
          <div class="container1">
            <h3>
              {this.props.finished ? (
                <p id="Puntuacion">
                  TU PUNTUACIÓN ES DE: {this.props.score}/10
                </p>
              ) : null}
            </h3>
            <Router>
              <Link to="/game/1">
                <button class="btn btn-warning btn-rounded shadow" onClick={(e) => this.reset()}>Jugar otra vez!</button>
              </Link>
            </Router>
          </div>
        );
      }
    } else {
      return <h3>No Hay preguntas disponibles, recarga la página</h3>;
    }
  }
}

function mapStateToProps(state) {
  return {
    ...state,
  };
}

export default connect(mapStateToProps)(App);
