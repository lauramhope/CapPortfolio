import './App.css';
import { Container, Row, Col } from 'react-bootstrap';

export const AboutMe = () => {

  return (
    <div className="intro">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} s={8} md={6}>
            <div className="about-me">
              <h1>About Me</h1>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
            </div>
          </Col>
          <Col xs={12} s={8} md={6}>
            <img src="https://via.placeholder.com/300" alt="placeholder" />
          </Col>
          <Col xs={12} s={8} md={6}>
            <div className="education">
              <h1>Education</h1>
              <p></p>
              <p></p>
              <p></p>
            </div>
          </Col>
          <Col xs={12} s={8} md={6}>
            <div className="skills">
              <h1>Skills</h1>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
            </div>
          </Col>
          <Col xs={12} s={8} md={6}>
            <div className="hobbies">
              <h1>Hobbies</h1>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
