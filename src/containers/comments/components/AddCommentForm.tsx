import React from 'react';
import { Row, Col } from 'reactstrap';

const AddCommentForm = () => {
  return (
    <div>
      <Row>
        <Col>
          <form className="add-comment-form my-2 ms-2">
            <input
              className="add-comment-form__input"
              type="placeholder" 
              placeholder="Placeholder..." 
              name="placeholder" 
            />
            <button
              className="add-comment-form__button"
              type="submit"
              onClick={function(e) {e.preventDefault()}}
            >
              Submit
            </button>
          </form>
        </Col>
      </Row>
    </div>
  )
}

export default AddCommentForm