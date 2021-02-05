import React from "react";
import Image from "./Image";
import Author from "./Author";
import Question from "./Question";
import IndexButton from "./IndexButton";
import Timer from "./Timer";
import { Link } from "react-router-dom";
import noimg from "./assets/noimg.jpg"
import stickman from "./assets/stickman.jpg"

export default class Game extends React.Component {
  render() {
    return (
      <div>

        <IndexButton
          quizzes={this.props.quizzes}
          indice={this.props.indice}
          currentQuiz={this.props.currentQuiz}
        />

        <Question question={this.props.quiz.question}/>
        <div class="row">
          <div class="col-sm">
            {this.props.quiz.attachment === null ? <Image url={noimg}/> : <Image url={this.props.quiz.attachment.url}/>} 
          </div>
          <div class="col-sm" id="input1">
            <form class="formulario"
              onSubmit={(e) => {
                e.preventDefault();
                this.props.currentQuiz === this.props.quizzes.length - 1
                  ? this.props.submit()
                  : this.props.next();
              }}
            >
              <input
                class="form-control"
                type="text"
                id="intro"
                placeholder="Escribe tu respuesta"
                value={this.props.quiz.userAnswer || ""}
                onChange={(e) => this.props.onQuestionAnswer(e.target.value)}
              />
            </form>
          </div>
          <div class="col-sm">
            <Timer submit={this.props.submit} reset={this.props.reset}/>
          </div>
        </div>
        <div>
          <Link
            to={
              "/game/" +
              (this.props.currentQuiz === 0 ? +1 : this.props.currentQuiz)
            }
          >
            {this.props.currentQuiz === 0 ? <button class="btn btn-light btn-rounded" id="dis3" data-mdb-ripple-color="dark" onClick={(e) => this.props.previous()} disabled>Anterior</button> : <button class="btn btn-primary btn-rounded shadow" data-mdb-ripple-color="dark btn-rounded" onClick={(e) => this.props.previous()} >Anterior</button>}</Link>
          <Link
            to={
              "/game/" +
              (this.props.currentQuiz === 9 ? +10 : this.props.currentQuiz + 2)
            }
          >
            {this.props.currentQuiz === 9 ? <button class="btn btn-light btn-rounded" id="dis2" data-mdb-ripple-color="dark" onClick={(e) => this.props.next()} disabled>Siguiente</button> : <button class="btn btn-primary btn-rounded shadow" data-mdb-ripple-color="dark btn-rounded" onClick={(e) => this.props.next()} >Siguiente</button>}
          </Link>
          {this.props.currentQuiz !== 9 ? <button class="btn btn-light btn-rounded" id="dis1" disabled>Submit</button> : <button class="btn btn-danger btn-rounded shadow" onClick={(e) => this.props.submit()}>Submit</button>}
        </div>

        <footer class="footer">
          Quiz creado por: 
          {this.props.quiz.author === null ? <div id="author"><img class="rounded-circle" src={stickman} width="50px" height="50px" /><p><b>Anónimo</b></p></div> : <Author author={this.props.quiz.author}/>}
        </footer>

      </div>
    );
  }
}
