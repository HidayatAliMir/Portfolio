import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";


import Github from '../../assets/Icons/Github.png';
import Facebook from "../../assets/Icons/Facebook.png";
import Gmail from "../../assets/Icons/Gmail.png";


import "./styles.css";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row className='pt-5 pb-3'>
          <Col lg={3}>
            <div className="name mb-3">M-Hidayat</div>
            <div className="desc">
              I'm a MERN Stack developer|Full Stack Developer
            </div>
            <br />
            <div className="contact">
              <a href="tel:6005507133">+91-6005507133</a>
              <br />
              <a href="emailto:meerhidayat563@gmail.com">meerhidayat563@gmail.com</a>
            </div>
          </Col>
          <Col lg={3}>
            <div className="head">Quick Links</div>
            <ul>
              <li>
                <Link to="/Portfolio">About Me</Link>
              <li/>
              
                <Link to="/Projects">Projects</Link>
              </li>
              <li>
                <Link to="/Contact">Contact Me</Link>
              </li>
            </ul>
          </Col>
          <Col lg={3}>
            <div className="head">Online Platforms</div>
            <ul>
            <li>
                <a
                  href="https://auth.geeksforgeeks.org/user/shlokgarg/practice/"
                  target="_blank"
                  alt="Geeks for Geeks"
                  rel="noopener noreferrer"
                >
                  Geeks for Geeks
                </a>
              </li>
              <li>
                <a
                  href="https://www.codechef.com/users/s_g_01"
                  target="_blank"
                  alt="Codechef"
                  rel="noopener noreferrer"
                >
                  Codechef
                </a>
              </li>
              <li>
                <a
                  href="https://www.hackerrank.com/S_G_01"
                  target="_blank"
                  alt="HackerRank"
                  rel="noopener noreferrer"
                >
                  HackerRank
                </a>
              </li>
            </ul>
          </Col>
          <Col lg={3}>
            <div className="head">Get In Touch</div>
            <ul className='SocialList'>
              
              <li>
                <a href="https://github.com/HidayatAliMir" target="_blank" rel="noopener noreferrer">
                  <img src={Github} alt="GitHub" className="SocialMedia" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/mir.hidayat.395"
                  target="_blank" rel="noopener noreferrer"
                >
                  <img src={Facebook} alt="Facebook" className="SocialMedia" />
                </a>
              </li>
              <li>
                <a href="mailto:meerhidayat563@gmail.com" target="_blank" rel="noopener noreferrer">
                  <img src={Gmail} alt="Gmail" className="SocialMedia" />
                </a>
              </li>
              
            </ul>
          </Col>
        </Row>
        <Row className='pb-2'>
            <Col className='text-center'>
            &#169;M_HIDAYAT 2021 <span role ="img">❤️ </span>
            </Col> 
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
