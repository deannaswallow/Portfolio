import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Landing from './components/Landing';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <header>
            <nav>
              <Link to="/" className="nav-link">Deanna Swallow</Link>
              <Link to="/about" className="nav-link">About</Link>
              <Link to="/projects" className="nav-link">Projects</Link>
              <Link to="/contact" className="nav-link">Contact</Link>
            </nav>
          </header>
          <main>
            <Route exact path="/" component={Landing} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
