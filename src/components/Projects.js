import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';

export const Projects = () => {
  const javascriptProjects = [
    {
      title: '',
      description: '',
      technologies: '',
      github: (

      ),
      image: "",
    },
    {
      title: '',
      description: '',
      technologies: '',
      github: (

      ),
      image: "",
    },
    {
      title: '',
      description: '',
      technologies: '',
      github: (

      ),
      image: "",
    },
  ];
  const cSharpProjects = [
    {
      title: '',
      description: '',
      technologies: '',
      github: (

      ),
      image: "",
    },
    {
      title: '',
      description: '',
      technologies: '',
      github: (

      ),
      image: "",
    },
    {
      title: '',
      description: '',
      technologies: '',
      github: (

      ),
      image: "",
    },
  ];
  const reactProjects = [
    {
      title: '',
      description: '',
      technologies: '',
      github: (

      ),
      image: "",
    },
    {
      title: '',
      description: '',
      technologies: '',
      github: (

      ),
      image: "",
    },
    {
      title: '',
      description: '',
      technologies: '',
      github: (

      ),
      image: "",
    },
  ];
  const teamProjects = [
    {
      title: '',
      description: '',
      technologies: '',
      github: (

      ),
      image: "",
    },
    {
      title: '',
      description: '',
      technologies: '',
      github: (

      ),
      image: "",
    },
    {
      title: '',
      description: '',
      technologies: '',
      github: (

      ),
      image: "",
    },
  ];

  return (
    <Container>
      <Row className="align-items-center">
        <Col>
          <h2>Projects</h2>
        </Col>
      </Row>
      <Row className="align-items-center">
        <Col>
          <h3>Javascript</h3>
        </Col>
      </Row>
      <Row className="align-items-center">
        <Col>
          <h3>C# / .NET</h3>
        </Col>
      </Row>
      <Row className="align-items-center">
        <Col>
          <h3>React</h3>
        </Col>
      </Row>
      <Row className="align-items-center">
        <Col>
          <h3>Team Projects</h3>
        </Col>
      </Row>
    </Container>
  );
}