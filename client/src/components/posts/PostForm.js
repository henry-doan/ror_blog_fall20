import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class PostForm extends Component {
  state = { title: '', body: '' }

  componentDidMount() {
    if (this.props.id) {
      const { title, body } = this.props 
      this.setState({ title, body })
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.id) {
      const { id, updatePost, close } = this.props 
      updatePost(id, this.state)
      close()
    } else {
      this.props.addPost(this.state)
    }
    this.setState({ title: '', body: '' })
  }

  render() {
    const { title, body } = this.state
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          name='title' 
          value={title} 
          onChange={this.handleChange}
        />
        <Form.TextArea
          name='body'
          value={body} 
          onChange={this.handleChange}
        />
        <Form.Button>Submit</Form.Button>
      </Form>
    )
  }
}

export default PostForm;