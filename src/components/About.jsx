import React from 'react';
import './About.css';
// Import your actual profile photo
import profilePhoto from '../assets/images/profile-photo.jpg';
import ScrollAnimation from './ScrollAnimation';
import StaggeredList from './StaggeredList';

const About = () => {
  return (
    <section className="about" id="about">
      <ScrollAnimation animation="fade-up">
        <h2>About Me</h2>
      </ScrollAnimation>

      <div className="about-content">
        <ScrollAnimation animation="fade-right" delay={200} className="about-text">
          <p>
            Hi, I'm William Walker, a Computer Science student at Belhaven University. I'm passionate about creating
            efficient, user-friendly websites and automation solutions that help small businesses thrive.
          </p>
          <p>
            My technical toolkit includes:
          </p>

          <StaggeredList className="skills-list" baseDelay={300} staggerDelay={100} tagName="ul">
            <li>Python</li>
            <li>JavaScript/React</li>
            <li>HTML/CSS</li>
            <li>Git</li>
            <li>Selenium</li>
          </StaggeredList>

          <p>
            I love the problem-solving aspect of coding and the satisfaction of creating tools that make people's lives easier.
            When I'm not coding, you can find me hiking or experimenting with new recipes in the kitchen.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animation="fade-left" delay={400} className="about-image">
          <img src={profilePhoto} alt="William Walker" className="profile-photo" />
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default About;
