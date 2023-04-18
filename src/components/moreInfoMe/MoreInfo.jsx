import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import picture from "../../assets/profileImage.jpg";

import "./moreInfo.css";
import { Link } from "react-router-dom";

const MoreInfo = () => {
  const { scrollYProgress } = useScroll();
  const first = useTransform(scrollYProgress, [0, 1], [0, 600]);
  const second = useTransform(scrollYProgress, [0, 1], [0, 400]);
  return (
    <section className="info">
      <div className="back__button">
        <Link to="/">
          <i class="uil uil-angle-left-b"></i>
        </Link>
      </div>
      <div className="info__container">
        <div className="info__me">
          <div className="info__more">
            <img className="info__picture" src={picture} alt="" />
            <span>
              I am a software engineer using a JavaScript tech stack, namely
              MERN stack (MongoDB, Express JS, React JS, and Node JS). I also
              have an interest in user interface and user experience, have some
              experience in design and illustration.
            </span>
          </div>
          <a href="#info__contact">
            Feel free to contact me <i class="uil uil-arrow-up-right"></i>
          </a>
          <div className="info__sosmed">
            <span>Also available on</span>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://wa.me/6282113215440/?text=Hello%20Fachrur"
            >
              WhatsApp <i class="uil uil-arrow-up-right"></i>
            </a>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://instagram.com/fahruul.c"
            >
              Instagram <i class="uil uil-arrow-up-right"></i>
            </a>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://www.linkedin.com/in/fahruul-c"
            >
              LinkedIn <i class="uil uil-arrow-up-right"></i>
            </a>
          </div>
        </div>
        <div className="info__achieve">
          <div className="info__item">
            <h1>Certificate</h1>
            <div className="info__detail">
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://drive.google.com/file/d/19rnhx_DibRpnkFwaBxljR6cNYqEc-2cr/view?usp=share_link"
              >
                Cloud Practitioner Essentials{" "}
                <i class="uil uil-arrow-up-right"></i>
              </a>
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://drive.google.com/file/d/1ScF8zRGMArwRD4_2WxR0tbsIbVehPW5y/view?usp=share_link"
              >
                Learn to Create Back-End Applications for Beginners{" "}
                <i class="uil uil-arrow-up-right"></i>
              </a>
            </div>
          </div>
          <div className="info__item">
            <h1>Experience</h1>
            <div className="info__detail">
              <a target="_blank" rel="noreferrer noopener" href="">
                Intern - IT Support - PT. Parsaoran Global Datatrans{" "}
                <i class="uil uil-arrow-up-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="info__typography">
        <div class="typo__filled">
          <motion.h1
            initial={{ x: -1800 }}
            animate={{ x: 0, transition: { duration: 0.8 } }}
            style={{ x: first }}
            className="info__typo"
          >
            contact <span className="typo__outline">me</span> - contact{" "}
            <span className="typo__outline">me</span> - contact{" "}
            <span className="typo__outline">me</span> - contact{" "}
            <span className="typo__outline">me</span> - contact{" "}
            <span className="typo__outline">me</span> -
          </motion.h1>
        </div>
        <div class="typo__filled">
          <motion.h1
            initial={{ x: -1800 }}
            animate={{ x: 0, transition: { duration: 0.8 } }}
            style={{ x: second }}
            className="info__typo"
          >
            <span className="typo__outline"> contact</span> me -{" "}
            <span className="typo__outline"> contact</span> me -{" "}
            <span className="typo__outline"> contact</span> me -{" "}
            <span className="typo__outline"> contact</span> me -{" "}
            <span className="typo__outline"> contact</span> me -{" "}
            <span className="typo__outline"> contact</span> me -{" "}
            <span className="typo__outline"> contact</span> me -
          </motion.h1>
        </div>
      </div>
    </section>
  );
};

export default MoreInfo;
