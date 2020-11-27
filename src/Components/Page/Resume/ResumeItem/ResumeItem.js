
const ResumeItem = ({t1, t2, d}) => {
    return (
        <div className="yb-resume-item">
            <div className="yb-resume-item-date">
                <div className="yb-resume-item-date-icon"> <span data-uk-icon="calendar"></span></div>
                <div className="yb-resume-item-date-text"><span>{d}</span></div>
            </div>
            <h4 className="yb-section-title">{t1}</h4>
            <strong>{t2}</strong>
            <div className="uk-text-small">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidiei dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud</p>
            </div>
        </div>
    )
};

export default ResumeItem;
