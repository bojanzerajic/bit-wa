import React from "react";
import data from '../Data/RandomUsers';
import "./UserGrid.css";
import { UserCard } from "./UserCard/UserCard"


const UserGrid = () => {
    return (
        <div className="UserGrid__wrapmain">
            {data.results.map(user => (
                <UserCard
                    key={user.login.uuid}
                    image={user.picture.large}
                    name={user.name.first}
                    email={user.email}
                    dateOfBirth={user.dob.date}
                />))}
        </div>
    )
}


export { UserGrid };