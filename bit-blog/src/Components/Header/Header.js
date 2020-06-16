import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <div className='Header'>
            <h2>BIT BLOG</h2>
            <ul className='Header__ul'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/Authors'>Authors</Link></li>
                <li><Link to='/About'>About</Link></li>
            </ul>
        </div>
    )
}
export {Header} 