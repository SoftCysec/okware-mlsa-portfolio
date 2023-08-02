/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/wp8199094.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "LinkedIn ICP Canister 🎉",
    description:
      "LinkedIn ICP Canister is a decentralized Internet Computer (ICP) canister that implements basic LinkedIn-like functionalities.",
    url: "https://github.com/SoftCysec/LinkedIn-ICP-Canister",
  },
  {
    title: "Livity Movie Shop 🎉",
    description:
      "Livity is a web application for buying and renting the latest movies from your favorite actors and directors.",
    url: "https://github.com/SoftCysec/Livity-Movie-Shop",
  },
  {
    title: "Kenya GIS 🎉",
    description:
      "GeoDjango-Kenya-Counties is a project that provides geographic data for Kenya's counties. It uses GeoDjango, a geographic framework for Django, to create and manage geographic data in a web application.",
    url: "https://github.com/SoftCysec/Geo-Django-Kenya-Counties",
  },
  {
    title: "Disease Prediction using ML 🎉", 
    description:
      "A web app for heart disease prediction, diabetes prediction and breast cancer prediciton using Machine Learning based on the Kaggle Datasets.",
    url: "https://github.com/SoftCysec/Disease_Predict_Django",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;