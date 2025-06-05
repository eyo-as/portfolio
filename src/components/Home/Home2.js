import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/93ec66af-cbb9-4837-87c8-1768df911bb9.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              WHO AM
              <span className="purple"> I? </span> GLAD YOU ASKED...{" "}
            </h1>
            <p className="home-about-body">
              🚀 They say normal is boring—so I left it behind. <br />
              👾 I'm a digital <span className="purple"> alchemist </span>
              —turning raw code into living, breathing web magic.
              <br />
              🧠 Trained by bootcamps, forged by sleepless nights, and powered
              by way too much coffee.
              <br />
              <br />
              I’m a<span className="purple"> MERN-stack </span>
              wizard with a passion for crafting full-stack chaos that just
              works.
              <br /> Need a boring dev? Keep scrolling.
              <br />
              Need someone who codes like it’s an art form and breaks limits for
              fun? Pull up a chair.
              <br /> 💥 Let's build something wild, unexpected, and totally
              unforgettable.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                alt="avatar"
                style={{ width: "75%", borderRadius: "50%" }}
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>🧭 FIND ME IN THE WILD WEB</h1>
            <p>
              Let’s talk. <span className="purple">Collaborate. </span> Or build
              something the internet isn’t ready for.{" "}
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/eyo-as"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://t.me/eyosiyastu"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaTelegramPlane />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/eyosiyas-tumiso/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/eyosiyas_dev"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
