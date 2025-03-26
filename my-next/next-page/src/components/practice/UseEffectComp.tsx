import React, { useEffect } from "react";
import { useState } from "react"

const UseEffectComp = () => {

    const [count, setCount] = useState(1);
    const [name, setName] = useState('');

    const handleCountUpdate = () => {
        setCount(count + 1)
    }

    // Prev value 이용하기
    const handleCountUpdate2 = () => {
        setCount((prevValue) => prevValue + 1);
    }

    const handleInputChange = (s: string) => {
        setName(s)
    }

    // 랜더링 될 때마다 매번 실행 됨.
    useEffect(() => {
        console.log('렌더링~')
    }) 

    // 마운트 + [ dependency Item 변경 시 ]
    useEffect(() => {
        console.log('Count 변화로 렌더링~')
    }, [count]) // dependency array, count값이 변화 될 때 마다 실행됨
    useEffect(() => {
        console.log('Name 변화로 렌더링~')
    }, [name]) // dependency array, Name이 변화 될 때 마다 실행됨

    // 마운트 시에만
    useEffect(()=> {
        console.log("마운트 !")
    }, [])

    return (
        <div>
            <button onClick={handleCountUpdate}>Update {count}</button>
            <button onClick={handleCountUpdate2}>Update {count}</button>
            <input type="text" value={name} onChange={(input) => { handleInputChange(input.target.value)}}>
            </input>
            <span>name: {name}</span>
        </div>
    );
};

export default UseEffectComp;