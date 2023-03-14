import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer>
      <div className="social-links">
        <a href="https://github.com"><FaGithub size={24} /></a>
        <a href="https://linkedin.com"><FaLinkedin size={24} /></a>
        <a href="https://twitter.com"><FaTwitter size={24} /></a>
      </div>
    </footer>
  );
}

export default Footer;
