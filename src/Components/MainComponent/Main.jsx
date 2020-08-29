import React, { Component, Fragment } from "react";
import "./Main.styles.css";
import NewPost from "../NewPost/NewPost";
import Published from "../Published/Published";
class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      isHidden: true,
    };
  }
  onChange = (e) => {
    this.setState({ search: e.target.value });
  };
  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden,
    });
  }

  render() {
    return (
      <Fragment>
        <section className="main-block">
          <div className="top-block">
            <div className="search-wrapper">
              <form>
                <img
                  src="/images/search.png"
                  alt="search-icon"
                  className="search-icon"
                />
                <input
                  type="text"
                  name="focus"
                  className="search-box"
                  placeholder="SEARCH"
                  onChange={this.onChange}
                />
                <button className="close-icon" type="reset" />
              </form>
            </div>
          </div>

          <div className="seperator"></div>

          <div className="content-block">
            <div className="new-post">
              <button onClick={this.toggleHidden.bind(this)}> NEW POST</button>
              <div className="add-post">
                {!this.state.isHidden && <NewPost />}
              </div>
            </div>
            <div className="all-posts">
              <button onClick={this.toggleHidden.bind(this)}>PUBLISHED</button>
              {!this.state.isHidden && <Published />}
            </div>
          </div>

          <div className="seperator"></div>
        </section>
      </Fragment>
    );
  }
}

export default MainComponent;
