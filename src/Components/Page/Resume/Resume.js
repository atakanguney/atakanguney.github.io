import ResumeItem from "./ResumeItem";
import ResumeCircleItem from "./ResumeCircleItem";
import ResumeLineItem from "./ResumeLineItem";

import bg2 from "../../../Assets/img/bg/bg2.jpg";
import resume from "../../../Assets/pdf/atakan_guney_resume.pdf";

import "./resume.scss";

const Resume = () => {
  return (
    <section className="yb-section" id="resume">
      <div className="yb-section-point-wrapper">
        <div className="uk-container">
          <div className="yb-section-point">
            <sup>03</sup>
            <span>Resume</span>
          </div>
        </div>
      </div>
      <div className="uk-container">
        <div data-uk-grid="" className="uk-grid-divider">
          <div
            className="uk-width-1-4@s uk-visible@s uk-margin-large-bottom yb-section-padding-top"
            id="resume-nav-wrapper"
          >
            <div data-uk-sticky="bottom: #resume-nav-wrapper; offset: 100; media: 650">
              <ul
                className="yb-nav-left uk-tab-left uk-tab"
                data-uk-scrollspy-nav="closest: li; scroll: false; offset: 120"
              >
                <li className="uk-active">
                  <a
                    href="#education"
                    className="yb-inner-link"
                    data-offset="120"
                  >
                    <span data-uk-icon="minus"></span>
                    Education
                  </a>
                </li>
                <li>
                  <a
                    href="#experience"
                    className="yb-inner-link"
                    data-offset="120"
                  >
                    <span data-uk-icon="minus"></span>
                    Experience
                  </a>
                </li>
                <li>
                  <a href="#skills" className="yb-inner-link" data-offset="120">
                    <span data-uk-icon="minus"></span>
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="#awwwards"
                    className="yb-inner-link"
                    data-offset="120"
                  >
                    <span data-uk-icon="minus"></span>
                    Awards
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="uk-width-expand@s yb-section-padding-top">
            <div>
              <h2 className="yb-section-title uk-heading-line" id="education">
                <span>Education</span>
              </h2>
              <div className="yb-resume-list">
                <ul className="uk-list uk-list-large uk-list-divider">
                  <li>
                    <ResumeItem
                      t1="Master of Science in Computer Enginnering"
                      t2="Boğaziçi University"
                      d="2018 - present"
                    />
                  </li>
                  <li>
                    <ResumeItem
                      t1="Bachelor of Science in Computer Engineering"
                      t2="Boğaziçi University"
                      d="2013 - 2018"
                    />
                  </li>
                  <li>
                    <ResumeItem
                      t1="Bachelor of Science in Mathematics"
                      t2="Boğaziçi University"
                      d="2015 - 2018"
                    />
                  </li>
                  <li>
                    <ResumeItem
                      t1="Exchange Student in ECE"
                      t2="University of Texas at Austin"
                      d="2017 Spring"
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h2
                className="yb-section-title  uk-heading-line "
                id="experience"
              >
                <span>Experience</span>
              </h2>
              <div className="yb-resume-list">
                <ul className="uk-list uk-list-large uk-list-divider">
                  <li>
                    <ResumeItem
                      t1="Software Engineer"
                      t2="Upwork"
                      d="October 2020 - Present"
                    />
                  </li>
                  <li>
                    <ResumeItem
                      t1="Machine Learning Engineer(Freelancer)"
                      t2="CustomerFirst AI"
                      d="March 2020 - July 2020"
                    />
                  </li>
                  <li>
                    <ResumeItem
                      t1="Machine Learning Engineer(Freelancer)"
                      t2="Tria AI"
                      d="January 2020 - March 2020"
                    />
                  </li>
                  <li>
                    <ResumeItem
                      t1="Machine Learning Engineer"
                      t2="Dcipher Analytics"
                      d="July 2018 - May 2019"
                    />
                  </li>
                  <li>
                    <ResumeItem
                      t1="Software Engineer"
                      t2="Matriks Bilgi Dağıtım Hiz."
                      d="July 2017 - June 2017"
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h2 className="yb-section-title  uk-heading-line " id="skills">
                <span>Skills</span>
              </h2>
              <div className="yb-margin-top-1 yb-margin-bottom-2">
                <div
                  className="uk-grid-collapse  uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m uk-text-center"
                  data-uk-grid=""
                >
                <div className="yb-bg-soft">
                    <ResumeCircleItem title="Python" v="1" r="100" />
                  </div>
                  <div className="yb-bg-soft">
                    <ResumeCircleItem title="Java" v="0.9" r="90" />
                  </div>
                  <div>
                    <ResumeCircleItem title="HTML" v="0.9" r="90" />
                  </div>
                  <div className="yb-bg-soft">
                    <ResumeCircleItem title="C/C++" v="0.8" r="80" />
                  </div>
                  <div className="yb-bg-soft">
                    <ResumeCircleItem title="JavaScript" v="0.9" r="90" />
                  </div>
                  <div className="yb-bg-soft">
                    <ResumeCircleItem title="Apache Spark" v="0.8" r="80" />
                  </div>
                  <div className="yb-bg-soft">
                    <ResumeCircleItem title="TensorFlow" v="0.8" r="80" />
                  </div>
                  <div>
                    <ResumeCircleItem title="React" v="0.9" r="90" />
                  </div>
                  <div>
                    <ResumeCircleItem title="Vue" v="0.8" r="80" />
                  </div>
                  <div>
                    <ResumeCircleItem title="Django" v="0.7" r="70" />
                  </div>
                  <div>
                    <ResumeCircleItem title="Laravel" v="0.9" r="90" />
                  </div>
                  <div>
                    <ResumeCircleItem title="Git" v="0.9" r="90" />
                  </div>
                </div>
                <div data-uk-grid className="uk-child-width-1-2">
                  <div>
                    <h4 className="yb-section-title">Soft Skills</h4>
                    <ul className="uk-list uk-list-large  uk-list-divider">
                      <li>
                        <ResumeLineItem title="Problem Solving" pre="100" />
                      </li>
                      <li>
                        <ResumeLineItem title="Creativity" pre="90" />
                      </li>
                      <li>
                        <ResumeLineItem title="Time Management" pre="80" />
                      </li>
                      <li>
                        <ResumeLineItem title="Team Work" pre="90" />
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="yb-section-title">Language </h4>
                    <ul className="uk-list uk-list-large uk-list-divider">
                      <li>
                        <ResumeLineItem title="English" pre="100" />
                      </li>
                      <li>
                        <ResumeLineItem title="German" pre="70" />
                      </li>
                      <li>
                        <ResumeLineItem title="Turkish" pre="100" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="yb-section-title  uk-heading-line " id="awwwards">
                <span>Awards</span>
              </h2>
              <div className="yb-resume-list">
                <ul className="uk-list uk-list-large uk-list-divider">
                  <li>
                    <ResumeItem
                      t1="3rd Place"
                      t2="Bogazici University, CMPE Department"
                      d="2018 - 2019"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="yb-section yb-section-padding uk-background-cover uk-background-fixed "
        data-uk-parallax="bgy: -200"
        data-src={bg2}
        data-uk-img=""
      >
        <div className="yb-overlay-primary uk-position-cover"></div>
        <div className="uk-container uk-text-center uk-position-relative">
          <div data-uk-grid className="uk-grid-small  uk-flex-center">
            <div>
              <a
                href={resume}
                className=" yb-btn uk-button uk-button-primary uk-button-large"
              >
                Download CV
              </a>
            </div>
            <div>
              <a
                href="#contact"
                className="yb-inner-link yb-btn uk-button uk-button-danger  uk-button-large"
              >
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
