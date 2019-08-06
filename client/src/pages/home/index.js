import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchAllPosts } from "../../actions";
import { MainContainer } from "../../components/Layout";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    this.getAllPosts();
  }

  getAllPosts = async () => {
    const { data } = await this.props.fetchAllPosts();
    console.log("component_data", data);
    this.setState({
      posts: data
    });
  };

  render() {
    const { posts } = this.state;
    return (
      <MainContainer>
        <h1>Home Page</h1>
        <Link to="/posts/new">New Post</Link>
        {posts.map(post => {
          return <p key={post.id}>{post.title}</p>;
        })}
      </MainContainer>
    );
  }
}

export default connect(
  null,
  { fetchAllPosts }
)(Home);
