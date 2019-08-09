import React from "react";

class Projects extends React.Component {
  render() {
    return (
      <div className="projects">
        <h1>My Projects</h1>
        <p className="portfolio">
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
        <br />
        <h2 className="project-title">Mario Kart Profiler</h2>
        <strong>
          <a
            href="https://github.com/deannaswallow/mario-face"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="project-pic"
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
          This is a project I built to demonstrate various skills such as using
          Create React App, JSON, and third party libraries. It was a lot of fun
          to use a library to give it a nostalgic look. The biggest challenge I
          faced was surpising to me: styling the radio controls. I felt that the
          library's radio buttons weren't the best fit, so I set about to do my
          own. It struck me as odd how difficult it was to give them a unique
          look while making sure they were still accessible, which is a priority
          to me.
        </p>
        <h2 className="project-title">Catch of the Day</h2>
        <strong>
          <a
            href="https://github.com/deannaswallow/cotdv2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="project-pic"
              src="/images/CotDPic.png"
              alt="Screenshot of header"
            />
            <br />
            See the code here.
          </a>
        </strong>
        <p className="project-desc">
          This is a project I built during my quest to learn React. It
          incorporates state, props, components, and routing. The biggest
          challenge I faced was managing information in state and making sure
          that it went to the right places at the right time.
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
            href="https://github.com/deannaswallow/bloc-jams-jquery"
            target="_blank"
            rel="noopener noreferrer"
          >
            See the code for the jQuery version here.
          </a>
        </strong>
        <p className="project-desc">
          This is a music player app that I originally built in jQuery, then in
          Angular. Doing it in those two formats helped me see the differences
          between the two methods, which allowed me to see how each had their
          own strengths. The biggest challenges I faced were making the controls
          work correctly and making the progress bar update properly.
        </p>
      </div>
    );
  }
}

export default Projects;
