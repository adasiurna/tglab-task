import React from 'react';
import { Row } from 'reactstrap';
import Photo from './components/Photo';
import { photos } from '../../data/data';

const Photos = () => {
  return (
    <Row xs="1" xl="3">
      {photos.map((photo, i) => {
        return <Photo key={i} imgUrl={photo.imgUrl}/>
      })}
    </Row>
  )
}

export default Photos;