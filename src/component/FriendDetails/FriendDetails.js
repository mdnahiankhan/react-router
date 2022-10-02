import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friend = useLoaderData();
    console.log(friend);
    return (
        <div>
            <h1>Details About:{friend.name}</h1>
            <h3>User Name:{friend.username}</h3>
            <p>Contact:{friend.phone}</p>
            <h2>Everything You have to know the person</h2>
        </div>
    );
};

export default FriendDetails;