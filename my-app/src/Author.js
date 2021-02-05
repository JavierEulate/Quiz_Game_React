import React from "react";
import logo from "./assets/error.jpg";

export default class Author extends React.Component {
  render() {

    const author_username =
      this.props.author.profileName !== null
        ? this.props.author.profileName
        : "Admin";

    const author_photo =
      this.props.author.photo.url !== null ? this.props.author.photo.url : logo;

    return (
      <div id="author">
        <img class="rounded-circle" src={author_photo} width="50px" height="50px" />
        <p><b>{author_username}</b></p>
      </div>
    );
  }
}
