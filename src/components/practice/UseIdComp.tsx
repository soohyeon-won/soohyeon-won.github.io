import React, { useEffect, useId, useRef } from "react";

// React18
export const UseIdComp = () => {
    const id = useId();
    const ref = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        const element = ref.current;
        console.log(element);
    });

    console.log(id);

    return (
        <div>
            {/* 
        htmlFor을 사용해주면 웹 접근성도 높아짐. 스크린 리더 기능을 사용 가능
        하지만 고유하지 않은 ID를 사용하게 되면 문제가 발생됨.
        각각의 컴포넌트에 고유한 ID를 사용해 주어야함
         */}
            <label htmlFor="name">이름</label>
            <input id="name"></input>

            {/*  여러개의 id가 필요하면 id 뒤에 의미있는 이름을 넣어주면 됨 */}
            <p>TODO</p>
            <label htmlFor={`${id}-name`}>이름</label>
            <input id={`${id}-name`}></input>
            <br />
            <label htmlFor={`${id}-age`}>나이</label>
            <input id={`${id}-age`}></input>

            {/* 
        Q. math.random 같은 함수도 있는데 왜 useId를 쓸까?
        A1. useId가 만든 id는 쌍점을 포함한다.
        querySelector(id) 로 접근 할 수 없음 => 장점
        리액트를 사용하면 querySelector를 쓰는게 아니라 useRef를 써야하기 때문임
        */}
            <button id="btn">버튼</button>
            <input id={id} ref={ref}>
                input
            </input>

            {/* 
            🎯 Q. `Math.random()` 같은 함수도 있는데, 왜 `useId`를 사용할까? 

            🔹 A1. `useId`가 생성한 ID는 쌍점을 포함한다.  
            - `querySelector(id)`로 접근할 수 없음 👉 **보안적 장점**
            - 리액트에서는 `querySelector` 대신 `useRef`를 사용하는 것이 일반적

            🔹 A2. `Math.random()`을 사용하면?  
            - 컴포넌트가 **렌더링될 때마다 ID가 변경됨**  
            - 반면, `useId`는 렌더링이 발생해도 **ID가 유지됨**  
            - 예를 들어, `form` 요소에서 스크린 리더가 **반복적으로 레이블을 읽는 문제**를 방지할 수 있음

            🔹 A3. **SSR(서버 사이드 렌더링)과 하이드레이션 문제 해결**  
            - 클라이언트와 서버에서 **일관된 ID를 생성**하여 하이드레이션 오류 방지

           + 하이드레이션 오류
하이드레이션 오류는 서버에서 렌더링된 HTML과 클라이언트에서 렌더링한 HTML이 불일치할 때 발생합니다. 
주로 서버와 클라이언트에서 생성된 ID가 다를 때 발생합니다. 
예를 들어, 서버에서 페이지를 렌더링하고 클라이언트가 페이지를 다시 렌더링할 때 생성되는 ID 값이 다르면, 
React는 두 렌더링이 일치하지 않다고 판단하고 오류를 발생시킵니다.

useId는 서버 사이드 렌더링(SSR)에서 클라이언트와 서버가 동일한 ID를 생성할 수 있도록 보장합니다. 
이렇게 하면, 클라이언트에서 하이드레이션 과정이 완료될 때, 
서버에서 전달된 HTML과 클라이언트가 생성한 HTML이 일치하게 되어 하이드레이션 오류를 방지할 수 있습니다.

즉, useId를 사용하면 서버와 클라이언트가 동일한 ID 값을 생성하도록 보장하여 하이드레이션 오류를 방지하는 역할을 합니다.
            */}
        </div>
    );
};
