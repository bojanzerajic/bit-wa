import React from 'react'
// import { GrSearch } from "react-icons/gr";
import './Search.css'


const Search = (props) => {
    return (
        <div className='Search__container'>
            {/* <GrSearch/> */}
            <input type='search' className='Search__input' onKeyDown={props.getData} />
        </div>
    )
}
export { Search }