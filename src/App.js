import React from 'react';
import './App.css';

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
          <p>Email: craeugeniaborghello@gmail.com</p>
          <p>Phone: +54 9 351 6763996</p>
          <p>Location: Córdoba, Argentina</p>
        </div>
      </section>
      <section id="portfolio">
        <div className="portfolio">
          <h2>Portfolio</h2>
          <p>Here you can showcase your projects.</p>
          <ul>
            <li><a href="https://github.com/eugeborghello/LabsChallenge">Labs Challenge</a></li>
            <li><a href="https://www.youtube.com/watch?v=9L4KkutVOSc&ab_channel=EricMartinez">Video Presentation</a></li>
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
