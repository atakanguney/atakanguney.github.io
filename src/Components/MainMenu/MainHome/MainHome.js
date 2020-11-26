import "./main-home.scss";
import $ from "jquery";
import { useEffect } from "react";
import Typed from "typed.js";

function init_typed() {
  var $typed = $("#typed");
  if ($typed.length) {
    var typed = new Typed("#typed", {
      strings: ["developer", "freelancer", "engineer", "researcher"],
      loop: true,
      typeSpeed: 70,
    });
  }
}

const MainHome = () => {
  useEffect(() => {
    init_typed();
  }, []);
  return (
    <section className="yb-profile-desc">
      <div
        className="yb-section-point-wrapper"
        data-uk-parallax="opacity: 1, 0;"
      >
        <div className="uk-container">
          <div className="yb-section-point">
            <sup>01</sup>
            <span>welcome</span>
          </div>
        </div>
      </div>
      <div className="yb-graphics">
        <div className="yb-graphic-1" data-uk-parallax="blur: 0,30;"></div>
        <div className="yb-graphic-2" data-uk-parallax="blur: 0,30;"></div>
      </div>
      <div className="uk-container uk-text-center yb-profile-desc-wrap uk-position-relative">
        <img src="src/img/x1.png" alt="" width="60" />
        <h1 className="uk-text-bold yb-gradient-text">
          <span>Atakan</span> <span>Güney</span>
        </h1>
        <div className="uk-text-bold yb-myjob">
          Im a <span id="typed" className="typed"></span>
        </div>
      </div>
    </section>
  );
};

export default MainHome;
