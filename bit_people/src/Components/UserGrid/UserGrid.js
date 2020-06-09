import React from 'react'
import "./UserGrid.css"
import { emailShortage, dateTransform } from '../functions'


class UserGrid extends React.Component {
    constructor(props) {
        super(props)
        this.state = { data: [] }
    }
    render() {
        return <div className='UserGrid__container'>
            {this.props.data.map(item => <div className="UserGrid__wrapper">
                <img src={item.picture.large} alt="large"></img>
                <p>{item.name.first} <br></br> {emailShortage(item.email)} <br></br> {dateTransform(item.dob.date)}</p></div>)}
        </div>
    }
}
export { UserGrid }