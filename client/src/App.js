import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const AppContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid green;
`;

class App extends React.Component {
  state = {
    posts: []
  };

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts = async () => {
    const { data } = await axios.get('/api/posts');
    this.setState({ posts: data });
  };

  renderPosts = () => {
    return this.state.posts.map(post => {
      return (
        <li key={post.id}>{post.content}</li>
      )
    })
  }
  render() {
    return (
      <AppContainer>
        <ul>
          {this.renderPosts()}
        </ul>
      </AppContainer>
    );
  }
}

export default App;
