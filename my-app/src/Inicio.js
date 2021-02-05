import React from "react";
import { Link } from "react-router-dom";

export default class Inicio extends React.Component {
  render() {
    return (
      <div class="container1">
        <h1 class="bienvenido">BIENVENIDO AL MEJOR QUIZ</h1>
        <Link
            to="/game/1" 
          ><a class="btn btn-primary btn-rounded shadow" href={"/#/game/" + 1}>EMPEZAR</a>
        </Link>
      </div>
    );
  }
}
