import axios from "axios";
import { useEffect, useState } from "react";
import BlogItem from "./BlogItem";

import "./blog.scss";

const RSS2JSON_API = "https://api.rss2json.com/v1/api.json";
const mediumUsername = "atakanguney94";
const mediumURL = `https://medium.com/feed/@${mediumUsername}`;

const Blog = () => {
  const [blogItems, setBlogItems] = useState([]);

  useEffect(() => {
    axios
      .get(RSS2JSON_API, {
        params: {
          rss_url: mediumURL,
        },
      })
      .then((response) => {
        let data = response.data;
        if (data.status === "ok") {
          setBlogItems(response.data.items);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //   return <p>{JSON.stringify(blogItems)}</p>;
  return (
    <section className="yb-section yb-section-padding" id="blog">
      <div className="yb-section-point-wrapper">
        <div className="uk-container">
          <div className="yb-section-point">
            <sup>04</sup>
            <span>Blog</span>
          </div>
        </div>
      </div>
      <div className="uk-container">
        <h2 className="yb-section-title uk-heading-line">
          <span>Latest News</span>
        </h2>

        <div
          data-uk-grid
          className="uk-grid-medium yb-margin-top-1 yb-margin-bottom-2"
        >
          {blogItems &&
            blogItems.map((item, index) => (
              <div className="uk-width-1-3@m uk-width-1-2@s" key={index}>
                <BlogItem {...item}/>
              </div>
            ))}
        </div>

        <h5 className="uk-heading-line uk-text-right uk-text-bold">
          <a href="https://medium.com/@atakanguney94" target="_blank" className="uk-link-heading" rel="noreferrer">
            See More
            <span data-uk-icon="icon:arrow-right; ratio: 2"></span>
          </a>
        </h5>
      </div>
    </section>
  );
};

export default Blog;
