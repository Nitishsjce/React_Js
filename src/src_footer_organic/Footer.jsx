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
          The Agriculture, Farmers Welfare and Co-operation Department of Gujarat Govt. takes
          care of agriculture and related matters in its charge like horticulture, soil
          conservation, dairy development, animal husbandry, and formation of policies/schemes in
          co-operative activities as well as implementation, monitoring, and supervision.
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
            <FaMapMarkerAlt className="footer-icon" /> Block No. 5, First floor, New Sachivalaya,
            Gandhinagar, Gujarat
          </li>
          <li>
            <FaPhoneAlt className="footer-icon" /> 079-23250802
          </li>
          <li>
            <FaEnvelope className="footer-icon" /> secagri[at]gujarat[dot]gov[dot]in
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