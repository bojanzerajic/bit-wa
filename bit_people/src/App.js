import React from 'react';
import './App.css';
import { Footer } from './Components/Footer/Footer'
import { Header } from './Components/Header/Header'
import { UserList } from './Components/UserList/UserList'
import { UserGrid } from './Components/UserGrid/UserGrid'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      isListView: true
    }
    this.changeView = this.changeView.bind(this)
  }
  changeView = (event) => {
    if (this.state.isListView) {
      this.setState({ isListView: false })
    } else {
      this.setState({ isListView: true })
    }
  }


  render() {
    return <div>
      <Header isListView={this.state.isListView} changeView={this.changeView} />
      {this.state.isListView ? <div id="List"><UserList users={this.state.users} /></div> : <div><UserGrid data={this.state.users} /></div>}
      <Footer />
    </div >
  }
  componentDidMount() {
    fetch('https://randomuser.me/api/?results=15')
      .then(res => res.json())
      .then(data => this.setState({ users: data.results }))
  }
}

export default App;
