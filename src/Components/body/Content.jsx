import React from 'react'
import img from "../../img/vecteezy_team-enter-optimization-seo-ideas-for-blog-and-web-content_.jpeg"
import "./content.css"

const Content = () => {
  return (
    <>
      <h1 className="heading">SEWANUNG</h1>
      <section className="content">
        <div className="content-left">
          <p className="description">
            Welcome to our blog website! We are a community of writers and
            experts who are passionate about sharing our knowledge and insights
            on a wide range of topics. Our blog covers everything from lifestyle
            and travel to technology and business, with the aim of providing our
            readers with valuable and engaging content.
            <br />
            <br />
            We believe that everyone deserves access to quality information, and
            our blog is dedicated to making that happen. We aim to create a
            space where people can come together to learn, share ideas, and
            connect with others who are interested in the same topics.
            <br />
            <br />
            Whether you're looking for practical tips and advice or just want to
            stay up-to-date on the latest trends and developments, we've got you
            covered. Our team of writers and contributors are dedicated to
            providing you with informative, engaging, and thought-provoking
            content that you won't find anywhere else.
            <br />
            <br />
            So take a look around, explore our articles, and join the
            conversation. We're excited to have you here!
          </p>
        </div>
        <div className="content-right">
          <img src={img} alt="image" />
        </div>
      </section>
      <hr style={{maxWidth:'70vw', margin:'auto'}} />
    </>
  );
}

export default Content