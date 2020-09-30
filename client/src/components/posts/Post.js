import React, { Component } from 'react';
import { Header, Modal, Button } from 'semantic-ui-react';
import PostForm from './PostForm';
import { Link } from 'react-router-dom';

class Post extends Component {
  state = { editing: false }

  open = () => this.setState({ editing: true })
  close = () => this.setState({ editing: false })

  render() {
    const { id, title, body, updatePost, deletePost } = this.props
    const { editing } = this.state
    return(
      <>
        <Header>{title}</Header>
        <p>{body}</p>
        <Modal
          onClose={() => this.close()}
          onOpen={() => this.open()}
          open={editing}
          trigger={<Button color='yellow' onClick={() => this.open()}>Edit</Button>}
        >
          <Modal.Header>Edit Post</Modal.Header>
          <Modal.Content>
            <PostForm 
              id={id}
              title={title}
              body={body}
              updatePost={updatePost}
              close={this.close}
            />
          </Modal.Content>
        </Modal>
        <Button color='red' onClick={() => deletePost(id)}>Delete</Button>
        <Link to={{
          pathname: `/posts/${id}/comments`,
          state: { post_id: id, post_name: title }
        }}>
          <Button color='green'>Comments</Button>
        </Link>
      </>
    )
  }
}

export default Post;