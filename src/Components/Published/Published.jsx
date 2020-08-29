import React, { Component, Fragment } from "react";
import "./Published.styles.css";
class Published extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    window
      .fetch("https://jsonplaceholder.typicode.com/posts")
      .then((data) => {
        data
          .json()
          .then((response) => {
            this.setState({ posts: response });
            console.log(response);
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  }

  render() {
    let allposts = this.state.posts.map((post) => (
      <Fragment>
        <div className="all-posts-block" key={post._id}>
          <div className="post-title">{post.title}</div>
          <div className="post-body">{post.body}</div>
        </div>
      </Fragment>
    ));
    return (
      <Fragment>
        <section className="published">{allposts}</section>
      </Fragment>
    );
  }
}

export default Published;
