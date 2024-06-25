import { Container, Row, Col, Tab, Nav, Button } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/projects/project-img1.png";
import projImg2 from "../assets/img/projects/project-img2.png";
import projImg3 from "../assets/img/projects/project-img3.png";
import starbuck from "../assets/img/projects/starbucks.png";
import todo from "../assets/img/projects/todo.png";
import calculator from "../assets/img/projects/calculator.png";
import scalculator from "../assets/img/projects/scalculator.png";
import qrcode from "../assets/img/projects/QR-Scanner.png"
import musicplayer from "../assets/img/projects/musicPlayer.png"
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { isVisible } from "@testing-library/user-event/dist/utils/misc/isVisible";

export const Projects = () => {

  const projects = [
    {
      title: "Starbuck Landing Page",
      description: "Design & Development",
      imgUrl: starbuck,
      prolink: "https://aniket7277.github.io/Starbuck-Landing-Page/",
      stack: "HTML, and CSS ",
    },
    {
      title: "To Do List",
      description: "Add things to your todo list and complete it and then remove it.",
      imgUrl: todo,
      prolink: "https://github.com/aniket7277/React-ToDoList",
      stack: "React HTML, CSS, and JavaScript"
    },
    {
      title: "Calculator",
      description: "Simple calculator",
      imgUrl: calculator,
      prolink:"https://github.com/aniket7277/Simple-Calculator",
      stack: "HTML, and CSS",
    },
    {
      title: "Scientific Calculator",
      description: "Used for any scintific calculation",
      imgUrl: scalculator,
      prolink: "https://aniket7277.github.io/Scientific-Calculator/",
      stack: "HTML, and CSS",
    },
    {
      title: "QR Code Scanner",
      description: "Scan your QR codes",
      imgUrl: qrcode,
      prolink: "https://aniket7277.github.io/QR_Sacnner/",
      stack: "HTML, CSS, and JavaScript",
    },
    {
      title: "Music Player using JS",
      description: "Music Player",
      imgUrl: musicplayer,
      prolink: "https://aniket7277.github.io/JavaScript_Music-Player/",
      stack: "HTML, CSS, and JavaScript"
    },
  ];

  const projects2 = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                  <h2>Projects</h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>}
            </TrackVisibility>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">Basic Projects</Nav.Link>
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
                <Tab.Pane eventKey="second">
                <Row>
                    {
                      projects2.map((project, index) => {
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
                <Tab.Pane eventKey="third">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}

export default Projects;