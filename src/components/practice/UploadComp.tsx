import React from "react";
import { useState } from "react"

const heavyWork = () => {
    console.log('heavyWork')
    return ['init', 'heavy']
}

const UploadComp = () => {

    // const [names, setNames] = useState(heavyWork()) // 변경될 때 마다 heavyWork가 불림
    const [names, setNames] = useState(() => { // heavy한 작업을 하는 경우 콜백 함수를 넣어줌
        return heavyWork(); // 인자로 콜백함수를 넣어주면 최초 한 번 이후로 heavywork가 불리지 않음
    });
    const [input, setInput] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };
    const handleInputChange2 = (s: string) => {
        setInput(s);
    };
    
    const handleUpload = () => {
        setNames((prevState) => {
            console.log('prevState',prevState)
            return ([input, ...prevState]);
        })
    };

    return (
        <div>
            <input type="text" value={input} onChange={handleInputChange}></input>
            <input type="text" value={input} onChange={
                (input) => handleInputChange2(input.target.value) 
                }>
            </input>
            <button onClick={handleUpload}>Upload</button>
            {names.map((name, idx) => {
                return <p key={idx}>{name}</p>
            }
            )}
        </div>
    );
};

export default UploadComp;