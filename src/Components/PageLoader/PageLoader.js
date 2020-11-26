import React, { useEffect } from "react";
import "./page-loader.scss";
import $ from "jquery";


function init_pageloader() {
  var $pageloader = $("#pageloader");
  setTimeout(function () {
    $pageloader.addClass("uk-transition-fade");
    setTimeout(function () {
      $pageloader.addClass("page-is-loaded");
      init_check_hash_url();
    }, 400);
  }, 300);
}

function init_check_hash_url() {
  if (
    window.location.hash &&
    window.location.hash !== "" &&
    $(window.location.hash).length
  ) {
    var speed = window.location.hash === "#home" ? 0 : 700;
    console.log(window.location.hash);
    init_scroll_to($(window.location.hash), speed, 79);
  }
}

function init_scroll_to($el, speed, offset) {
  $("html, body").animate(
    {
      scrollTop: $el.offset().top - offset,
    },
    {
      duration: speed,
      easing: "easeInOutExpo",
    }
  );
}

const PageLoader = () => {
  useEffect(() => {
    init_pageloader()
  }, [])

  return (
    <div id="pageloader" className="yb-pageloader-wrapper">
      <div className="uk-position-center  uk-text-center">
        <div data-uk-spinner></div>
      </div>
    </div>
  );
};

export default PageLoader;
