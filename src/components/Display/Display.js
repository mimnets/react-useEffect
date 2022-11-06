import React from 'react';

const Display = (props) => {
    return (
        <div>
            <h1>Phone: {props.name}</h1>
            <p>Today's total steps: {props.steps}</p>
        </div>
    );
};

export default Display;