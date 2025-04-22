import React from "react";
import { MDBContainer } from "mdb-react-ui-kit";

function Photo({width}) {
  return (
    <MDBContainer className="my-4 d-flex justify-content-center w-7/12 md:w-3/4">
      <img
        src="https://dprakash.sirv.com/my/pic%20-%20Copy.jpg"
        className="rounded-circle"
        style={{ width: width }}
        alt="Avatar"
      />
    </MDBContainer>
  );
}

export default Photo;