import React from "react";
import "./MyTeamHeroCard.scss";
import { GrTrash } from "react-icons/gr";
import PropTypes from "prop-types";

class MyTeamHeroCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="row">
        <div
          className="MyTeamHeroCard__container col-lg-12"
          onClick={() => this.props.remove(this.props.id)}
        >
          <img className="col-lg-3" src={this.props.avatar} alt="bla bla" />
          <p className="col-lg-9">{this.props.name}</p>
          <span className="delete">
            <GrTrash />
          </span>
        </div>
      </div>
    );
  }
}
export { MyTeamHeroCard };

MyTeamHeroCard.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  remove: PropTypes.func.isRequired,
  id: PropTypes.number,
};
