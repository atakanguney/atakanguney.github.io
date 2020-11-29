const ResumeItem = ({ t1, t2, d, description }) => {
  return (
    <div className="yb-resume-item">
      <div className="yb-resume-item-date">
        <div className="yb-resume-item-date-icon">
          {" "}
          <span data-uk-icon="calendar"></span>
        </div>
        <div className="yb-resume-item-date-text">
          <span>{d}</span>
        </div>
      </div>
      <h4 className="yb-section-title">{t1}</h4>
      <strong>{t2}</strong>
      {description && (
        <div className="uk-text-small">
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};

export default ResumeItem;
