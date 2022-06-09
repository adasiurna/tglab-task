import React from 'react';
import { Row, Col, Card, CardImg, CardBody, CardTitle, CardText} from 'reactstrap';
import Comments from '../../comments/Comments';

type PhotoProps = {
  imgUrl: string;
}

const Photo = ({imgUrl}: PhotoProps) => {
  return (
    <>
      <Col className="mb-4">
        <Row xs="1" md="2" xl="1">
          <Col>
            <Card>
              <CardImg
                alt="Card image cap"
                src={require('../../../assets/img/'+imgUrl)}
                top
                width="100%"
              />
              <CardBody>
                <CardTitle tag="h5">
                  Lorem ipsum dolor sit amet consectetur
                </CardTitle>
                <CardText>
                  Lorem ipsum
                </CardText>
                <CardText>
                  <small className="text-muted">
                    Lorem ipsum dolor sit
                  </small>
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col>
          <Comments />
          </Col>
        </Row>
      </Col>
    </>
  )
}

export default Photo;