import React from "react";

class Projects extends React.Component {
  render() {
    return (
      <div className="projects">
        <h1>My Projects</h1>
        <p>
          This portfolio site is a project in and of itself, so{" "}
          <strong>
            <a
              href="https://github.com/deannaswallow/Portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              click here
            </a>
          </strong>{" "}
          to see the code for it.
        </p>
        <h2 className="project-title">Mario Kart Profiler</h2>
        <strong>
          <a
            href="https://github.com/deannaswallow/mario-face"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="mario-pic"
              src="/images/MarioKart.png"
              alt="Screenshot of mario kart project"
            />
            <br />
            See the code here.
          </a>
        </strong>
        <br />
        <strong>
          <a
            href="https://www.mariokartprofiler.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <br />
            See live demo here.
          </a>
        </strong>
        <p className="project-desc">
          This is a project I built to demonstrate various skills including how
          to use JSON.
        </p>
        <h2 className="project-title">Catch of the Day</h2>
        <strong>
          <a
            href="https://github.com/deannaswallow/cotdv2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="cotd-pic"
              src="/images/CotDPic.png"
              alt="Screenshot of header"
            />
            <br />
            See the code here.
          </a>
        </strong>
        <p className="project-desc">
          This is a project I built during my quest to learn React. It
          incorporates state, props, components, and routing.
        </p>
        <h2 className="project-title">BlocJams</h2>
        <strong>
          <a
            href="https://github.com/deannaswallow/Bloc-Jams-AngularJS"
            target="_blank"
            rel="noopener noreferrer"
          >
            See the code for the Angular version here.
          </a>
        </strong>
        <br />
        <strong>
          <a
            href="https://github.com/deannaswallow/BlocJamsReact"
            target="_blank"
            rel="noopener noreferrer"
          >
            See the code for the React version here.
          </a>
        </strong>
        <br />
        <strong>
          <a
            href="https://github.com/deannaswallow/bloc-jams-jquery"
            target="_blank"
            rel="noopener noreferrer"
          >
            See the code for the jQuery version here.
          </a>
        </strong>
        <p className="project-desc">
          There are actually three versions of this. I originally built it with
          jQuery, then Angular, and then React. All three were done while I was
          in a development boot camp. It's a music player app using some free
          music files that are hosted online.
        </p>
        <h2 className="project-title">To Do App</h2>
        <strong>
          <a
            href="https://github.com/deannaswallow/ReactToDo"
            target="_blank"
            rel="noopener noreferrer"
          >
            See the code for the React version here.
          </a>
        </strong>
        <br />
        <strong>
          <a
            href="https://github.com/deannaswallow/angularjs-to-do"
            target="_blank"
            rel="noopener noreferrer"
          >
            See the code for the Angular version here.
          </a>
        </strong>
        <br />
        <strong>
          <a
            href="https://github.com/deannaswallow/to-do-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            See the code for the vanilla JavaScript version here.
          </a>
        </strong>
        <p className="project-desc">
          As was the case with BlocJams, there are three versions of this as
          well: React, Angular, and vanilla JavaScript. Gotta know the basics,
          right?
        </p>
      </div>
    );
  }
}

export default Projects;
