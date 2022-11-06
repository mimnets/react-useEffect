import React from 'react';
import Dial from '../Dial/Dial';

const Display = (props) => {
    return (
        <div>
            <h1>Phone: {props.name}</h1>
            <p>Today's total steps: {props.steps}</p>
            <Dial dial={props.steps}></Dial>
        </div>
    );
};

export default Display;