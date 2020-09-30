import React, { Component } from 'react';
import { Header, Container } from 'semantic-ui-react';
import axios from 'axios';
import PostForm from './PostForm';
import PostList from './PostList';

class Posts extends Component {
  state = { posts: [] }

  componentDidMount() {
    axios.get('/api/posts')
      .then( res => {
        this.setState({ posts: res.data })
      })
      .catch( err => console.log(err) )
  }

  addPost = (post) => {
    axios.post('/api/posts', { post })
      .then( res => {
        const { posts } = this.state 
        this.setState({ posts: [...posts, res.data]})
      })
      .catch( err => console.log(err) )
  }

  updatePost = (id, post) => {
    axios.put(`/api/posts/${id}`, { post })
      .then( res => {
        const posts = this.state.posts.map( p => {
          if (p.id === id) {
            return res.data
          }
          return p
        })
        this.setState({ posts })
      })
      .catch( err => console.log(err) )
  }

  deletePost = (id) => {
    axios.delete(`/api/posts/${id}`)
      .then( res => {
        const { posts } = this.state 
        this.setState({ posts: posts.filter( p => p.id !== id )})
        alert(res.data.message)
      })
      .catch( err => console.log(err) )
  }

  render() {
    const { posts } = this.state
    return(
      <Container>
        <PostForm addPost={this.addPost} />
        <Header>All Post</Header>
        <PostList 
          posts={posts}
          updatePost={this.updatePost}
          deletePost={this.deletePost}
        />
      </Container>
    )
  }
}

export default Posts;