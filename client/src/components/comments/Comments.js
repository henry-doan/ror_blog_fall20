import React, { Component } from 'react';
import { Header, List } from 'semantic-ui-react';
import CommentForm from './CommentForm';
import { CommentConsumer } from '../../providers/CommentProvider';
import { Link } from 'react-router-dom';

class Comments extends Component {
  componentDidMount() {
    const { post_id } = this.props.location.state
    this.props.getComments(post_id);
  }

  listAllComments = () => {
    const { post_id } = this.props.location.state
    if (this.props.comments) {
      return (
        <List divided relaxed>
          { this.props.comments.map( c => 
            <>
              <Link to={{
                pathname: `/comments/${c.id}`,
                state: { ...c, post_id: post_id }
              }}>
                {c.subject}
              </Link>
              <br />
            </>
          )}
        </List>
      )
    } else {
      return ( <h1>No Comments</h1> )
    }
  }

  render() {
    const { post_id, post_name } = this.props.location.state
    return( 
      <>
        <Header>{post_name} Comments</Header>
        <CommentForm post_id={post_id} />
        { this.listAllComments() }
      </>
    )
  }
}

const ConnectedComments = (props) => (
  <CommentConsumer>
    {
      value => (
        <Comments
          {...props}
          {...value}
        />
      )
    }
  </CommentConsumer>
) 

export default ConnectedComments; 