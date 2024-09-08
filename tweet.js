import React from 'react';
import './Tweet.css';

const Tweet = ({ username, name, date, message }) => {
    return (
        <div className="tweet">
            <p><strong>@{username}</strong></p>
            <p>{name}</p>
            <p>{date}</p>
            <p>{message}</p>
        </div>
    );
};

export default Tweet;