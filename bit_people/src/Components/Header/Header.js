import React from 'react';
import './Header.css'
import { MdViewList, MdGridOn, MdRefresh } from "react-icons/md";


export const Header = (props) =>
    (
        <div className="header" ><h1>React Users</h1>
        <div className='header__buttonWrapper'><MdRefresh onClick={props.refresh}/>
            {props.isListView ? <MdViewList onClick={props.changeView} /> : <MdGridOn onClick={props.changeView} />}</div>
        </div>
    )
