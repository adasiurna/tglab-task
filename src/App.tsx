import React from "react";
import { Container, Button, Collapse } from "reactstrap";
import "bootstrap/scss/bootstrap.scss";
import './assets/scss/styles.scss';
import { photos } from './data/data';
import Photos from "./containers/photos/Photos";

function App() {
  return (
    <>
    <header className="header d-flex justify-content-center">
      {photos.map((photo, i) => {
        return <h4 className="px-2 my-1 d-none d-md-block" key={i}>{photo.photoName}</h4>
      })}
      <div className="d-md-none hamburger-icon">
        <a 
          className="mobile-content-toggler collapsed border-0" 
          data-bs-toggle="collapse" 
          href="#collapsingNavbar" 
          role="button" 
          aria-expanded="false"
        >
          <span> </span>
          <span> </span>
          <span> </span>
        </a>
      </div> 
    </header>
    <div className="main-container collapse d-md-block" id="collapsingNavbar">
      <Container className="App pt-5">
        <Photos />
      </Container>
    </div>
    <div className="position-absolute fixed-top fixed-bottom mobile-container">
      <Container className="px-5">
      {photos.map((photo, i) => {
        return (
        <h2 className="py-4 mx-3 text-center mobile-container__photo-name" key={i}>
          {photo.photoName}
        </h2>
        )
      })}
      </Container>
    </div>
    </>
  );
}

export default App;



