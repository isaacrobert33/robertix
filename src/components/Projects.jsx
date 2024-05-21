import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/oryn.png";
import projImg2 from "../assets/img/PriceMgmt.png";
import projImg3 from "../assets/img/biogen.png";
import projImg4 from "../assets/img/api.jpg";
import projImg5 from "../assets/img/gitcode.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Beatdrop",
      description: "This is a musical event managing platform built on Flask and React.js",
      imgUrl: projImg2,
      projUrl: "https://traxxsion.com/"
    },
    {
      title: "LizzyHealth",
      description: "This is an Hospital Management Software, a SAAS product to render services to hospitals. Built on Python (Django) and React.js for the frontend.",
      imgUrl: projImg3,
      projUrl: "https://server1.lhrobot.com.ng/"
    },
    {
      title: "Tempager",
      description: "Tempager (template manager) is a Flask API. By the means of the API you have access to perform CRUD operations on templates resources.",
      imgUrl: projImg4,
      projUrl: "https://github.com/isaacrobert33/Tempager"
    },
    {
      title: "Oryn",
      description: "Oryn is a React base music streaming web application built leveraging Spotify API",
      imgUrl: projImg1,
      projUrl: "https://oryn.vercel.app/"
    },
    {
      title: "Status-Bot",
      description: "With Status-Bot, you have all your tasks as a website admin manager done in a blink of a eye.",
      imgUrl: projImg4,
      projUrl: "https://github.com/isaacrobert33/Status-Bot"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Want to throw a look at my works? I've worked on diverse projects and these are a few of the multiple ones:</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p></p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p></p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt={"background-img"}></img>
    </section>
  )
}
