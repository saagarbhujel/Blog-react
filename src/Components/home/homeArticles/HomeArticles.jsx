import React from 'react'
import img from "../../../img/vecteezy_concept-design-news-update-web-landing-page-information-about_6663310.jpg";
import { Link } from 'react-router-dom';
import "../homeArticles/homeArticle.css"

const HomeArticles = () => {
  return (
    <>
      <article className="home-articles">
        <h3 className='home-article-topic'>Featured Articles</h3>

        <div className="articles">
          <div className="article-img">
            <Link to="">
              <img src={img} alt="" />
            </Link>
          </div>
          <div className="article-content">
            <Link to="">
             <p className='title'>Lorem ipsum dolor sit amet.</p>
            </Link>
             <span>
              <h2>Author name</h2>
            </span>
             <span>May 26 | 4 min read</span>
          </div>
        </div>
      </article>
      <hr style={{maxWidth:'70vw', margin:'auto'}}/>
    </>
  );
}

export default HomeArticles