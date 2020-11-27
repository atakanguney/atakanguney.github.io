import { useEffect } from "react";

import $ from "jquery";
import "jquery-circle-progress";

function init_chart_circle() {
  $(".circle-progress").each(function (i, el) {
    var $el = $(el);
    $($el).circleProgress({
      value: $el.data("value"),
    });
  });
}

const ResumeCircleItem = ({ r, title, v }) => {
  useEffect(() => {
    init_chart_circle();
  }, []);
  return (
    <div className="yb-box-circle">
      <div className="circle-progress" data-value={v}>
        <strong>
          {r}
          <i>%</i>
        </strong>
      </div>
      <h5 className="yb-box-circle-title">{title}</h5>
    </div>
  );
};

export default ResumeCircleItem;
