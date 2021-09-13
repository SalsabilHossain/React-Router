import React from "react";
import "./Testimonials.css";
import client_1 from "../Images/Sharmin.jpg";
import client_2 from "../Images/client.png";

const Testimonials = () => {
  return (
    <div className="container">
      <div className="testimonials-container">
        <div className="testimonials-content">
          <div>
            <img className="image" src={client_1} />
          </div>

          <div className="para">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </div>
        </div>
        <div className="testimonials-content">
          <div>
            <img className="image" src={client_2} />
          </div>

          <div className="para">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
