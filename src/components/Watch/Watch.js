import React, { useEffect, useState } from 'react';
import Display from '../Display/Display';

const Watch = () => {
    const [steps, setSteps] = useState(0)

    const increaseSteps = ()=>{
        const newSteps = steps + 1;
        setSteps(newSteps);
        //console.log(steps)
    }
    //console.log(steps)
    useEffect(()=>{
        console.log(steps)
    },[steps])
    return (
        <div>
            <h1>My daily steps</h1>
            <p>Steps: {steps}</p>
            <button onClick={increaseSteps}>De Dour...</button>
            <Display name="Gramin" steps={steps}></Display>
        </div>
    );
};

export default Watch;