import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
    AiFillGithub,
    AiFillInstagram,
  } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
    return (
        <Container fluid className="footer">
            <Row>
                <Col md="4" className="footer-copywright">
                    <h3>Designed and Developed by Matthew DeHart</h3>
                </Col>
                <Col md="4" className="footer-body">
                    <ul className="footer-icons">
                        <li className="social-icons">
                            <a
                                href="https://github.com/montelchuu"
                                style={{ color: "white" }}
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <AiFillGithub />
                            </a>
                        </li>
                        
                        <li className="social-icons">
                            <a
                                href="https://www.linkedin.com/in/matthew-dehart-283288209/"
                                style={{ color: "white" }}
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <FaLinkedinIn />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="https://www.instagram.com/mattideeee/"
                                style={{ color: "white" }}
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <AiFillInstagram />
                            </a>
                        </li>
                    </ul>
                </Col>
                <Col md="4" className="footer-copywright">
                    <h3>Copyright © MD</h3>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer;