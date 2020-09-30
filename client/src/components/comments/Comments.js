import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import axios from 'axios';
import CommentForm from './CommentForm';

class Comments extends Component {
  state = { comments: [] }

  componentDidMount() {
    const { post_id } = this.props.location.state
    axios.get(`/api/posts/${post_id}/comments`)
      .then( res => {
        this.setState({ comments: res.data })
      })
      .catch(err => console.log(err))
  }

  addComment = (comment) => {
    const { post_id } = this.props.location.state
    axios.post(`/api/posts/${post_id}/comments`, {comment}) 
      .then( res => {
        const { comments } = this.state
        this.setState({ comments: [...comments, res.data] })
      })
      .catch(err => console.log(err))
  }

  render() {
    const { post_id, post_name } = this.props.location.state
    return( 
      <>
        <Header>{post_name} Comments</Header>
        <CommentForm addComment={this.addComment} />
      </>
    )
  }
}

export default Comments; 