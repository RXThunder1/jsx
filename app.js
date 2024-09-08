import React from 'react';
import FirstComponent from './components/FirstComponent';
import NamedComponent from './components/NamedComponent';
import Tweet from './components/Tweet';
import Person from './components/Person';

const App = () => {
    return (
        <div>
            <FirstComponent />
            <NamedComponent name="John Doe" />
            
            <Tweet
                username="john_doe"
                name="John Doe"
                date="September 7, 2024"
                message="Hello, world!"
            />
            <Tweet
                username="jane_doe"
                name="Jane Doe"
                date="September 8, 2024"
                message="React is awesome!"
            />
            <Tweet
                username="user123"
                name="User One Two Three"
                date="September 9, 2024"
                message="Have a great day!"
            />

            <Person name="Alexander Hamilton" age={30} hobbies={['Reading', 'Writing', 'Dueling']} />
            <Person name="Jane Doe" age={25} hobbies={['Cooking', 'Cycling']} />
            <Person name="Shorty" age={15} hobbies={['Video Games', 'Music']} />
        </div>
    );
};

export default App;