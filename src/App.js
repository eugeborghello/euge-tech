import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to EugeTech.com</h1>
        <nav>
          <a href="#contact">Contact</a>
          <a href="#portfolio">Portfolio</a>
        </nav>
      </header>
      <section id="contact">
        <div className="contact-info">
          <h2>Contact Me</h2>
          <p>
            Email: 
            <FontAwesomeIcon icon={faEnvelope} style={{ marginLeft: '5px', marginRight: '8px' }} />
            craeugeniaborghello@gmail.com
          </p>
          <p>
            Phone: 
            <FontAwesomeIcon icon={faPhone} style={{ marginLeft: '5px', marginRight: '8px' }} />
            +54 9 351 6763996
          </p>
          <p>
            LinkedIn: 
            <a href="https://www.linkedin.com/in/maria-eugenia-borghello/" target="_blank" rel="noopener noreferrer" style={{ marginLeft: '5px', textDecoration: 'none' }}>
              <FontAwesomeIcon icon={faLinkedin} style={{ marginRight: '8px' }} />
              María Eugenia Borghello
            </a>
            </p>  
            <p>
            GitHub: 
            <a href="https://github.com/eugeborghello" target="_blank" rel="noopener noreferrer" style={{ marginLeft: '5px', textDecoration: 'none' }}>
              <FontAwesomeIcon icon={faGithub} style={{ marginRight: '8px' }} />
              eugeborghello
            </a>
          </p>
          <p>
            Location: 
            <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginLeft: '5px', marginRight: '8px' }} />
            Córdoba, Argentina
          </p>
        </div>
      </section>
      <section id="portfolio">
        <div className="portfolio">
          <h2>Portfolio</h2>
          <p>Here you can showcase your projects.</p>
          <ul>
            <li><a href="https://github.com/eugeborghello/LabsChallenge">Labs Challenge</a></li>
            <li><a href="https://www.youtube.com/watch?v=9L4KkutVOSc&ab_channel=EricMartinez">Veski</a></li>
            {/* Add more projects as needed */}
          </ul>
        </div>
      </section>
      <footer>
        <p>&copy; 2024 EugeTech.com</p>
      </footer>
    </div>
  );
}

export default App;
