import "./contact.scss";
import empty from "../../Assets/img/empty.png";
import profile2 from "../../Assets/img/profile.jpeg";

const Contact = () => {
  return (
    <section className="yb-section yb-border-top" id="contact">
      <div className="yb-section-point-wrapper">
        <div className="uk-container">
          <div className="yb-section-point ">
            <sup>05</sup>
            <span>Contact</span>
          </div>
        </div>
      </div>
      <div className="uk-container">
        <div data-uk-grid="" className=" uk-grid-divider">
          {/* <div className="yb-section-padding yb-contact-left uk-width-3-4@m">
            <div>
              <h2 className="yb-section-title uk-heading-line ">
                <span>Get in touch</span>
              </h2>
              <p className="uk-text-bold">Feel free to contact me</p>
              <div id="contact-form-alert"></div>
              <form id="contact-form" className="uk-form-stacked">
                <div className="uk-grid uk-grid-small uk-child-width-1-2@s">
                  <div>
                    <div className="uk-margin">
                      <label for="f_email" className="uk-form-label">
                        Email*
                      </label>
                      <div className="uk-form-controls uk-inline uk-width-1-1">
                        <span
                          className="uk-form-icon"
                          data-uk-icon="icon: user"
                        ></span>
                        <input
                          className="yb-input uk-input  uk-border-rounded"
                          type="email"
                          name="f_email"
                          id="f_email"
                          placeholder=" Your email here . . ."
                        />
                      </div>
                      <small
                        className="uk-text-danger err-msg"
                        id="f_email_error"
                      ></small>
                    </div>
                  </div>
                  <div>
                    <div className="uk-margin">
                      <label for="f_phone" className="uk-form-label">
                        Phone*
                      </label>
                      <div className="uk-form-controls uk-inline uk-width-1-1">
                        <span
                          className="uk-form-icon"
                          data-uk-icon="icon: phone"
                        ></span>
                        <input
                          className="yb-input uk-input uk-border-rounded"
                          type="text"
                          name="f_phone"
                          id="f_phone"
                          placeholder=" Your phone here . . ."
                        />
                      </div>
                      <small
                        className="uk-text-danger err-msg"
                        id="f_phone_error"
                      ></small>
                    </div>
                  </div>
                </div>
                <div className="uk-margin">
                  <label className="uk-form-label">Subject*</label>
                  <div className="uk-form-controls uk-grid-small uk-child-width-auto uk-grid">
                    <label>
                      <input
                        className="uk-radio"
                        type="radio"
                        name="f_subject"
                        value="General"
                        checked
                      />
                      General
                    </label>
                    <label>
                      <input
                        className="uk-radio"
                        type="radio"
                        name="f_subject"
                        value="Project Preview"
                      />{" "}
                      Project Review
                    </label>
                    <label>
                      <input
                        className="uk-radio"
                        type="radio"
                        name="f_subject"
                        value="Hire Me"
                      />{" "}
                      Hire Me
                    </label>
                  </div>
                </div>
                <div className="uk-margin ">
                  <label for="f_message" className="uk-form-label">
                    Message*
                  </label>
                  <div className="uk-form-controls">
                    <textarea
                      className="yb-input  uk-textarea uk-border-rounded"
                      rows="7"
                      name="f_message"
                      id="f_message"
                      placeholder="Your message here . . ."
                    ></textarea>
                  </div>
                  <small
                    className="uk-text-danger err-msg"
                    id="f_message_error"
                  ></small>
                </div>
                <div className="uk-margin-top">
                  <button
                    className="uk-button uk-button-primary uk-button-large  yb-btn"
                    type="submit"
                    id="btn-contact-form"
                    data-textreset="Send Now"
                  >
                    <span className="uk-margin-small-right btn-text-wrap">
                      Send Now
                    </span>
                    <span data-uk-icon="arrow-right" className="uk-icon">
                      {" "}
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div> */}
          <div className=" uk-width-2-4@m yb-section-padding yb-contact-left">
            <p className="uk-margin-medium-bottom uk-visible@m">
              <img
                src={empty}
                data-src={profile2}
                width="500"
                height="500"
                data-uk-img=""
                alt=""
                className="uk-border-circle"
              />
            </p>
            <ul className="uk-list uk-list-divider uk-text-small yb-contact-mini">
              <li className="uk-flex uk-flex-middle">
                <a href="mailto:aatakanguney@gmail.com">
                  <span
                    data-uk-icon="mail"
                    className="uk-flex-none uk-text-primary "
                  ></span>
                  <span>aatakanguney@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
