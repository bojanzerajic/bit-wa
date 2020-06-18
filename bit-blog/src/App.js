import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { Home } from './Components/Home/Home'
import { Authors } from './Components/Authors/Authors'
import { About } from './Components/About/About'
import { CreatePost } from './Components/CreatePost/CreatePost'
import { SinglePost } from './Components/SinglePost/SinglePost'
import { Author } from './Components/Author/Author'
import { Albums } from './Components/Albums/Albums'
import { AlbumPreview } from './Components/AlbumPreview/AlbumPreview'
import { Header } from './Components/Header/Header'
import {Footer} from './Components/Footer/Footer'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/authors' component={Authors} />
          <Route exact path='/about' component={About} />
          <Route exact path='/album-preview' component={AlbumPreview} />
          <Route exact path='/albums' component={Albums} />
          <Route exact path='/author/:id' component={Author} />
          <Route exact path='/single-post/:id' component={SinglePost} />
          <Route exact path='/posts/new' component={CreatePost} />
        </Switch>
        <Footer />
      </div>
    )
  }
}
export default App;
