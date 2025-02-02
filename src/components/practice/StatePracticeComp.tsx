import React from "react";
import { useState } from "react"

const StatePracticeComp = () => {
    const [time, setTime] = useState(1);

    const handleClick = () => {
        let newTime;
        if (time >= 12) {
            newTime = 1;
        } else {
            newTime = time + 1
        }
        setTime(newTime)
    }

    console.log('update')

    return (
        <div>
            <span>현재 시각: {time}시</span>
            <button onClick= {handleClick}>Update</button>
        </div>
    );
};

export default StatePracticeComp;