import React, { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImage from '../logo.png';
import video from '../try1.mp4';
import webimg from '../nasa.jpg';
import sofimg from '../sat.jpg';
import aimg from '../software.jpg';
import aimg2 from '../soft.jpg';

function Header() {
  const location = useLocation();

  return (
    <section id="header">
      <div className="logo-container">
        <a href="#">
          <img src={logoImage} className="logo" alt="" />
        </a>
      </div>
      <div className="navbar-container">
        <ul id="navbar">
          <li>
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
              About
            </Link>
          </li>
          <li>
            <Link to="/service" className={location.pathname === '/service' ? 'active' : ''}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

function About() {
  const location = useLocation();
  const [typedText, setTypedText] = useState('');
  const [boxWidth, setBoxWidth] = useState(0);
  const boxRef = useRef(null);

  const messages = ["About NovaCore!", "About Us!","Empowering your business with technology and design"];
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
        setTypedText(currentMessage.substring(0, currentCharIndex - 1));
        currentCharIndex--;
      } else {
        setTypedText(currentMessage.substring(0, currentCharIndex + 1));
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

  useEffect(() => {
    if (boxRef.current) {
      setBoxWidth(boxRef.current.offsetWidth);
    }
  }, [typedText]);

  const companyDescription =
   'NovaCore Tech Consulting offers you a wide variety of online tools to power your online presence, from Wall Street to NASA, we have expertise in building websites and applications suitable for what you and your company will need. With specific packages and price models fit just for what you need, our dedicated team is here to support you every step of the way, providing ongoing maintenance, updates, and technical assistance to keep your digital presence running smoothly and seamlessly.'

  const servicesOffered =
    'At the heart of our approach lies a deep understanding of your unique needs and aspirations for your business. We believe that a website should not only reflect your brands identity but also engage and inspire your audience. By taking the time to listen, learn, and collaborate, we ensure that every aspect of your website is meticulously tailored to captivate and connect with your target users. Lets build something extraordinary together!';

  const customerFocus =
    'Meet the individuals behind NovaCore! The team is Ankita, Corey, Himanshi and Jurgen, all Computer Science graduates who went to Queens College. Amidst lines of code and late-night study sessions, a bond was formed—an unbreakable connection that would lay the foundation for an extraordinary journey. That journey has led us to building NovaCore so we can pursue our passions to help people using technology, allowing us to help small businesses grow and have the online presence that is so crucial in today’s tech driven world. As each one of us has individually excelled in our own respective areas from working as a paralegal, developing an API for a shipping company as well as multiple companies, interning at NASA and even leading a team on building a NanoSatellite! As we work together and gain ground on building businesses, we aim to help you build your brand the best you can.';

  const randomFacts = [];

  const getRandomFact = () => {
    const randomIndex = Math.floor(Math.random() * randomFacts.length);
    return randomFacts[randomIndex];
  };

  return (
    <div>
      <Header />
      <section id="hero">
        <video src={video} autoPlay muted loop />
        <div className="content">
          <div className="typing-container">
            <div className="typing-box" style={{ width: boxWidth }} ref={boxRef}></div>
            <h4 className="typing-text" style={{ fontSize: '30px', whiteSpace: 'nowrap' }}>
              {typedText}
            </h4>
          </div>
        </div>
      </section>
      <section style={{ backgroundColor: '#333333', color: 'white', padding: '15px' }}>
      <section id="about-section" style={{ margin: '100px' }}>
          <h2>About NovaCore</h2>
          <p>Welcome to our website! We are a passionate team dedicated to providing high-quality products and excellent customer service.</p>
          <p style={{ textAlign: 'justify', lineHeight: '1.5', letterSpacing: '1px' }}>{companyDescription}</p>
          <p style={{ textAlign: 'justify', lineHeight: '1.5', letterSpacing: '1px' }}>{servicesOffered}</p>
          <p style={{ textAlign: 'justify', lineHeight: '1.5', letterSpacing: '1px' }}>{customerFocus}</p>
          <div style={{ textAlign: 'justify' }}>
            {randomFacts.map((fact, index) => (
              <p key={index}>{fact}</p>
            ))}
          </div>
        </section>  
        <section id="content-section" style={{ padding: '100px', margin: '10px'}}>
          <h2>Our Experinces</h2>
          <div className="box-container">
            <div className="box">
              <img src={webimg} alt="Image 1" />
              <div className="box-overlay">
                <h3>NASA</h3>
                <p>During an internship with NASA, we conducted in-depth user experience research and provided comprehensive reports on the usability and effectiveness of various NASA program websites.</p>
              </div>
            </div>
            <div className="box">
              <img src={aimg} alt="Image 2" />
              <div className="box-overlay">
                <h3>Web Applications</h3>
                <p>Utilizing various frameworks, we have designed scalable web-based applications that effectively attract online customers and help achieve primary company goals.</p>
              </div>
            </div>
            <div className="box">
              <img src={sofimg} alt="Image 3" />
              <div className="box-overlay">
                <h3>To Space</h3>
                <p>Experienced in coding flight software for Nano satellites, our team ensures reliable performance and seamless operation in space missions. We deliver tailored software solutions that meet the unique requirements of these advanced satellite systems.</p>
              </div>
            </div>
            <div className="box">
              <img src={aimg2} alt="Image 3" />
              <div className="box-overlay">
                <h3>Softwares</h3>
                <p>With our expertise in AI, we have successfully automated sales calls and integrated multiple APIs to streamline product shipments for an online retail company. Additionally, we have developed efficient payment transaction systems catering to the specific needs of small businesses.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="about-section" style={{ margin: '100px' }}>
          <h2>About Us</h2>
          <p>Welcome to our website! We are a passionate team dedicated to providing high-quality products and excellent customer service.</p>
          <p style={{ textAlign: 'justify', lineHeight: '1.5', letterSpacing: '1px' }}>{customerFocus}</p>
          <div style={{ textAlign: 'justify' }}>
            {randomFacts.map((fact, index) => (
              <p key={index}>{fact}</p>
            ))}
          </div>
        </section>
      </section>
      <footer style={{ backgroundColor: 'black', color: 'white', padding: '20px' }}>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
        <div style={{ maxWidth: '960px', margin: '0 auto', display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <p style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '8px' }}>Contact information:</p>
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

export default About;
