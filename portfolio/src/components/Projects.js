import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/1.webp";
import projImg2 from "../assets/img/2.webp";
import projImg3 from "../assets/img/3.webp";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "News Web App",
      description:
        "• NewsERA provides top headline news of the day keeping the users updated with daily news and help us to keep up with the current affairs having different sections which provides the filtered news according to your desired field of interest. Link to Github Repository - https://github.com/harsh4522/News-Web-App Skills Used - Javascript,ReactJS,HTML,CSS,Bootstrap",
      imgUrl: projImg1,
    },
    {
      title: "4 LGMVIP Internship Tasks",
      description:
        "Internship tasks at LetsGrowMore. Link to Github Repository - https://github.com/harsh4522/LGMVIP-Web Skills Used - Javascript,ReactJS,HTML,CSS,Bootstrap",
      imgUrl: projImg2,
    },
    {
      title: "Calculator Web Application",
      description:
        "Web application made calculator used for performing various numerical tasks while browsing on the internet. Link to Github Repository - https://github.com/harsh4522/LGMVIP-Web/tree/master/Task%204 Skills Used - Javascript,HTML,CSS,Bootstrap",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>My Projects</h2>
                  <p>
                    Made some of the interesting projects that focuses more on
                    daily uses of a person . These projects have a great demand
                    in day-to-day life and is beneficial in saving a lot of
                    time.Some of them are mentioned below.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
