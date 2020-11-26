import React, { useEffect, useState } from "react";
import "./page-loader.scss";
import $ from "jquery";


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

  const [pageLoaderClass, setPageLoaderClass] = useState(["yb-pageloader-wrapper"]);

  useEffect(() => {
    let timer2 = "";
    const timer1 = setTimeout(function () {
      setPageLoaderClass(p => [...p, "uk-transition-fade"])
      timer2 = setTimeout(function () {
        setPageLoaderClass(p => [...p, "page-is-loader"])
        init_check_hash_url();
      }, 400);
    }, 300);

    return () => {
      clearTimeout(timer1);
      if (timer2 !== "") {
        clearTimeout(timer2);
      }
    };
  }, []);

  return (
    <div id="pageloader" className={pageLoaderClass.join(" ")}>
      <div className="uk-position-center  uk-text-center">
        <div data-uk-spinner></div>
      </div>
    </div>
  );
};

export default PageLoader;
