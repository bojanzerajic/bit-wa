import React from 'react';
import './App.css';
import { Header } from './Components/Header/Header'
import { Main } from './Components/Main/Main'

class App extends React.Component {
  constructor(props) {
    super(props)


  }
  

  render() {

    return (
      <div>
        <Header />
        <Main/>
      </div>
    );
  }
}
export default App;
