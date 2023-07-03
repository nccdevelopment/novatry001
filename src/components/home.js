import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import video from '../try.mp4';
import logoImage from '../logo.png';
import webimg from '../web.jpg';
import sofimg from '../soft.jpg';
import aimg from '../ai.jpg';


function Home() {
  const location = useLocation();
  const [text, setText] = useState('');
  const messages = [
    "Welcome to NovaCore",
    "At NovaCore we care about quality",
    "At NovaCore we care about you"
  ];
  const typingDelay = 150; // Delay between each character
  const erasingDelay = 600; // Delay after typing complete message
  const newTextDelay = 2000; // Delay before starting to erase the message

  useEffect(() => {
    let currentMessageIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;

    const type = () => {
      const currentMessage = messages[currentMessageIndex];
      if (isDeleting) {
        setText(currentMessage.substring(0, currentCharIndex - 1));
        currentCharIndex--;
      } else {
        setText(currentMessage.substring(0, currentCharIndex + 1));
        currentCharIndex++;
      }

      if (!isDeleting && currentCharIndex === currentMessage.length) {
        // Finished typing current message
        isDeleting = true;
        setTimeout(type, erasingDelay);
      } else if (isDeleting && currentCharIndex === 0) {
        // Finished erasing current message
        isDeleting = false;
        currentMessageIndex = (currentMessageIndex + 1) % messages.length;
        setTimeout(type, newTextDelay);
      } else {
        setTimeout(type, typingDelay);
      }
    };

    // Start typing effect after initial delay
    setTimeout(type, newTextDelay);

    // Clean up effect
    return () => {
      clearTimeout();
    };
  }, []);

  return (
    <div>
      <section id="header">
        <div className="logo-container">
          <a href="#"><img src={logoImage} className="logo" alt="" /></a>
        </div>
        <div className="navbar-container">
          <ul id="navbar">
            <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/service">Service</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </section>

      <section id="hero">
        <video src={video} autoPlay muted loop />
        <div className="content">
          <h4 className="typing-text" style={{ fontSize: '30px' }}>{text}</h4>
        </div>
      </section>

      <section id="about-us-section" style={{ padding: '50px' }}>
        <h2>About Us</h2>
        <p>NovaCore Tech Consulting offers a range of online tools and services tailored to your business needs, with expertise from Wall Street to NASA. Their dedicated team, consisting of Ankita, Corey, Himanshi, and Jurgen, all Computer Science graduates from Queens College, is committed to providing personalized support, maintenance, and technical assistance for your website and applications. By understanding your unique aspirations, they create captivating and user-centric websites that reflect your brand identity, helping you build something extraordinary together.</p>
        <Link to="/about" className="learn-more-button">Learn More</Link>
      </section>

      <section id="content-section" style={{ padding: '200px' }}>
        
        <div className="box-container">
          <div className="box">
            <img src={webimg} alt="Image 1" />
            <div className="box-overlay">
              <h3>Web Development</h3>
              <p>Web development is the process of building and maintaining websites and web applications to facilitate online communication and interaction.</p>
            </div>
          </div>
          <div className="box">
            <img src={aimg} alt="Image 2" />
            <div className="box-overlay">
              <h3>AI Development</h3>
              <p>AI development creates intelligent systems and algorithms that mimic human intelligence to enhance efficiency and enable new possibilities in diverse industries.</p>
            </div>
          </div>
          <div className="box">
            <img src={sofimg} alt="Image 3" />
            <div className="box-overlay">
              <h3>Software Development</h3>
              <p>Software development involves designing, coding, testing, and maintaining computer programs and applications to fulfill specific user needs and solve various problems.</p>
            </div>
          </div>
        </div>
        <section id="about-us-section" style={{ padding: '50px' }}>
        <Link to="/service" className="learn-more-button">Learn More</Link>
      </section>
      </section>


      {/* Add the footer */}
      <footer style={{ backgroundColor: 'black', color: 'white', padding: '20px' }}>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
  <div style={{ maxWidth: '960px', margin: '0 auto', display: 'flex', justifyContent: 'space-between' }}>
      <div>
        <p style={{fontSize: '18px', fontWeight: 'bold', marginBottom: '8px' }}>Contact information:</p>
        <p style={{ marginBottom: '4px' }}>Phone: <a href="tel:(517)-591-6352" style={{ color: 'gold' }}>(517)-591-6352</a></p>
        <p style={{ marginBottom: '4px' }}>Email: <a href="mailto:novacore@novacoreconsulting.com" style={{ color: 'gold' }}>novacore@novacoreconsulting.com</a></p>
      </div>

    <div>
      <p>Follow us on social media:</p>
      <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', alignItems: 'center' }}>
        <li><a href="https://www.facebook.com/profile.php?id=100094114370679"><i className="fab fa-facebook social-icon" style={{ color: 'gold', fontSize: '24px', marginRight: '15px' }}></i></a></li>
        <li><a href="https://twitter.com/CoreNovacore"><i className="fab fa-twitter social-icon" style={{ color: 'gold', fontSize: '24px', marginRight: '15px' }}></i></a></li>
        <li><a href="https://www.instagram.com/novacoretc/"><i className="fab fa-instagram social-icon" style={{ color: 'gold', fontSize: '24px', marginRight: '15px' }}></i></a></li>
      </ul>

    </div>
  </div>
</footer>



    </div>
  );
}

export default Home;
