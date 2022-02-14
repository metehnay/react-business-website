import React from "react";
import Header from "./Header";
import commercial from "../commercial.svg";
import webdev from "../webdev.svg";
import "../css/Home.css";
import Services from "./Services";
import { Link } from "react-scroll";
import { Link as Link1 } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="commercial">
          <h2 className="title">
            We build digital solutions for your business
          </h2>
          <p className="desc">
            AvantisNet is a team of highly motivated and skilled developers who
            deliver best and scalable software for your business.
          </p>
          <Link1 to="/contact">
            {" "}
            <button className="btn">Contact Us</button>
          </Link1>
        </div>

        <div className="image">
          <img src={commercial} />
        </div>
      </div>
      <div className="he"></div>

      <div className="second-container">
        <img src={webdev} className="img2" />
        <div className="inside-container">
          <h2 className="title2">
            We're a local GTA IT consulting company that will guide you to your
            success
          </h2>
          <p className="desc2">
            Our team is well vast in software development and is ready to
            develop the applications of your choice.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
