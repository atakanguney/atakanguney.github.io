import React from "react";

import "./about.scss";

import profile from "../../../Assets/img/profile.jpg";

const About = () => {
  return (
    <section id="about" className="yb-section">
      <div className="yb-my-profile">
        <div className="uk-container">
          <div
            className="uk-grid-collapse uk-child-width-expand@m"
            data-uk-grid=""
          >
            <div className="uk-first-column">
              <div
                className="yb-my-profile-img uk-background-cover uk-background-norepeat uk-background-top-center"
                data-src={profile}
                data-uk-img=""
                data-uk-lightbox=""
              >
                <a
                  href="https://www.youtube.com/watch?v=uQBL7pSAXR8"
                  className="yb-my-intro"
                >
                  <span data-uk-icon="icon: play; ratio: 2"></span>
                  <span className="yb-my-intro-text">Introduction</span>
                </a>
              </div>
            </div>
            <div>
              <div className="yb-my-profile-desc">
                <div className="yb-section-point-wrapper">
                  <div className="yb-section-point right">
                    <sup>02</sup>
                    <span>About</span>
                  </div>
                </div>
                <div className="yb-my-profile-desc-top">
                  <h2 className="yb-section-title">Hello There!</h2>
                  <p>
                    I discovered my passion for design when I was a sophomore in
                    High School; It was then when it became clear what I wanted
                    to do for a living. I pursued my career at the amazing
                    Valencia College where I started my major in Print Design. A
                    year later I took a begginer’s Web className, where I
                    discovered the love for code. After that, I switched my
                    major to Interactive Design and started the never-ending
                    journey of becoming a web developer along with sharpening my
                    eye for design.
                  </p>
                </div>
                <div className="yb-my-profile-desc-bottom yb-bg-soft">
                  <ul className="yb-my-profile-desc-info uk-list">
                    <li>
                      <span>Birthdate</span> : 09/11/1990
                    </li>
                    <li>
                      <span>Skype</span> : my.username
                    </li>
                    <li>
                      <span>Phone</span> : + 123-456-789-426
                    </li>
                    <li>
                      <span>Email</span> : get.someone@gmail.com
                    </li>
                    <li>
                      <span>Website</span> : www.creativedomain.com
                    </li>
                    <li>
                      <span>Addresses</span> : Collins Street West Victoria 8007
                      Australia
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="yb-border-top yb-border-bottom ">
        <div className="uk-container">
          <div
            data-uk-grid
            className="yb-box-services uk-child-width-1-4@l uk-child-width-1-2 uk-text-center uk-grid-divider"
          >
            <div>
              <div className="yb-box-service">
                <span
                  className="uk-icon"
                  data-uk-icon="icon: laptop; ratio: 1.5"
                ></span>
                <h5>Web Developer</h5>
              </div>
            </div>
            <div>
              <div className="yb-box-service">
                <span
                  className="uk-icon"
                  data-uk-icon="icon: paint-bucket; ratio: 1.5"
                ></span>
                <h5>Web Designer</h5>
              </div>
            </div>
            <div>
              <div className="yb-box-service">
                <span
                  className="uk-icon"
                  data-uk-icon="icon: world; ratio: 1.5"
                ></span>
                <h5>Web Marketer</h5>
              </div>
            </div>
            <div>
              <div className="yb-box-service">
                <span
                  className="uk-icon"
                  data-uk-icon="icon: settings; ratio: 1.5"
                ></span>
                <h5>Web Tester</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
