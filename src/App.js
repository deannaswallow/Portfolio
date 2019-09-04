import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Landing from "./components/Landing";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app mt-5">
          <header>
            <nav className="navbar navbar-expand-md navbar-light fixed-top d-flex justify-content-around">
              <Link to="/" className="navbar-brand">
                Deanna Swallow
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navLinks"
                aria-label="Toggle Navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navLinks">
                <Link to="/about" className="nav-link">
                  About
                </Link>
                <Link to="/projects" className="nav-link">
                  Projects
                </Link>
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </div>
            </nav>
          </header>
          <main className="p-5">
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
