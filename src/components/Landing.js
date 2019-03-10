import React from 'react';

class Landing extends React.Component {
  render() {
    return (
      <div className="landing">
        <h1>Hello!</h1>
        <p>My name is Deanna, and I'm a developer. My goal in life is
        to make things that help people. If I can have fun while doing
        it, even better. Welcome!</p>
        <br />
        <p>Until I'm brave enough to get a real picture of myself, here's a
        picture of one of my cats.</p>
        <img className="cat-pic" src="/images/Max.png" alt="My cat Max" />
      </div>
    );
  }
};

export default Landing;
