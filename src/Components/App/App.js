import { useEffect } from "react";
import $ from "jquery";
import UIkit from "uikit";

import "./app.scss";

import PageLoader from "../PageLoader";
import MainMenu from "../MainMenu";
import Page from "../Page";
import "jquery.easing";

var is_scroll = false;
var is_resize = false;
var myscroll, myresize;

function init_full_height() {
  if (!is_resize) {
    let vh = window.innerHeight * 0.01;
    $(":root").css("--vh", vh + "px");
  }
}

function init_inner_link() {
  $(".yb-inner-link").on("click", function() {
    var $el = $(this).attr("href");
    var ofsset = parseInt($(this).attr("data-offset"));
    if ($($el).length) {
      ofsset = ofsset > 0 ? ofsset : 79;
      init_scroll_to($($el), 1500, ofsset);
      return false;
    }
  });
}

function init_scroll_to($el, speed, offset) {
  $("html, body").animate(
    {
      scrollTop: $el.offset().top - offset
    },
    {
      duration: speed,
      easing: "easeInOutExpo"
    }
  );
}

function init_scroll() {
  if (!is_resize) {
    var window_height =
      $("#main-header").height() - ($("#main-menu").height() + 1);
    var current_scroll = Math.round($(window).scrollTop());
    if (current_scroll >= window_height) {
      $("#main-menu").addClass("fixed");
    } else {
      $("#main-menu").removeClass("fixed");
    }
  }
}

function init_update_uikit() {
  //sometimes sticky nav oveflow
  if (!is_scroll) {
    if ($("#resume-nav-wrapper").length) {
      UIkit.update($("#resume-nav-wrapper"), "update");
    }

    if ($("#portfolio-nav-wrapper").length) {
      UIkit.update($("#portfolio-nav-wrapper"), "update");
    }
  }
}

const App = () => {
  useEffect(() => {
    //Run function when window on scroll

    const handleScroll = () => {
      init_scroll();
      is_scroll = true;
      clearTimeout(myscroll);
      myscroll = setTimeout(function () {
        is_scroll = false;
        init_update_uikit();
      }, 300);
    };

    window.addEventListener("scroll", handleScroll);

    //Run function when window on resize
    $(window).on("resize", function () {
      is_resize = true;
      clearTimeout(myresize);
      myresize = setTimeout(function () {
        is_resize = false;
        init_full_height();
        init_scroll();
      }, 300);
    });

    init_full_height();
    init_inner_link();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <PageLoader />
      <MainMenu />
      <main>
        <Page />
      </main>
    </div>
  );
};

export default App;
