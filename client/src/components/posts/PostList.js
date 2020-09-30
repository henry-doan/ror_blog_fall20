import React from 'react';
import Post from './Post';

const PostList = ({ posts, updatePost, deletePost }) => (
  <>
    {
      posts.map( p =>
        <Post
          key={p.id}
          {...p}
          updatePost={updatePost}
          deletePost={deletePost}
        />  
      ) 
    }
  </>
)

export default PostList;