import React from "react";

function Main() {
  return (
    <div className="Main">
      <h1 className="lg-heading">
        Some
        <span className="text-secondary">One</span>
      </h1>

      <h2 className="sm-heading">Web Developer</h2>

      <div className="icons">
        <a href="https://www.twitter.com" target="_blank">
          <i className="fab fa-twitter fa-2x"></i>
        </a>
        <a href="https://www.facebook.com" target="_blank">
          <i className="fab fa-facebook fa-2x"></i>
        </a>
        <a href="https://www.linkedin.com" target="_blank">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a href="https://www.github.com" target="_blank">
          <i className="fab fa-github fa-2x"></i>
        </a>
      </div>
    </div>
  );
}

export default Main;

