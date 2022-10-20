import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Typewriter from 'typewriter-effect';
import homeIcon from "../../Assets/home-icon.png";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading gray">
                Hi There!
              </h1>

              <h1 className="heading-name gray">
                I'M
                <strong className="main-name orange"> MATTHEW DEHART</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }} className="hometype">
              <Typewriter
                options={{
                  strings: [
                    "Web Developer",
                    "Coding Lover",
                    "Video Game Enthusiast",
                    "Food Connoisseur",
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 100,
                }}
              />
            </Col>
          </Row>
          <Row>
            <Col md={7} style={{ paddingBottom: 20 }} className="homeicon">
              <img
                src={homeIcon}
                className="img-fluid"
                alt="icon-img"
                style={{ maxHeight: "450px" }}
              />
            </Col>
            <Col md={5} className="heading-about">
              <h1 style={{ paddingBottom: 25 }} className="heading-me gray">
                A little about <strong className="main-name orange"> ME</strong>
              </h1>
              <h4 style={{ padding: 50, textAlign: "left" }} className="heading-about-text gray">
              I started out in coding through Butler Coding Bootcamp and haven't stopped since. <br/><br/>
              I have gone into depth in <strong className="orange"> Javascript, Node.js and React.js </strong><br/><br/>
              I am currently trying to <strong className="orange">expand my field </strong> by exploring different languages.
              </h4>
            </Col>
          </Row>
      </Container>
    </section>
  );
}

export default Home;