import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import gamedayImg from "../../Assets/gameday.png";
import notetakerImg from "../../Assets/note-taker.png";
import passwordImg from "../../Assets/password-generator.png";
import dreamteamImg from "../../Assets/dream-team.png";
import weathersongImg from "../../Assets/weathersong.png";


function Portfolio() {
  return (
    <Container fluid className="portfolio-section">
      <Container>
        <h1 className="portfolio-heading gray">
          My Recent <strong className="orange">Projects </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="portfolio-card">
            <Card className="portfolio-card-view">
                <Card.Img variant="top" src={passwordImg} alt="card-img" className="card-img" />
                <Card.Body>
                    <Card.Title className="orange">Password Generator</Card.Title>
                    <Card.Text className="gray" style={{ textAlign: "justify" }}>
                        Password generator using basic HTML and css and alerts.
                    </Card.Text>
                    <form action="https://github.com/montelchuu/unique-password-generator">
                      <input type="submit" className="btn" value="Github" />
                    </form>
                </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="portfolio-card">
            <Card className="portfolio-card-view">
                <Card.Img variant="top" src={weathersongImg} alt="card-img" className="card-img" />
                <Card.Body>
                    <Card.Title className="orange">WeatherSong</Card.Title>
                    <Card.Text className="gray" style={{ textAlign: "justify" }}>
                        A music app to find playlists on spotify by the weather conditions in your area.
                    </Card.Text>
                    <form action="https://github.com/a-hines/lovelace-group">
                      <input type="submit" className="btn" value="Github" />
                    </form>
                </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="portfolio-card">
            <Card className="portfolio-card-view">
                <Card.Img variant="top" src={notetakerImg} alt="card-img" className="card-img" />
                <Card.Body>
                    <Card.Title className="orange">NoteTaker</Card.Title>
                    <Card.Text className="gray" style={{ textAlign: "justify" }}>
                        An app to take notes on that uses local storage.
                    </Card.Text>
                    <form action="https://github.com/montelchuu/unique-note-taker">
                      <input type="submit" className="btn" value="Github" />
                    </form>
                </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="portfolio-card">
            <Card className="portfolio-card-view">
                <Card.Img variant="top" src={dreamteamImg} alt="card-img" className="card-img" />
                <Card.Body>
                    <Card.Title className="orange">Team Generator</Card.Title>
                    <Card.Text className="gray" style={{ textAlign: "justify" }}>
                        Using the console, create a team of engineers and subordinates which will generate a page of information.
                    </Card.Text>
                    <form action="https://github.com/montelchuu/unique-team-profile-generator">
                      <input type="submit" className="btn" value="Github" />
                    </form>
                </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="portfolio-card">
            <Card className="portfolio-card-view" >
                <Card.Img variant="top" src={gamedayImg} alt="card-img" className="card-img" />
                <Card.Body>
                    <Card.Title className="orange">Gameday</Card.Title>
                    <Card.Text className="gray" style={{ textAlign: "justify" }}>
                        Full stack project using MySql and node.js to create a friendly tailgate app for all football players.
                    </Card.Text>
                    <form action="https://github.com/rhx1138/tail-gate">
                      <input type="submit" className="btn" value="Github" />
                    </form>
                </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Portfolio;