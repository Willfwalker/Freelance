import React from 'react';
import './Services.css';
// You can import custom icons here when you add them
// import websiteIcon from '../assets/images/website-icon.png';
// import automationIcon from '../assets/images/automation-icon.png';

const Services = () => {
  return (
    <section className="services" id="services">
      <h2>Services</h2>
      <div className="services-container">
        <div className="service-card">
          <div className="service-icon">
            {/* When you have a custom icon, replace the emoji with: */}
            {/* <img src={websiteIcon} alt="Website Services" className="custom-icon" /> */}
            🌐
          </div>
          <h3>Website Packages</h3>
          <ul>
            <li>1–3 page responsive sites</li>
            <li>Contact forms, modern design</li>
            <li>Mobile + SEO friendly</li>
          </ul>
          <p className="price">Starting at $299.99</p>
        </div>

        <div className="service-card">
          <div className="service-icon">
            {/* When you have a custom icon, replace the emoji with: */}
            {/* <img src={automationIcon} alt="Automation Services" className="custom-icon" /> */}
            ⚙️
          </div>
          <h3>Automation Scripts</h3>
          <ul>
            <li>Web scraping / data extraction</li>
            <li>File formatting / Excel automation</li>
            <li>Custom workflow tools</li>
          </ul>
          <p className="price">Starting at $199.99</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
