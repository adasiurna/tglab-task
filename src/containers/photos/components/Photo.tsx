import React from 'react';
import { Row, Col, Card, CardImg, CardBody, CardTitle, CardText} from 'reactstrap';
import Comments from '../../comments/Comments';

type PhotoProps = {
  imgUrl: string;
}

const Photo = ({imgUrl}: PhotoProps) => {
  return (
    <>
      <Col className="mb-4 px-5">
        <Row className="card-container" xs="1" md="2" xl="1">
          <Col className="img-container px-0">
            <Card>                
              <CardBody className="d-none d-md-block d-xl-none" >
                <CardTitle tag="h5">
                  Lorem ipsum dolor sit amet consectetur
                </CardTitle>
                <CardText>
                  Lorem ipsum
                </CardText>
                <CardText>
                  <small>
                    Lorem ipsum dolor sit
                  </small>
                </CardText>
              </CardBody>  
              <div className="img-container__overlay">  
                <CardImg
                  className="img card-container__img"
                  alt="Card image cap"
                  src={require('../../../assets/img/'+imgUrl)}
                  top
                  width="100%"
                />
              </div>
              <CardBody className="d-md-none d-xl-block" >
                <CardTitle tag="h5">
                  Lorem ipsum dolor sit amet consectetur
                </CardTitle>
                <CardText>
                  Lorem ipsum
                </CardText>
                <CardText>
                  <small>
                    Lorem ipsum dolor sit
                  </small>
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col className="col__comments px-0 py-0">
            <div className="comments-container">
              <Comments />
            </div>
          </Col>
        </Row>
      </Col>
    </>
  )
}

export default Photo;