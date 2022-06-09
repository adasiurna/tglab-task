import React from 'react';
import { Row, Col } from 'reactstrap';

const Comment = () => {
  return (
    <div className="mb-3">
      <Row className="comment-card">
        <Col xs="auto">
          <img
            alt="user image"
            src={require('../../../assets/img/photo-1.jpg')}
            width="40px"
          />
        </Col>
        <Col>
          <div className="comment-card__username">
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