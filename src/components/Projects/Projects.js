import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import forum from "../../Assets/Projects/forumEvangadi.png";
import peerHub from "../../Assets/Projects/peerHub.png";
import abeGarage from "../../Assets/Projects/abeGarage.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={peerHub}
              isBlog={false}
              title="Peer Hub"
              description="Peer Hub is a dynamic, community-driven platform designed to empower students to ask questions, share answers, and collaborate academically. Inspired by platforms like Stack Overflow and Quora, Peer Hub provides a safe space for learners to support one another, especially within a school or campus context."
              ghLink="https://github.com/eyo-as/BNB_Collaboration_Platform_Frontend"
              demoLink="https://peer-hub.vercel.app"
            />
          </Col>
          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={abeGarage}
              isBlog={false}
              title="Abe Garage"
              description="ABE GARAGE is a full-stack car service management system designed to help local garages efficiently manage customer bookings, services, and mechanic assignments. It modernizes the traditional paper-based process by introducing an intuitive digital workflow for service tracking, user management, and role-specific access."
              ghLink="https://github.com/eyo-as/abe-garage"
              demoLink="https://abe-garage-gilt.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={forum}
              isBlog={false}
              title="Evangadi Forum"
              description="Evangadi Forum is a full-stack question-and-answer platform tailored for aspiring developers and tech learners. Designed as a collaborative learning space, it allows users to post programming-related questions, receive peer answers, and build a shared technical knowledge base. The platform supports secure user authentication and provides a smooth interface for navigating discussions — making it ideal for coding communities and bootcamp cohorts."
              ghLink="https://github.com/eyo-as/Evangadi_Forum_Frontend"
              demoLink="https://forum-evangadi-qa.vercel.app"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
