// CustomHook
// 직접 커스텀해서 만드는 리액트 훅

import React, { ChangeEvent } from "react";
import { useState } from "react";

export const CustomHookComp = () => {

    const [inputValue, handleChange] = useInput('안녕')

    return(
        <div>
            <p>{inputValue}</p> 
            <input type="text" onChange={(input) => handleChange(input.target.value) }></input>
            <button onClick={() => handleChange}>Button</button>
        </div>
    );
};

// Custom Hook!
export function useInput(str: string): [string, (e: string) => void] {

    const [inputValue, setInputValue] = useState(str);

    const handleChange = (e: string) => {
        setInputValue(e + "lastText")
    };

    return [inputValue, handleChange];
 }