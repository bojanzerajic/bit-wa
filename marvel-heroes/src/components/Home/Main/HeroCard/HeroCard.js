import React from "react";
import "./HeroCard.scss";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';

const HeroCard = ({ name, avatar, id, addToMyTeam }) => {
  return (
    <div
      className="HeroCard__container col-lg-3 col-md-6 col-sm-6 col-12"
    >
      <h4>{name}</h4>
      <img src={avatar} alt="hero" />
      <div className="HeroCard__buttonWrapper row">
       <Link to={`/info/${id}`}><button className="col-lg-3">Info</button></Link> 
        <button onClick={() => addToMyTeam(id)}  data-id={id} className="col-lg-3">Add</button>
      </div>
    </div>
  );
};
export { HeroCard };

HeroCard.propTypes ={
  name: PropTypes.string,
  avatar: PropTypes.string,
  id: PropTypes.number,
  addToMyTeam: PropTypes.func.isRequired
}