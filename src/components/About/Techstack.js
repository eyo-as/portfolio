import React from "react";
import { Col, Row } from "react-bootstrap";
import { ReactComponent as MySqlIcon } from "../../Assets/mysql.svg";
import { ReactComponent as Tailwind } from "../../Assets/tailwind-css.svg";
import { ReactComponent as Express } from "../../Assets/express.svg";

import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiGit,
  // DiMysql,
  DiGithubBadge,
} from "react-icons/di";
import { SiFirebase } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Tailwind style={{ width: "80px", height: "80px", fill: "#000" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Express style={{ width: "80px", height: "80px", fill: "#000" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <MySqlIcon style={{ width: "80px", height: "80px", fill: "#000" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGithubBadge />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
    </Row>
  );
}

export default Techstack;
