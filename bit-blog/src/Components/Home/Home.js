import React from 'react'
import './Home.css'
import {ListOfPosts} from './ListOfPosts/ListOfPosts'


class Home extends React.Component {
    constructor(props) {
        super(props)
       
    }

   
    

    render() {
        return  <ListOfPosts/>
    }

}

export { Home }




