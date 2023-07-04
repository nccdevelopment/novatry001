import React, { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImage from '../logo.png';
import video from '../ser1.mp4';
import webimg from '../web.jpg';
import sofimg from '../soft.jpg';
import aimg from '../ai.jpg';


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

function Service() {
  const location = useLocation();
  const [typedText, setTypedText] = useState('');
  const [boxWidth, setBoxWidth] = useState(0);
  const boxRef = useRef(null);

  const messages = ["NovaCore Services", "Let’s build something extraordinary together", "Technology meets design"];
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
    'At our company, we are dedicated to delivering the best possible product and ensuring customer satisfaction. We prioritize the needs and expectations of our clients, striving to exceed their expectations with every project. We believe in the power of effective communication and collaboration, working closely with our clients to understand their vision, goals, and requirements.';

  const servicesOffered =
    "Our team of skilled website developers goes the extra mile to ensure that each project is meticulously crafted, paying attention to detail and focusing on quality. We are committed to delivering websites that not only meet our clients' specifications but also resonate with their target audience. From the initial concept to the final launch, we take pride in our work and constantly strive for excellence.";

  const customerFocus =
    "We understand that every business is unique, and we tailor our approach accordingly. By carefully listening to our clients' needs and objectives, we can create customized solutions that align with their brand identity and values. Through regular communication and collaboration, we keep our clients involved in the development process, seeking their feedback and making necessary adjustments to ensure their satisfaction.";

  const experience =
  "Our dedication to continuous improvement drives us to stay updated with the latest industry trends and technologies. We invest in ongoing training and development for our team, equipping them with the knowledge and skills necessary to deliver cutting-edge websites. By leveraging innovative tools and techniques, we create digital experiences that captivate and engage users, leaving a lasting impression.";
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
      <section style={{ backgroundColor: '#333333', color: 'white', padding: '60px' }}>
      <h2>Services</h2>
        <section id="content-section" style={{ padding: '10px' }}>
          <div className="box-container">
            <div className="box">
              <img src={webimg} alt="Image 1" />
              <div className="box-overlay">
                <h3>Website Development</h3>
                <p>Website development is a crucial aspect of establishing a strong online presence. It encompasses the process of designing, building, and maintaining websites that are visually appealing, user-friendly, and technically robust. From crafting engaging user interfaces to implementing responsive designs, website developers utilize programming languages, frameworks, and content management systems to bring ideas to life on the digital platform.</p>
              </div>
            </div>
            <div className="box">
              <img src={sofimg} alt="Image 3" />
              <div className="box-overlay">
                <h3>Software Development</h3>
                <p>Software development is a vital field that involves designing, coding, testing, and maintaining software systems to meet user requirements. It drives innovation, empowers businesses, and leverages technologies like AI and cloud computing to create transformative digital solutions. Collaboration, problem-solving, and continuous learning are key aspects of this dynamic and ever-evolving field.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="about-section" style={{ margin: '40px' }}>
          <h2>Our Service</h2>
          <p>At our company, we are dedicated to delivering the best possible product and ensuring customer satisfaction. We prioritize the needs and expectations of our clients, striving to exceed their expectations with every project. We believe in the power of effective communication and collaboration, working closely with our clients to understand their vision, goals, and requirements.
          Our team of skilled website developers goes the extra mile to ensure that each project is meticulously crafted, paying attention to detail and focusing on quality. We are committed to delivering websites that not only meet our clients' specifications but also resonate with their target audience. From the initial concept to the final launch, we take pride in our work and constantly strive for excellence.
          We understand that every business is unique, and we tailor our approach accordingly. By carefully listening to our clients' needs and objectives, we can create customized solutions that align with their brand identity and values. Through regular communication and collaboration, we keep our clients involved in the development process, seeking their feedback and making necessary adjustments to ensure their satisfaction.
          Our dedication to continuous improvement drives us to stay updated with the latest industry trends and technologies. We invest in ongoing training and development for our team, equipping them with the knowledge and skills necessary to deliver cutting-edge websites. By leveraging innovative tools and techniques, we create digital experiences that captivate and engage users, leaving a lasting impression.
          </p>
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
            <p style={{ marginBottom: '4px' }}>Phone: <a href="tel:(516)-591-6352" style={{ color: 'gold' }}>(516)-591-6352</a></p>
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

export default Service;
