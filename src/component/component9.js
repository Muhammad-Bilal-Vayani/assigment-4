import React from 'react';
import facebookLogo from "../web-assets/assets/img/facebooklogo.png"
import instagramLogo from "../web-assets/assets/img/instagramlogo.avif"
import twitterLogo from "../web-assets/assets/img/twitterlogo.png"

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#f0f0f0', padding: '20px', textAlign: 'center' }}>
      <div>
        <h3>About Us</h3>
        <p>Discover more about our mission and team.</p>
      </div>
      <div>
        <h3>Contact</h3>
        <p>Get in touch with us. We'd love to hear from you!</p>
      </div>
      <div>
        <h3>Terms of Use</h3>
        <p>Read our terms and conditions.</p>
      </div>
      <div>
        <h3>Privacy Policy</h3>
        <p>Learn how we handle your data and privacy.</p>
      </div>
       <div>
        <h3>Follow Us</h3>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={facebookLogo} alt="Facebook" style={{ width: '30px', margin: '0 10px' }} />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={twitterLogo} alt="Twitter" style={{ width: '30px', margin: '0 10px' }} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={instagramLogo} alt="Instagram" style={{ width: '30px', margin: '0 10px' }} />
          </a>
        </div> 
      </div>
    </footer>
  );
};

export { Footer };
