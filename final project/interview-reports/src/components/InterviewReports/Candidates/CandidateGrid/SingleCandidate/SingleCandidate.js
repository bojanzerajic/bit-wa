import React from "react";
import style from "./SingleCandidate.module.scss";
import { Link } from "react-router-dom";

const SingleCandidate = (props) => {
  return (
    <div className={`col-lg-3 col-md-4 col-sm-6 col-12 ${style.wrapper}`}>
      <Link to={`about-single-candidate/${props.id}`}>
        <img src={props.image} alt="avatar" />
        <h4>{props.name}</h4>
        <p>{props.email}</p>
      </Link>
    </div>
  );
};
export { SingleCandidate };
