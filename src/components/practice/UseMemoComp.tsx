import React, { useEffect, useMemo, useState } from "react"

export const UseMemoComp = () => {

    const [num, setNumber] = useState(0);
    const [isHidden, setisHidden] = useState(true);

    // 1. useMemo 없이 object 사용
    // object makes the dependencies of useEffect Hook (at line 20) change on every render.
    // const refStruct = {
    //     title: isHidden ? "Hidden" : "Show",
    //     test: ''
    // }
    // useEffect(() => {
    //     console.log('useEffect 호출')
    // }, [refStruct]);

    ////// 아래는 useMemo를 이용해서 중복 렌더링 방지
    const refStruct = useMemo(() => {
        return {
            title: isHidden ? "Hidden" : "Show",
            test: ''
        }
    }, [isHidden])

    useEffect(() => {
        console.log('useEffect 호출')
    }, [isHidden]);

    return (
        <div>
            <p>Number: {num}</p>
            <button onClick={()=>setNumber(num+1)}>plus Number</button>
            <button onClick={()=>setisHidden(!isHidden)}>Toggle</button>
            <p> isHidden : {refStruct.title}</p>
        </div>
    )
}