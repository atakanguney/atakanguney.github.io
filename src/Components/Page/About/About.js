import React from "react";

import "./about.scss";

import profile from "../../../Assets/img/profile.jpeg";

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
                {/* <a
                  href="https://www.youtube.com/watch?v=uQBL7pSAXR8"
                  className="yb-my-intro"
                >
                  <span data-uk-icon="icon: play; ratio: 2"></span>
                  <span className="yb-my-intro-text">Introduction</span>
                </a> */}
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
                    I discovered my passion to machine learning in my sophomore year at collage.
                    Since then, I have worked on plenty of projects to advance my skills. Currently,
                     I am pursuing a Ms degree in computer engineering, especially in the field of natural language processing.
                     My research interests consist of NLP, Deep Reinforcement Learning, Bayesian Deep Learning, Computer Vision with Deep Learning,
                     basically I am interested in any fields of deep learning.
                  </p>
                  <p>
                    My interest in the field is twofold, both theory and practive. Thus, I improved myself with the best practice technologies for developing and serving models.
                    I am mostly comfortable with TensorFlow for developing models and for serving my models I prefer Amazon SageMaker.
                  </p>
                  <p>
                    Besides my research and work in Machine Learning and AI, I also enjoy to develop web and mobile applications.
                    To improve my application development skills, I follow up-to-date technologies for different platforms. For single page applications,
                    I have been learning React, React-Native, Vue, and for the backend and full-stack development I am constantly learning django(python) and laravel(php) frameworks.
                    As technologies improve, I also adapt my applications via serverless frameworks. I develop projects with Firebase, and AWS Lambda and Amplify, too.
                  </p>
                </div>
                <div className="yb-my-profile-desc-bottom yb-bg-soft">
                  <ul className="yb-my-profile-desc-info uk-list">
                    <li>
                      <span>Birthdate</span> : 04/05/1994
                    </li>
                    <li>
                      <span>Phone</span> : + 90-539-325-7485
                    </li>
                    <li>
                      <span>Email</span> : aatakanguney@gmail.com
                    </li>
                    <li>
                      <span>Website</span> : atakanguney.github.io
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
                  data-uk-icon="icon: search; ratio: 1.5"
                ></span>
                <h5>Machine Learning Researcher</h5>
              </div>
            </div>
            <div>
              <div className="yb-box-service">
                <span
                  className="uk-icon"
                  data-uk-icon="icon: laptop; ratio: 1.5"
                ></span>
                <h5>Deep Learning Engineer</h5>
              </div>
            </div>
            <div>
              <div className="yb-box-service">
                <span
                  className="uk-icon"
                  data-uk-icon="icon: world; ratio: 1.5"
                ></span>
                <h5>Web Developer</h5>
              </div>
            </div>
            <div>
              <div className="yb-box-service">
                <span
                  className="uk-icon"
                  data-uk-icon="icon: database; ratio: 1.5"
                ></span>
                <h5>Data Engineer</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
