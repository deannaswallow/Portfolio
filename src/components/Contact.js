import React from "react";

class Contact extends React.Component {
  render() {
    return (
      <div className="contact">
        <h1>Let's Chat!</h1>
        <p>
          I love getting to know new people, discuss work opportunities, or just
          talk about the latest episode of Black Mirror. If there's coffee
          involved, even better. Or GIFs. I love GIFs. Pick your poison below.
        </p>
        <div className="row contact-links">
          <div className="col-md-3 col-sm-6">
            <a
              href="mailto:swallowdeanna@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="fas fa-envelope" />
              <span className="ml-2">Email</span>
            </a>
          </div>
          <div className="col-md-3 col-sm-6">
            <a
              href="https://twitter.com/deannathedev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="fab fa-twitter" />
              <span className="ml-2">Twitter</span>
            </a>
          </div>
          <div className="col-md-3 col-sm-6">
            <a
              href="https://github.com/deannaswallow"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="fab fa-github" />
              <span className="ml-2">GitHub</span>
            </a>
          </div>
          <div className="col-md-3 col-sm-6">
            <a
              href="https://www.linkedin.com/in/deanna-swallow/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="fab fa-linkedin" />
              <span className="ml-2">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
