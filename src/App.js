import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App">
      <header>
        <h1>María Eugenia Borghello</h1>
        <p>Full Stack Developer | Manual Tester QA</p>
      </header>
      <nav>
        <a href="#about">About Me</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="container">
        <section id="about" className="bio">
          <h2>About Me</h2>
          <p>Hi there! I'm María Eugenia Borghello, a Full Stack Developer and Manual Tester QA based in Córdoba, Argentina. </p>
          <p>My journey in technology is complemented by my experience as a National Public Accountant, which has honed my analytical and organizational skills.</p>
          <p>I enjoy learning new things and growing up every day. Currently, I am training in test automation and creations alongside AI.</p>
          <p>I am a good team players as well.</p>
          <p>If you like my profile, don't hesitate to contact me!</p>
        </section>
        <section id="projects" className="projects">
          <h2>Projects</h2>
          <div className="project">
            <h3>Brooklyn Vendor Assurance</h3>
            <p>Full Stack developer - Manual Tester QA (April 2021 - Present)</p>
          </div>
          <div className="project">
            <h3>Henry</h3>
            <p>Teach Assistant (Jan 2021 - Mar 2021)</p>
            <p>Provided extra classes, solved doubts, and gave moral support.</p>
          </div>
          <div className="project">
            <h3>VESKI</h3>
            <p>Implementation of a virtual wallet (March 2021 - April 2021)</p>
            <p>Technologies: React Native, Redux, Typescript</p>
          </div>
          <div className="project">
            <h3>De Compras</h3>
            <p>Created a page where people can search for goods to buy using an API from MercadoLibre (Feb 2021 - Mar 2021)</p>
            <p>Technologies: React, API from MercadoLibre</p>
            <a href="https://github.com/eugeborghello/LabsChallenge">View Project</a>
          </div>
          <div className="project">
            <h3>Xtremers</h3>
            <p>Final project for Henry's bootcamp, an Ecommerce for extreme sports equipment (Jan 2021 - Feb 2021)</p>
            <p>Technologies: React, TailwindCSS, Redux, NodeJS, Express, PostgreSQL, Passport, Sequelize</p>
          </div>
        </section>
        <section id="contact" className="contact">
          <h2>Contact</h2>
          <p><strong>Email:</strong> <FontAwesomeIcon icon={faEnvelope} style={{ marginLeft: '5px', marginRight: '8px' }} /> <a href="mailto:craeugeniaborghello@gmail.com">craeugeniaborghello@gmail.com</a></p>
          <p><strong>Phone:</strong> <FontAwesomeIcon icon={faPhone} style={{ marginLeft: '5px', marginRight: '8px' }} /> +54 9 351 6763996</p>
          <p><strong>Location:</strong> <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginLeft: '5px', marginRight: '8px' }} />Córdoba, Argentina</p>
          <p><strong>GitHub:</strong> <FontAwesomeIcon icon={faGithub} style={{ marginRight: '8px' }} /><a href="https://github.com/eugeborghello">github.com/eugeborghello</a></p>
          <p><strong>LinkedIn:</strong> <FontAwesomeIcon icon={faLinkedin} style={{ marginRight: '8px' }} /><a href="https://www.linkedin.com/in/maria-eugenia-borghello">linkedin.com/in/maria-eugenia-borghello</a></p>
        </section>
      </div>
      <footer>
        <p>&copy; 2024 María Eugenia Borghello</p>
      </footer>
    </div>
  );
}

export default App;
