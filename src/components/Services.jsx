import React from 'react';
import './Services.css';
import ScrollAnimation from './ScrollAnimation';
import StaggeredList from './StaggeredList';
// You can import custom icons here when you add them
// import websiteIcon from '../assets/images/website-icon.png';
// import automationIcon from '../assets/images/automation-icon.png';

const Services = () => {
  return (
    <section className="services" id="services">
      <ScrollAnimation animation="fade-up">
        <h2>Services</h2>
      </ScrollAnimation>

      <StaggeredList className="services-container" staggerDelay={200}>
        <ScrollAnimation animation="fade-up" className="service-card">
          <div className="service-icon">
            {/* When you have a custom icon, replace the emoji with: */}
            {/* <img src={websiteIcon} alt="Website Services" className="custom-icon" /> */}
            🌐
          </div>
          <h3>Website Packages</h3>
          <StaggeredList tagName="ul" staggerDelay={100}>
            <li>1–3 page responsive sites</li>
            <li>Contact forms, modern design</li>
            <li>Mobile + SEO friendly</li>
          </StaggeredList>
          <p className="price">Starting at $299.99</p>
        </ScrollAnimation>

        <ScrollAnimation animation="fade-up" delay={200} className="service-card">
          <div className="service-icon">
            {/* When you have a custom icon, replace the emoji with: */}
            {/* <img src={automationIcon} alt="Automation Services" className="custom-icon" /> */}
            ⚙️
          </div>
          <h3>Automation Scripts</h3>
          <StaggeredList tagName="ul" staggerDelay={100}>
            <li>Web scraping / data extraction</li>
            <li>File formatting / Excel automation</li>
            <li>Custom workflow tools</li>
          </StaggeredList>
          <p className="price">Starting at $199.99</p>
        </ScrollAnimation>
      </StaggeredList>
    </section>
  );
};

export default Services;
