import React from 'react';
import { Row, Col } from 'reactstrap';

const Comment = () => {
  return (
    <div className="p-2 comment-container">
      <Row className="comment-card">
        <Col xs="auto">
          <div className="comment-card__img"></div>
          <div className="overlay"></div>
        </Col>
        <Col>
          <div className="comment-card__username mt-2">
            Lorem Ipsum
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="comment-card__coment">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, ab non. Necessitatibus placeat, eum sapiente dignissimos nemo ipsam culpa hic dolor ea a illum ex, qui ab quas iusto. Et!
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Comment;