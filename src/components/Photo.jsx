import React from "react";
import { MDBContainer } from "mdb-react-ui-kit";

function Photo({width}) {
  return (
    <MDBContainer className="my-4 d-flex justify-content-center w-7/12 md:w-3/4 lg:w-auto">
      <img
        src="https://drive.google.com/thumbnail?id=1ZYFIezxb4zZh2QxadqrSyKnZ7XLqmc-m"
        className="rounded-circle"
        style={{ width: width }}
        alt="Avatar"
      />
    </MDBContainer>
  );
}

export default Photo;