import React from "react";
import selfie from "../images/image2.jpeg";


function AboutMe() {
  return (
    <div className="about-me">
      <h2>Hi, welcome to my portfolio! I'm Sarah.</h2>
      <h3>I am...</h3>
      <div className="row">
        <img className="selfie2"
          src={selfie}
          alt="Selfie"/>
        <p>
          <ul>
            <li>A geek.</li>
            <li>A gamer.</li>
            <li>A writer.</li>
            <li>A craft fiend.</li>
            <li>A cinephile.</li>
            <li>A music junkie.</li>
            <li>A book wyrm.</li>
            <li>A fangirl.</li>
            <li>A retired baby bat.</li>
            <li>A hopeless romantic.</li>
            <li>An introvert.</li>
            <li>An Aquarius.</li>
            <li>Quick-witted.</li>
            <li>A n x i o u s.</li>
            <li>Socially awkward.</li>
            <li>A Customer Service Claims Specialist</li>
            <li>A full-stack coding bootcamp student.</li>
          </ul>
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
