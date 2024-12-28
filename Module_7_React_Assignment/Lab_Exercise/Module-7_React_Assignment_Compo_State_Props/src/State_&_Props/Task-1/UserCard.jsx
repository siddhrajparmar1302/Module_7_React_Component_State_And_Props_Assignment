import React from 'react'
import './UserCard.css';

const UserCard = (props) => {

    const { name , age , location } = props;

    return(
        <div className="user-card">
            <h1>User Information</h1>
            <p><strong>Name:</strong>{props.name}</p>
            <p><strong>Age:</strong>{props.age}</p>
            <p><strong>Location:</strong>{props.location}</p>
        </div>
    )
}

export default UserCard
