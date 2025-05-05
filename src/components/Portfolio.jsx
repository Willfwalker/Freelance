import React from 'react';
import './Portfolio.css';
// Import project images - replace with your actual screenshots when you add them
import projectImage1 from '../assets/react.svg'; // Using React logo as temporary placeholders
import projectImage3 from '../assets/react.svg';

// For the car detailing website, we'll use a direct link to the website
// Later, you should replace this with a local image in your assets folder
const carDetailingWebsiteUrl = 'https://william-walkers-washing-gnlb.vercel.app/';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      name: 'Web Page Scraper',
      description: 'Developed a Python script that recursively crawls websites to extract links and images, with configurable depth and domain restrictions.',
      image: projectImage1,
      imageAlt: 'Web Page Scraper Code',
      link: 'https://github.com/Willfwalker/2025-Programs/tree/main/Page%20Scraper',
      isCodeProject: true,
      codeSnippet: `import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse
import json
from datetime import datetime
import time
from collections import deque

class PageScraper:
    def __init__(self, base_url, max_depth=1, restrict_domain=True, delay=0.5):
        self.base_url = base_url
        self.max_depth = max_depth
        self.restrict_domain = restrict_domain
        self.delay = delay
        self.links = set()
        self.images = set()
        self.visited_urls = set()
        self.base_domain = urlparse(base_url).netloc`,
      note: 'Python script using BeautifulSoup and requests'
    },
    {
      id: 2,
      name: 'Car Detailing Business Website',
      description: 'Created a modern, responsive website for my car detailing business, showcasing services and allowing customers to book appointments.',
      // Using a special component for this project instead of a static image
      isWebsitePreview: true,
      websiteUrl: carDetailingWebsiteUrl,
      imageAlt: 'Car Detailing Website Screenshot',
      link: carDetailingWebsiteUrl,
      note: 'Click to visit the actual website'
    },
    {
      id: 3,
      name: 'Glide - Canvas Student Resource Wrapper',
      description: 'Developed a web application that enhances the Canvas LMS experience for students, providing easier access to course materials and resources.',
      isWebsitePreview: true,
      websiteUrl: 'https://glide-zeta.vercel.app/landing',
      imageAlt: 'Glide Canvas Wrapper Screenshot',
      link: 'https://glide-zeta.vercel.app/landing',
      note: 'Click to visit the actual website'
    }
  ];

  return (
    <section className="portfolio" id="portfolio">
      <h2>Portfolio</h2>
      <div className="projects-container">
        {projects.map(project => (
          <div className="project-card" key={project.id}>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card-link"
            >
              <div className="project-content">
                <div className="project-image-container">
                  {project.isWebsitePreview ? (
                    // For website projects, show a website preview frame
                    <div className="website-preview">
                      <div className="website-preview-header">
                        <div className="browser-dots">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                        <div className="browser-address">{project.websiteUrl}</div>
                      </div>
                      <div className={`website-preview-content ${project.id === 2 ? 'car-detailing-bg' : 'canvas-wrapper-bg'}`}>
                        <div className="website-preview-placeholder">
                          {project.id === 2 ? (
                            <>
                              <span>Walker's Washing</span>
                              <p>Professional Car Cleaning Services</p>
                            </>
                          ) : (
                            <>
                              <span>Glide</span>
                              <p>Canvas Student Resource Wrapper</p>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  ) : project.isCodeProject ? (
                    // For code projects, show a code snippet
                    <div className="code-preview">
                      <div className="code-preview-header">
                        <div className="file-tabs">
                          <span className="active-tab">page_scraper.py</span>
                        </div>
                        <div className="code-actions">
                          <span>Python</span>
                        </div>
                      </div>
                      <pre className="code-snippet">
                        <code>{project.codeSnippet}</code>
                      </pre>
                    </div>
                  ) : (
                    // For other projects, show the regular image
                    <img src={project.image} alt={project.imageAlt} className="project-image" />
                  )}
                  <p className="image-note">{project.note}</p>
                </div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className={`project-link-button ${project.isCodeProject ? 'code-project-link' : ''}`}>
                  {project.isWebsitePreview
                    ? 'Visit Website'
                    : project.isCodeProject
                      ? 'View Full Code'
                      : 'View Project'}
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
