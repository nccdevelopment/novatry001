import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import logoImage from '../logo.png';
import video from '../try22.mp4';
import { Link, useLocation } from 'react-router-dom';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_j1eb0nd', 'template_fwm8xe9', form.current, 'F8gbuM0ZuIlNyDwrA')
      .then((result) => {
        console.log(result.text);
      })
      .catch((error) => {
        console.log(error.text);
      });

    // Reset the form fields after sending the email
    form.current.reset();
  };

  const location = useLocation();

  return (
    <div className="page-container">
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
      <section id="contact">
        <div className="contact-container">
          <div className="centered-box">
            <h2>Contact Us</h2>
            <form ref={form} onSubmit={sendEmail}>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="from_name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="to_name" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone:</label>
                <input type="tel" id="phone" name="user_phone" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" required></textarea>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </section>
      <video autoPlay loop muted className="background-video">
        <source src={video} type="video/mp4" />
      </video>
      <footer style={{ backgroundColor: 'black', color: 'white', padding: '0.5px', position: 'fixed', bottom: '0', width: '100%' }}>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
        <div style={{ maxWidth: '960px', margin: '0 auto', display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <p style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '8px' }}>Contact information:</p>
            <p style={{ marginBottom: '4px' }}>
              Phone: <a href="tel:(516)-591-6352" style={{ color: 'gold' }}>(516)-591-6352</a>
            </p>
            <p style={{ marginBottom: '4px' }}>
              Email: <a href="mailto:novacore@novacoreconsulting.com" style={{ color: 'gold' }}>novacore@novacoreconsulting.com</a>
            </p>
          </div>
          <div>
            <p>Follow us on social media:</p>
            <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', alignItems: 'center' }}>
              <li>
                <a href="https://www.facebook.com/profile.php?id=100094114370679">
                  <i className="fab fa-facebook social-icon" style={{ color: 'gold', fontSize: '24px', marginRight: '15px' }}></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/CoreNovacore">
                  <i className="fab fa-twitter social-icon" style={{ color: 'gold', fontSize: '24px', marginRight: '15px' }}></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/novacoretc/">
                  <i className="fab fa-instagram social-icon" style={{ color: 'gold', fontSize: '24px', marginRight: '15px' }}></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};
