import React from 'react';
import Comment from './components/Comment';
import AddCommentForm from './components/AddCommentForm';

const Comments = () => {
  return (
    <>
    <AddCommentForm />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </>
  )
}

export default Comments;