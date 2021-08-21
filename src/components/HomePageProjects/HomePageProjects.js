import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import ProjectCards from "../ProjectCards/ProjectCards";
import { Link } from "react-router-dom";

import GithubIcon from "../../assets/Icons/GitHubFinder.png";
import MovieFinderIcon from "../../assets/Icons/MovieFinder.ico";

import HTMLIcon from "../../assets/Icons/HTML.png";
import CSSIcon from "../../assets/Icons/CSS.png";
import ReactIcon from "../../assets/Icons/React.webp";
import JavascriptIcon from "../../assets/Icons/JavaScript.svg";
import BootstrapIcon from "../../assets/Icons/Bootstrap.png";


import "./style.css";

const HomePageProjects = () => {
  var GithubFinder = [
    HTMLIcon,
    CSSIcon,
    JavascriptIcon,
    BootstrapIcon,
    ReactIcon,
  ];
  var SortingVisualizer = [ReactIcon, JavascriptIcon];

  return (
    <div>
      <Container>
        <center>
          <h1 style={{ 'marginBottom': '46px' }}>My Projects</h1>
        </center>
        <Row>
        <Col lg={6} sm={12}>
            <ProjectCards
              projectIcon={MovieFinderIcon}
              projectName="BIRTHDAY -REMINDER"
              description="this is Birth reminder app made in vanilla javascript"
              projectLink="https://github.com/HidayatAliMir/reminder-app"
              emoji1="🎉"
              languages={SortingVisualizer}
            />
          </Col>
          <Col lg={6} sm={12}>
            <ProjectCards
              projectIcon={GithubIcon}
              projectName="Static Website"
              description="this is a my static website when i jumped into programming life in begining!"
              projectLink=" https://hidayatalimir.github.io/HidayatAliMir/"
              emoji1="🔥"
              languages={GithubFinder}
            />
          </Col>
        </Row>
        <center>
          <Link to="/Projects">
            <Button color="primary" className='MoreButton'>
              More Projects
            </Button>
          </Link>
        </center>
      </Container>
    </div>
  );
};

export default HomePageProjects;
