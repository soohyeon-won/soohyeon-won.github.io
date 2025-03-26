// CustomHook
// 직접 커스텀해서 만드는 리액트 훅

import React, { useCallback, useEffect } from "react";
import { useState } from "react";

export const CustomHookComp = () => {
    const [inputValue, handleChange] = useInput("안녕");

    return (
        <div>
            {/* 예제1*/}
            <p>{inputValue}</p>
            <input type="text" onChange={input => handleChange(input.target.value)}></input>
            <button onClick={() => handleChange}>Button</button>
        </div>
    );
};

// Custom Hook!
export function useInput(str: string): [string, (e: string) => void] {
    const [inputValue, setInputValue] = useState(str);

    const handleChange = (e: string) => {
        setInputValue(e + "추가작업");
    };

    return [inputValue, handleChange];
}

const baseURL = "https://jsonplaceholder.typicode.com";

// Ex2
export const UseFetchComp = () => {
    // const [data, setData] = useState<any>(null);
    // const [loading] = useState<boolean>(false);

    const [data, fetchURL] = useFetchCustomHook(baseURL, "users");

    // 아래 기능을 customHook 안으로 숨김
    // const fetchURL = async (type: string) => {
    //     setLoading(true);
    //     try {
    //         const response = await fetch(`${baseURL}/${type}`);
    //         const result = await response.json();
    //         // setData(result);
    //     } catch (error) {
    //         console.error("Fetch error:", error);
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    useEffect(() => {
        // fetchURL("users");
    }, []);

    return (
        <div>
            {Array.isArray(data) && data.length > 5 ? (
                <ul>
                    {data.slice(0, 5).map(item => (
                        <li key={item.id}>{item.name || item.title}</li>
                    ))}
                </ul>
            ) : (
                <p>No data</p>
            )}
            <p>{}</p>
            <button onClick={() => fetchURL("users")}>Users</button>
            <button onClick={() => fetchURL("posts")}>Posts</button>
            <button onClick={() => fetchURL("todos")}>Todos</button>
        </div>
    );
};

// custom hooks useFetch
export function useFetchCustomHook(baseURL:string, type: string): [any, (e: string) => void] {

    const [data, setData] = useState<any>(null);

    const fetchURL = useCallback(async (type: string) => {
        try {
            const response = await fetch(`${baseURL}/${type}`);
            const result = await response.json();
            setData(result);
        } catch (error) {
            console.error("Fetch error:", error);
        } finally {
            console.log('fin')
        }
    }, [baseURL]);

    useEffect(() => {
        fetchURL(type);
    }, [type, fetchURL]);

    return[ data, fetchURL ]
}