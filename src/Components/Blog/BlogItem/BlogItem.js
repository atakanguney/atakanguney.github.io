const BlogItem = ({ title, pubDate, categories, link, thumbnail }) => {
  const handleDate = (date) => {
    const newDate = new Date(date);
    return newDate.toLocaleDateString();
  };

  return (
    <a href={link} target="_blank" rel="noreferrer">
      <div
        className="yb-blog-item uk-background-cover"
        data-src={thumbnail}
        data-uk-img=""
      >
        <div className="uk-overlay uk-position-cover"> </div>
        <div className="uk-overlay uk-position-top">
          <span className="uk-badge">{categories && categories.length > 0 && categories[0]}</span>
        </div>
        <div className="uk-overlay uk-position-bottom">
          <h5 className="yb-blog-item-title uk-text-truncate">{title}</h5>
          <div className="yb-blog-item-meta">
            <div>
              <span>{handleDate(pubDate)}</span>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default BlogItem;
