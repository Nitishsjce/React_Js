import React from 'react'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaPinterest } from "react-icons/fa";
import '../../css_organic/css_footer_organic/Footer.css'

function Footer() {
  return (
    <footer className="footer">
    <div className="footer-container">
      {/* About Agriculture Section */}
      <div className="footer-section">
        <h2 className="footer-title">About Agriculture</h2>
        <p>
          The Agriculture, Farmers ************************************* ******************
          **********************************************************************************
          **********************************************************************************
         ***********************************************************************************
        </p>
      </div>

      {/* Important Links Section */}
      <div className="footer-section">
        <h2 className="footer-title">Important Links</h2>
        <ul className="footer-links">
          {[
            "Terms & Conditions",
            "Privacy Policy",
            "Copyright Policy",
            "Hyperlinking Policy",
            "Accessibility Statement",
            "Disclaimer",
            "Help",
          ].map((link, index) => (
            <li key={index} className="footer-link">
              + {link}
            </li>
          ))}
        </ul>
      </div>

      {/* Get in Touch Section */}
      <div className="footer-section">
        <h2 className="footer-title">Get In Touch</h2>
        <ul className="footer-contact">
          <li>
            <FaMapMarkerAlt className="footer-icon" /> Home Address
            Vijaynagar,Sagara,Karnataka-577401
          </li>
          <li>
            <FaPhoneAlt className="footer-icon" /> 8277037756
          </li>
          <li>
            <FaEnvelope className="footer-icon" /> nitish24sep@gmail.com
          </li>
        </ul>
        {/* Social Media Icons */}
        <div className="footer-social">
          <FaFacebook className="social-icon" />
          <FaTwitter className="social-icon" />
          <FaYoutube className="social-icon" />
          <FaInstagram className="social-icon" />
          <FaPinterest className="social-icon" />
        </div>
      </div>
    </div>

      </footer>
  )
}

export default Footer