import React from "react";
import { Container, Row, Col } from "reactstrap";

import "./Skills.css";
import FullStack from '../../assets/images/FullStack.png';
import Android from '../../assets/images/Android.jpg';
import CP from '../../assets/images/CP.jpg';

const Skills = () => {
  return (
    <div className="mainDiv">
      <Container>
        <Row className="text-center">
          <Col lg={4} sm={12} className="SkillColumn col1">
          <div className='inDiv'>
            <img src={FullStack} alt="Web developer Logo" className="ImgLogo" />
            </div>
            <div className="heading">Full Stack Developer</div>
            <div className="description">
              I like to code things from scratch, and enjoy bringing ideas to
              life in the browser.
            </div>
            <div className="subHeading">Languages I do Write</div>
            <div className="languages">
              HTML, CSS, Javascript, Bootstrap, Nodejs, Reactjs, Mongodb, Expressjs,python,C
            </div>
            <div className="subHeading">Dev Tools</div>
            <div className="tools">
              Visual Studio Code
              <br />
              Terminal
              <br />
              Github
              <br />
              Codepen
              <br />
              Sublime Text
            </div>
          </Col>
          <Col lg={4} sm={12} className="SkillColumn col2">
          <div className='inDiv'>
          <div className="heading">DEVELOPER AT SRM EASWARI ENGINEERING</div>
          

            </div>
            <div className="description">
             Hey there, this is Hidayat a full stack Web Developer at SRM EASWARI ENGINEERING college 
             I always welcome  to learn new things and i love more practical life...!
            </div>
            <br></br>
            <br></br>
            <div className="description">
            I believe in hardworking and love to get to know my mistakes .. I always love to solve competative problems!
            </div>
            
          </Col>
          <Col lg={4} sm={12} className="SkillColumn col3">
            <div className='inDiv'>
            <img src={CP} alt="Web developer Logo" className="ImgLogo" />
            </div>
            <div className="heading">Competetive Programmer</div>
            <div className="description">
              A creative thinker, adept in software development and various data structures.
            </div>
            <div className="subHeading">Languagaes I do Write</div>
            <div className="languages">C</div>
            <div className="subHeading">Programmer Tools</div>
            <div className="tools">
              Visual Studio Code
              <br />
              Codechef
              <br />
              Geeks For Geeks
              <br />
              HackerEarth
              <br />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Skills;
