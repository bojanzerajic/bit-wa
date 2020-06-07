import React from 'react';
import './App.css';
import { Header } from './Components/Header/Header';
import { Users } from './Components/Users/Users';
import {Footer} from './Components/Footer/Footer';
import {UserGrid} from "./Components/UserGrid/UserGrid";



function App() {
  return (
    <div className="App">
      <Header />
      <Users />
      <UserGrid />
      <Footer/>

    </div>
  );
}

export default App;
