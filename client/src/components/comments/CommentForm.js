import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class CommentForm extends Component {
  state = { author: '', subject: '', body: '' }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addComment(this.state)
    this.setState({ author: '', subject: '', body: '' })
  }

  render() {
    const { author, subject, body } = this.state
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          name='author' 
          value={author}
          onChange={this.handleChange}
          required
        />
        <Form.Input
          name='subject' 
          value={subject}
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

export default CommentForm;