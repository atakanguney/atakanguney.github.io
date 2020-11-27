const ResumeLineItem = ({ title, pre }) => {
  return (
    <div className="yb-resume-skill-item">
      <h5>
        {title}{" "}
        <small className="uk-float-right uk-text-bold uk-visible@s">
          {pre}%
        </small>
      </h5>
      <progress className="uk-progress" value={pre} max="100"></progress>
    </div>
  );
};

export default ResumeLineItem;
