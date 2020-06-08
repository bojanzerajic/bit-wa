import React from 'react';
import data from '../Data/RandomUsers';
import {User} from './User/User'

const Users = () => {
    return (
        <div>
           { data.results.map(user => <User key={user.login.uuid} image={user.picture.thumbnail} name={user.name.first} email={user.email} dateOfBirth={user.dob.date}  />)}
        </div>
    )
}

export { Users }