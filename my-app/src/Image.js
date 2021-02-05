import React from "react";
import logo from "./assets/error.jpg";

export default class Image extends React.Component {
  render() {

    const img = this.props.url !== null ? this.props.url : logo;
    return <img class="rounded" id="imagenquiz" src={img} width="300px" height="250px" />;
  }
}
