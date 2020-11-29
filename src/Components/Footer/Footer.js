import wave1 from "../../Assets/img/bg/wave1.svg";
import wave2 from "../../Assets/img/bg/wave2.svg";
import wave3 from "../../Assets/img/bg/wave3.svg";

import "./footer.scss";


const Footer = () => {
  return (
    <footer className="yb-main-footer-wrapper">
      <div className="waveHorizontals">
        <div
          id="waveHorizontal1"
          className="waveHorizontal"
          data-uk-img=""
          data-src={wave1}
        ></div>
        <div
          id="waveHorizontal2"
          className="waveHorizontal"
          data-uk-img=""
          data-src={wave2}
        ></div>
        <div
          id="waveHorizontal3"
          className="waveHorizontal"
          data-uk-img=""
          data-src={wave3}
        ></div>
      </div>
      <button
        href="#body-app"
        className="uk-visible@s yb-totop yb-inner-link"
        data-uk-totop=""
      ></button>
      <div className="yb-main-footer">
        <div className="uk-container">
          <div data-uk-grid className="uk-child-width-1-2@s">
            <div className="uk-margin-remove uk-text-left@s">
              &copy; 2020 Atakan Guney.
            </div>
            <div className="uk-margin-remove uk-text-right@s">
              <div className="yb-footer-social">
                <a href="https://github.com/atakanguney">GitHub</a>
                <a href="https://medium.com/@atakanguney94">Medium</a>
                <a href="https://www.facebook.com/atkn1907">Facebook</a>
                <a href="https://www.instagram.com/aatakang/">Instagram</a>
                <a href="https://twitter.com/atakanguney2">Twitter</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
