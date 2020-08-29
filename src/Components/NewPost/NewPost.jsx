import React, { Component, Fragment } from "react";
import "./NewPost.styles.css";

class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    let posts = {
      title: this.state.title,
      body: this.state.body,
    };

    window
      .fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(posts),
      })
      .then((data) => {
        data
          .json()
          .then((response) => {
            console.log(response);
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <Fragment>
        <section className="newpost-block">
          <form onSubmit={this.handleSubmit}>
            <div>
              <input
                type="text"
                placeholder="TITLE"
                name="title"
                value={this.state.title}
                onChange={this.handleChange}
                required
              />
            </div>
            <div>
              <textarea
                name="body"
                value={this.state.body}
                onChange={this.handleChange}
                id="body"
                cols="30"
                rows="10"
                required
                placeholder="DESCRIPTION"
              ></textarea>
            </div>
            <div>
              <button>PUBLISH</button>
            </div>
          </form>
        </section>
      </Fragment>
    );
  }
}

export default NewPost;
