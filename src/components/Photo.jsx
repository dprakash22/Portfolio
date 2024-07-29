import React from "react";
import { MDBContainer } from "mdb-react-ui-kit";

function Photo({width}) {
  return (
    <MDBContainer className="my-5 d-flex justify-content-center">
      <img
        src="src/assets/images/myphoto.jpg"
        className="rounded-circle"
        style={{ width: width }}
        alt="Avatar"
      />
    </MDBContainer>
  );
}

export default Photo;