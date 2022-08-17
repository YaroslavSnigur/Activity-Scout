import React from "react";

function About(props) {
  return (
    <div className="Footer">
      <div className="FooterTextContainer">
        <p className="About">About</p>
        <p>
          {props.fee}
          <br />
          etc
          <br />
          etc
          <br />
          etc
          <br />
          etc
          <br />
          etc
        </p>
      </div>
    </div>
  );
}

export default About;
