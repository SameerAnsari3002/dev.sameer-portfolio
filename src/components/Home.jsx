import React from 'react';
import './Home.css';

function Home({ scrollToSection }) {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <h1 className="home-greeting">Hi, I'm <br className='home-name-br' /><span className='home-name'>Md Sameer Ansari</span></h1>
        <h2 className="home-greeting">Web Devloper</h2>
        <p className="home-description">
          I’m a web developer with a strong interest in building responsive and user-friendly web applications. 
          I use React, JavaScript, HTML, and CSS to create clean and functional interfaces, 
          and I enjoy simplifying complex ideas into intuitive designs.
        </p>
        <button 
          className="home-cta-btn"
          onClick={() => scrollToSection('projects')}
        >
          View My Work
        </button>
      </div>
    </section>
  );
}

export default Home;