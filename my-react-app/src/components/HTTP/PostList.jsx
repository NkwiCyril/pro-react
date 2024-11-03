import React, { Component } from "react";
import axios from "axios";

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        this.setState({
          posts: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { posts } = this.state;
    const renderPosts = posts.map((post) => (
      <div key={post.id}>{post.title}</div>
    ));
    return (
      <div>
        List of posts
        {renderPosts}
      </div>
    );
  }
}

export default PostList;
