import React from "react";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Photos from "./containers/photos/Photos";

function App() {
  return (
    <Container>
      <div className="App">
        <h1>TGLab task</h1>
        <Photos />
      </div>
    </Container>
  );
}

export default App;
