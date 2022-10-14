import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { DiJavascript1, DiHtml5, DiCss3, DiReact, DiBootstrap, DiJqueryLogo, DiNodejs, DiMysql, DiMongodb } from "react-icons/di";
import { SiExpress, SiSequelize } from "react-icons/si";
import aboutImg from "../../Assets/about-me.png";


function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "2px" }} className="gray">
              <strong className="orange">HELLO!</strong> I am
            </h1>
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }} className="gray">Matthew DeHart</h1>
            <img src={aboutImg} alt="about" className="img-fluid about-img" />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
          >
            <h3 className="gray">I am an <strong className="orange">Aspiring full stack developer </strong>passionate about creative problem solving and learning.</h3>
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={4}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "2px" }}>
              <strong className="orange">My Skillset</strong>
            </h1>
          </Col>
          <Col
            md={8}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
          >
            <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
              <Col xs={4} md={2} className="tech-icons">
                <DiHtml5 className="tech-icon-icon" style={{ paddingBottom: "12px" }} />
                <h5 className="tech-icon-text">HTML</h5>
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <DiCss3 className="tech-icon-icon" style={{ paddingBottom: "12px" }} />
                <h5 className="tech-icon-text">CSS</h5>
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <DiJavascript1 className="tech-icon-icon" style={{ paddingBottom: "12px" }} />
                <h5 className="tech-icon-text">Javascript</h5>
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <DiReact className="tech-icon-icon" style={{ paddingBottom: "12px" }} />
                <h5 className="tech-icon-text">React</h5>
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <DiBootstrap className="tech-icon-icon" style={{ paddingBottom: "12px" }} />
                <h5 className="tech-icon-text">Bootstrap</h5>
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <DiJqueryLogo className="tech-icon-icon" style={{ paddingBottom: "12px" }} />
                <h5 className="tech-icon-text">Jquery</h5>
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <SiExpress className="tech-icon-icon" style={{ paddingBottom: "12px" }} />
                <h5 className="tech-icon-text">Express.js</h5>
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <DiNodejs className="tech-icon-icon" style={{ paddingBottom: "12px" }} />
                <h5 className="tech-icon-text">Node.js</h5>
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <DiMysql className="tech-icon-icon" style={{ paddingBottom: "12px" }} />
                <h5 className="tech-icon-text">MySQL</h5>
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <DiMongodb className="tech-icon-icon" style={{ paddingBottom: "12px" }} />
                <h5 className="tech-icon-text">MongoDB</h5>
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <SiSequelize className="tech-icon-icon" style={{ paddingBottom: "12px" }} />
                <h5 className="tech-icon-text">Sequelize</h5>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
