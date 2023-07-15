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
              <p>I'm a full-stack web developer and recent graduate from the Epicodus full-time software development program</p>
              <p>I have a passion for learning and creating</p>
              <p>I have previous experience in customer support through my role as a physical therapist, where I provided one-on-one care to patients</p>
              <p>I am a dedicated team player who actively seeks opportunities to enhance both my personal growth and the success of my team</p>
              <p>I consistently demonstrate a strong work ethic and a continuous drive to improve my skills</p>
            </div>
          </Col>
          <Col xs={12} s={8} md={6}>
            <img src="https://via.placeholder.com/300" alt="placeholder" />
          </Col>
          <Col xs={12} s={8} md={6}>
            <div className="education">
              <h1>Education</h1>
              <p>Full-Stack Software Engineer: Epicodus 2023</p>
              <p>Doctor of Physical Therapy: Georgia State University 2021</p>
              <p>Bachelor's of Science in Kinesiology: Georgia State University 2016</p>
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
