import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import picture from "../../assets/profileImage.jpg";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer__container">
        <div className="footer__main">
          <div className="footer__title">
            <img src={picture} alt="Fachrur Rizhky" />
            <h1>Let's work together!</h1>
          </div>
          <div className="footer__button">
            <Link to="/me">Get in touch</Link>
          </div>
          <div className="footer__contact">
            <a href="mailto:fachrurrizhkyalfadillah@gmail.com">
              fachrurrizhkyalfadillah@gmail.com
            </a>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://wa.me/6282113215440/?text=Hello%20Fachrur"
            >
              +62 821 1321 5440
            </a>
          </div>
        </div>
        <div className="footer__info">
          <div className="footer__section">
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://instagram.com/fahruul.c"
            >
              Instagram
            </a>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://youtube.com/@fahruul.c"
            >
              YouTube
            </a>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://github.com/fahruulc"
            >
              GitHub
            </a>
          </div>
          <div className="footer__section">
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://www.linkedin.com/in/fahruul-c"
            >
              LinkedIn
            </a>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://www.tiktok.com/@fahruul.c"
            >
              TikTok
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
