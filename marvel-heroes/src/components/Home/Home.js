import React from "react";
import HeroService from "../../services/HeroService";
import { Search } from "./Search/Search";
import { Main } from "./Main/Main";

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      heroes: [],
      filteredHeroes: [],
    };
  }

  componentDidMount() {
    HeroService.fetchAll().then((heroes) => {
      this.setState({ heroes, filteredHeroes: heroes });
    });
  }

  onSearch = (queryValue) => {
    const filteredHeroes = this.state.heroes.filter((hero) => {
      if (hero.name.toLowerCase().includes(queryValue.toLowerCase())) {
        return true;
      }
    });
    this.setState({ filteredHeroes });
  };

  render() {
    return (
      <div>
        {console.log(this.state.heroes)}
        <Search search={this.onSearch} />
        <Main filteredHeroes={this.state.filteredHeroes} />
      </div>
    );
  }
}
export default Home;


