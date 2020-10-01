import React from 'react';
import { List, Button } from 'semantic-ui-react';
import { CommentConsumer } from '../../providers/CommentProvider';

const Comment = ({ location }) => (
  <CommentConsumer>
    { value => (
      <List.Item>
        <List.Content>
          <List.Header>{location.state.author}</List.Header>
          <List.Header>{location.state.subject}</List.Header>
          <List.Description>{location.state.body}</List.Description>
          <List.Description>
            <Button 
              color='red' 
              onClick={
                () => value.deleteComment(location.state.post_id, location.state.id)
              }
              >
              Delete
            </Button>
          </List.Description>
        </List.Content>
      </List.Item> 
    )}
  </CommentConsumer>
)

export default Comment;