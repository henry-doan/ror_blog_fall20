import React, { Component } from 'react';
import axios from 'axios';

export const CommentContext = React.createContext();

export const CommentConsumer = CommentContext.Consumer;

class CommentProvider extends Component {
  state = { comments: [] }

  getComments = (post_id) => {
    axios.get(`/api/posts/${post_id}/comments`)
      .then( res => {
        this.setState({ comments: res.data })
      })
      .catch(err => console.log(err))
  }

  addComment = (post_id, comment) => {
    axios.post(`/api/posts/${post_id}/comments`, {comment}) 
      .then( res => {
        const { comments } = this.state
        this.setState({ comments: [...comments, res.data] })
      })
      .catch(err => console.log(err))
  }

  updateComment = (post_id, id, comment) => {
    axios.put(`/api/posts/${post_id}/comments/${id}`, { comment })
      .then( res => {
        const comments = this.state.comments.map( c => {
          if (c.id === id) {
            return res.data
          }
          return c
        })
        this.setState({ comments })
      })
      .catch(err => console.log(err))
  }

  deleteComment = (post_id, id) => {
    axios.delete(`/api/posts/${post_id}/comments/${id}`)
      .then( res => {
        const { comments } = this.state
        this.setState({ comments: comments.filter(c => c.id !== id)})
        alert(res.data.message)
      })
      .catch(err => console.log(err))
  }

  render() {
    return(
      <CommentContext.Provider value={{
        ...this.state,
        getComments: this.getComments,
        addComment: this.addComment,
        updateComment: this.updateComment,
        deleteComment: this.deleteComment,
      }}>
        { this.props.children }
      </CommentContext.Provider>
    )
  }
}

export default CommentProvider;