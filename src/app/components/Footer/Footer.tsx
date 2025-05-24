'use client';

import React from 'react';
import './Footer.css';
import { MapPin, Phone, Mail } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Logo and About */}
        <div className="footer-section">
          <div className="logo-wrapper">
            <Image src="/islans.png" alt="Harvest Island Logo" width={150} height={50} />
          </div>
          <p>
            Equipping disciples through biblical education, spiritual formation, and authentic community.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Program</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">Apply Now</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h4>Contact Us</h4>
          <div className="contact-item">
            <MapPin size={16} />
            <span>123 Faith Lane, Harvest Island</span>
          </div>
          <div className="contact-item">
            <Phone size={16} />
            <span>(555) 123-4567</span>
          </div>
          <div className="contact-item">
            <Mail size={16} />
            <span>info@harvestisland.org</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 Harvest Island School of Discipleship. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
