import React from "react";
import Menu from "../../components/Nav/Navbar";
import Footer from "../../components/Footer/Footer";
import { Container, Row, Col } from "reactstrap";

import "./Projects.css";
import ProjectCards from "../../components/ProjectCards/ProjectCards";

import GithubIcon from "../../assets/Icons/GitHubFinder.png";
import MovieFinderIcon from "../../assets/Icons/MovieFinder.ico";


import HTMLIcon from "../../assets/Icons/HTML.png";
import CSSIcon from "../../assets/Icons/CSS.png";
import ReactIcon from "../../assets/Icons/React.webp";
import JavascriptIcon from "../../assets/Icons/JavaScript.svg";
import BootstrapIcon from "../../assets/Icons/Bootstrap.png";
import FlutterIcon from "../../assets/Icons/Flutter.webp";
import DartIcon from "../../assets/Icons/Dart.png";
import AndroidIcon from "../../assets/Icons/Android.png";
import APIicon from "../../assets/Icons/API.jpg";
import JQueryIcon from "../../assets/Icons/JQuery.jpg";
import NodeIcon from "../../assets/Icons/Nodejs.jpeg";
import MongoIcon from "../../assets/Icons/Mongodb.jpeg";

const Projects = () => {
  var GithubFinder = [
    HTMLIcon,
    CSSIcon,
    JavascriptIcon,
    BootstrapIcon,
    ReactIcon,
  ];
  var MovieFinder = [FlutterIcon, DartIcon, AndroidIcon, APIicon];
  var NEWSReader = [DartIcon, AndroidIcon, APIicon, FlutterIcon];
  var CoronaCheck = [DartIcon, APIicon, FlutterIcon, AndroidIcon];
  var Anugoonj = [
    HTMLIcon,
    CSSIcon,
    JavascriptIcon,
    BootstrapIcon,
    NodeIcon,
    MongoIcon,
    JQueryIcon,
  ];
  var CodePlayer = [
    HTMLIcon,
    CSSIcon,
    JavascriptIcon,
    JQueryIcon,
    BootstrapIcon,
  ];
  var ITLogger = [ReactIcon, BootstrapIcon, HTMLIcon, JavascriptIcon, CSSIcon];
  var SortingVisualizer = [ReactIcon, JavascriptIcon];

  return (
    <div>
      <Menu color="rgba(25, 26, 29, 1)" />
      <Container>
        <h1 className="mt-5 mb-5">My Projects</h1>
        
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
       
      </Container>
      <Footer />
    </div>
  );
};

export default Projects;
