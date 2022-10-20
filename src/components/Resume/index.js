import React from "react";
import { Container, Row } from "react-bootstrap";
import pdf from "../../Assets/Matthew-DeHart-1.pdf";
function Resume() {
  return (
    <div>
      <Container fluid className="resume-section">
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <a
            variant="primary"
            href={pdf}
            className="btn"
          >
            Download Resume
          </a>
        </Row>
      </Container>
    </div>
  );
}

export default Resume;