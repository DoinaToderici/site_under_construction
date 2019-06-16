import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <div className="social">
        <a href="https://www.facebook.com/home2homemoving/">
          <i className="fab fa-facebook-square" />
        </a>
        <a href="https://www.instagram.com/moving.home2home/?fbclid=IwAR2iGAdDNUotAwZWjprl6mGD4Kt3lDj7S9PDHf673hBXnyX2N2mehEC_z78">
          <i className="fab fa-instagram" />
        </a>
        <a  style={{ pointerEvents: "none"}} href="https://www.instagram.com/moving.home2home/?fbclid=IwAR2iGAdDNUotAwZWjprl6mGD4Kt3lDj7S9PDHf673hBXnyX2N2mehEC_z78">
          <i className="fab fa-google" />
        </a>
      </div>
      <div className="call">
        <a href="tel:206-825-1139">Call 206-825-1139</a>
        <br />
        <a href="mailto:moving.home2home@gmail.com">
          moving.home2home@gmail.com
        </a>
      </div>
    </div>
  );
};

export default Contact;
