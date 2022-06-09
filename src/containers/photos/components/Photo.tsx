import React from 'react';
import { Col, Card, CardImg, CardBody, CardTitle, CardText} from 'reactstrap';

type PhotoProps = {
  imgUrl: string;
}

const Photo = ({imgUrl}: PhotoProps) => {
  return (
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
  )
}

export default Photo;