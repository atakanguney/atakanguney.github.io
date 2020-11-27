import React, { useEffect } from "react";

import MainHome from "./MainHome";
import "./main-menu.scss";

import $ from "jquery";

function init_menu_toggle() {
  $(".yb-menu-togggle").on("click", function () {
    $("#body-app").toggleClass("yb-menu-open");
  });

  $("#btn-menu-toggle").on("click", function () {
    $("#main-menu").toggleClass("open-menu");
    return false;
  });

  $("#menucollapse .uk-navbar-nav a").on("click", function () {
    $("#main-menu").toggleClass("open-menu");
  });
}

const MainMenu = () => {
  useEffect(() => {
    init_menu_toggle();
  }, []);
  return (
    <header className="yb-main-header" id="main-header">
      <div className="yb-full-height " id="home">
        <MainHome />
      </div>
      <nav className="yb-main-menu " id="main-menu">
        <div className="uk-container" data-uk-navbar>
          <div className="uk-navbar-left">
            <a className="yb-logo uk-navbar-item uk-logo" href="/">
              <span>Atakan</span>
            </a>
          </div>
          <div className="uk-navbar-right uk-hidden@m">
            <a className="uk-navbar-toggle" href="#" id="btn-menu-toggle">
              <span data-uk-navbar-toggle-icon="" className="yb-icon-menu"></span>
              <span data-uk-icon="close" className="yb-icon-close"></span>
            </a>
          </div>
          <div className="yb-menu-toggle-wrapper" id="menucollapse">
            <div className="uk-navbar-center">
              <ul
                className="uk-navbar-nav"
                data-uk-scrollspy-nav="closest: li; scroll: false; offset: 79 "
              >
                <li>
                  <a className="yb-inner-link" href="#home">
                    {" "}
                    Home{" "}
                  </a>
                </li>
                <li>
                  <a className="yb-inner-link" href="#about">
                    {" "}
                    About
                  </a>
                </li>
                <li>
                  <a className="yb-inner-link" href="#resume">
                    {" "}
                    Resume{" "}
                  </a>
                </li>
                <li>
                  <a className="yb-inner-link" href="#blog">
                    {" "}
                    Blog{" "}
                  </a>
                </li>
                <li>
                  <a className="yb-inner-link" href="#contact">
                    {" "}
                    Contact{" "}
                  </a>
                </li>
              </ul>
            </div>
            <div className="uk-navbar-right">
              <ul className="uk-navbar-nav yb-social-icons">
                <li>
                  <a href="https://www.facebook.com/atkn1907">
                    <span
                      className="uk-icon "
                      data-uk-icon="icon: facebook"
                    ></span>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/aatakang/">
                    <span
                      className="uk-icon"
                      data-uk-icon="icon: instagram"
                    ></span>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/atakanguney2">
                    <span
                      className="uk-icon"
                      data-uk-icon="icon: twitter"
                    ></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default MainMenu;
