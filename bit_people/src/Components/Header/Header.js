import React from 'react';
import './Header.css'
import { MdViewList, MdGridOn } from "react-icons/md";


export const Header = (props) =>
    (
        <div className="header" ><h1>React Users</h1>
            {props.isListView ? <MdViewList onClick={props.changeView} /> : <MdGridOn onClick={props.changeView} />}
        </div>
    )
