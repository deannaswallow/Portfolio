import React from 'react';

class Contact extends React.Component {
  render() {
    return (
      <div className="contact">
        <h1>Let's Chat!</h1>
        <p>I love getting to know new people, discuss work opportunities, or
        just talk about the latest episode of Black Mirror. If there's coffee
        involved, even better. Pick your poison below.</p>
        <a href="mailto:swallowdeanna@gmail.com">
          <span class="fas fa-envelope">Email</span>
        </a>
        <a href="https://twitter.com/deannathedev" target="_blank"
        rel="noopener noreferrer">
          <span class="fab fa-twitter">Twitter</span>
        </a>
        <a href="https://github.com/deannaswallow" target="_blank"
        rel="noopener noreferrer">
          <span class="fab fa-github">GitHub</span>
        </a>
        <a href="https://www.linkedin.com/in/deanna-swallow/" target="_blank"
        rel="noopener noreferrer">
          <span class="fab fa-linkedin">LinkedIn</span>
        </a>
      </div>
    );
  }
};

export default Contact;
