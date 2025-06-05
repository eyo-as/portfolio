import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Yo, I'm <span className="purple">Eyosiyas Tumiso</span> - born and
            debugged in Hawassa, Ethiopia.
            <br />
            <br />
            🧠 By day: I dive deep into academic rabbit holes, solving
            equations, questioning reality, and occasionally melting my brain in
            study mode. <br />
            ⚙️ By night: I become the MERN-stack machine—writing code, squashing
            bugs, and launching ideas into cyberspace.
            <br />
            I don’t “code” — I bend reality using JavaScript.
            <br />
            <br />
            <br />
            🎯 OFF-THE-GRID ACTIVITIES?
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> ⚽ Football — I’ll nutmeg you in real life too.
            </li>
            <li className="about-activity">
              <ImPointRight /> 🎧 Podcasts — Fuel for the soul and brain.
            </li>
            <li className="about-activity">
              <ImPointRight /> 📚 Academic grind — I study hard, like a side
              quest with XP boosts.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "The only way to do great work is to love what you do."
          </p>
          <footer className="blockquote-footer">
            {" "}
            Steve Jobs. Yes, I live by this like a code comment that matters.{" "}
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
