import React from "react";
import "./Comics.scss";

const Comics = ({ title, image, display }) => {
  return (
    <div id="Comics__comic-book-wrapper" className="col-lg-2">
      <div className={`${display ? "displayComics" : "hideComics"}`}>
        <p className="col-lg-12 col-md-12 col-sm-12 col-12">{title}</p>
        <img alt="Hero comic" src={image} />
      </div>
    </div>
  );
};
export default Comics;
