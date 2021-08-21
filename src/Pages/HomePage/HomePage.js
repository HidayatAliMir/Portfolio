import React, { Component, Fragment } from "react";
import { Row, Col, Button} from "reactstrap";
import Particles from "react-particles-js";
import Menu from "../../components/Nav/Navbar.jsx";

import "./Home.css";
import Skills from "../../components/Skills/Skills.js";
import hidayat from "../../assets/images/hidayat.jpg";
import HomePageProjects from "../../components/HomePageProjects/HomePageProjects";
import Collaboration from "../../components/Collaboration/Collaboration.js";
import Footer from "../../components/Footer/Footer";



import Preloader from "../../components/Preloader/Preloader.js";

class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    this.setState({
      loading: false,
    });
  }

  render() {
    return (
      <Fragment>
        {this.state.loading ? (
          <Preloader />
        ) : (
          <div>
            <Fragment>
              <div className="Hero">
                <Menu color="transparent" />
                <Row className="mr-0 mt-5">
                  <Col xl={6} sm={12} className="text-center ImageDiv">
                    <img src={hidayat} alt="Shlok" className="HeroImage" />
                  </Col>
                  <Col xl={6} sm={12} className="text-left">
                    <div className="Heading">Hey There, I'm Hidayat.</div>
                    <div className="HeroText">
                      I'm a MERN Stack  developer/Full Stack Developer!
                    </div>
                    <br />
                    <Button className="button">
                      <a
                        className="CV"
                        href="#####"
                        target="_blank"
                        download
                      >
                        Download CV
                      </a>
                    </Button>
                  </Col>
                </Row>
                <Particles
                  className="particles"
                  params={{
                    particles: {
                      number: {
                        value: 130,
                        density: {
                          enable: true,
                          value_area: 1000,
                        },
                      },
                    },
                  }}
                />
              </div>
              <Skills />
              <HomePageProjects />
              
              <Collaboration />
              <Footer />
            </Fragment>
          </div>
        )}
      </Fragment>
    );
  }
}

export default Hero;
