import React from 'react';
import { Col } from 'reactstrap';
import Comment from './components/Comment';

const Comments = () => {
  return (
    <Col>
      <Comment />
      <Comment />
      <Comment />
    </Col>
  )
}

export default Comments;