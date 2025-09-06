// 자바스크립트 엔진은 동기적으로 작동

import React from "react";

export const AsyncComp = () => {
    return (
        <div>
            <p>
                자바스크립트 엔진은 동기적으로 작동\n자바스크립트는 single thread 언어이다. == 한 번에 한가지 일을 할 수 있음
                동기 프로그래밍의 문제 : Blocking
                Web APIs : 브라우저에서 제공하는 API
                - setTimout, fetch, Dom (멀티스레드 환경)

                Callback Queue : Web APIs에서 비동기 작업이 완료되면 Callback Queue에 콜백 함수를 넣음
                Event Loop : Call Stack이 비어있을 때 Callback Queue에 있는 콜백 함수를 Call Stack으로 이동시킴
                
                Promise : 비동기 처리를 위한 객체
                Promise의 상태 : Pending, Fulfilled, Rejected
                Promise의 메서드 : then, catch, finally
                Promise.all : 여러 개의 Promise를 동시에 처리
            </p>
        </div>
    );
}