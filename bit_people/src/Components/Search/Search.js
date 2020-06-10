import React from 'react'
import { FaSearch } from "react-icons/fa"

const Search = (props) => {
    return (<div className="App__search"><FaSearch />
        <input onChange={props.searchFunction} type='search' id='search' placeholder="Search users" ></input>
    </div>)
}
export { Search }