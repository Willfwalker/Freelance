import React from 'react';
import './About.css';
// Import your actual profile photo
import profilePhoto from '../assets/images/profile-photo.jpg';

const About = () => {
  return (
    <section className="about" id="about">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            Hi, I'm William Walker, a Computer Science student at University College. I'm passionate about creating
            efficient, user-friendly websites and automation solutions that help small businesses thrive.
          </p>
          <p>
            My technical toolkit includes:
          </p>
          <ul className="skills-list">
            <li>Python</li>
            <li>JavaScript/React</li>
            <li>HTML/CSS</li>
            <li>Git</li>
            <li>Selenium</li>
          </ul>
          <p>
            I love the problem-solving aspect of coding and the satisfaction of creating tools that make people's lives easier.
            When I'm not coding, you can find me hiking or experimenting with new recipes in the kitchen.
          </p>
        </div>
        <div className="about-image">
          <img src={profilePhoto} alt="William Walker" className="profile-photo" />
        </div>
      </div>
    </section>
  );
};

export default About;
