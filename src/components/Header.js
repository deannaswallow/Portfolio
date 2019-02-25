import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

class Header extends React.Component {
  render() {
    return (
      <Router>
        <div className="header">
          <span className="name">Deanna Swallow</span>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>


          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </div>
      </Router>
    );
  }
};

export default Header;
