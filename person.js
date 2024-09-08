import React from 'react';

const Person = ({ name, age, hobbies }) => {
    const displayName = name.length > 8 ? name.substring(0, 6) + '...' : name;
    const votingMessage = age >= 18 ? "please go vote!" : "you must be 18";

    return (
        <div>
            <p>Learn some information about this person</p>
            <h3>{votingMessage}</h3>
            <p>Name: {displayName}</p>
            <p>Age: {age}</p>
            {hobbies && (
                <ul>
                    {hobbies.map((hobby, index) => (
                        <li key={index}>{hobby}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Person;