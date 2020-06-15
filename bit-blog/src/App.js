import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { Home } from './Components/Home/Home'
import { Authors } from './Components/Authors/Authors'
import {About} from './Components/About/About'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }



  render() {
    return (
      <Switch>
        <Route exact path='/' Component={Home} />
        <Route exact path='/Authors' Component={Authors} />
        <Route exact path='/About' Component={About} />
      </Switch>

    )
  }
}
export default App;
