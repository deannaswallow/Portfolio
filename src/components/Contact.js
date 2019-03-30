import React from 'react';

class Contact extends React.Component {
  render() {
    return (
      <div className="contact">
        <h1>Let's Chat!</h1>
        <p>I love getting to know new people, discuss work opportunities, or
        just talk about the latest episode of Black Mirror. If there's coffee
        involved, even better. Or GIFs. I love GIFs. Pick your poison below.</p>
        <a href="mailto:swallowdeanna@gmail.com" target="_blank"
        rel="noopener noreferrer">
          <span className="fas fa-envelope"></span>
          <span>Email</span>
        </a>
        <a href="https://twitter.com/deannathedev" target="_blank"
        rel="noopener noreferrer">
          <span className="fab fa-twitter"></span>
          <span>Twitter</span>
        </a>
        <a href="https://github.com/deannaswallow" target="_blank"
        rel="noopener noreferrer">
          <span className="fab fa-github"></span>
          <span>GitHub</span>
        </a>
        <a href="https://www.linkedin.com/in/deanna-swallow/" target="_blank"
        rel="noopener noreferrer">
          <span className="fab fa-linkedin"></span>
          <span>LinkedIn</span>
        </a>
      </div>
    );
  }
};

export default Contact;
