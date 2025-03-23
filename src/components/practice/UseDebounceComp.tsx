//Debounce
//이벤트 => 함수 호출
// 마지막 이벤트 발생 후 아무것도 발생하지 않을 때 delay 이후 함수 호출

import React, { useEffect, useState } from "react";

const users: User[] = [
    { name: "A", age: "16" },
    { name: "B", age: "17" },
    { name: "C", age: "18" }
];

interface User {
    name: string;
    age: string;
}

export const UseDebounceComp = () => {

    const [input, setInput] = useState("");
    const [debouncedInput, setDebouncedInput] = useState(input);
    // interface로 교체
    // const [result, setResult] = useState<{ name: string; age: string }[]>([]);
    const [result, setResult] = useState<User[]>([]);

    function fetchDataFromServer(value: string) : User[] {
        console.log("fetchDataFromServer 호출", value);
        return users.filter((user) => user.name.startsWith(value));
    }

    useEffect(() => {
        const users = fetchDataFromServer(debouncedInput);
        setResult(users);
    }, [debouncedInput])

    useEffect(() => {
        const handler = setTimeout(() => {
            console.log("called");
            setDebouncedInput(input);
        }, 1000); // 1초 뒤에 실행됨

        // cleanUp 함수
        return () => {
            clearTimeout(handler);
        }
    }, [input])

    return (
        <div>
            <input 
                placeholder="검색어 입력"
                value={input}
                onChange={(event) => setInput(event.target.value)}
            ></input>
            <ul>
                {result && result.map(user => (
                    <li key={user.name}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
};
