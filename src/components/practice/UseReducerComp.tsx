import React, { useReducer, useState } from "react";

//Reducer : State를 업데이트 해주는 역할

//Dispatch : state 업데이트 트리거

//Action : 업데이트 내용
interface Action {
    type: string;
    payload: number;
}

  const ACTION_TYPES = {
    deposit: 'deposit',
    withdraw: 'withdraw'
}

const reducer = (state: number, action: Action) => {
    console.log("state: ", state, "action: ", action)
    switch (action.type) {
        case ACTION_TYPES.deposit:
            return state + action.payload
        case ACTION_TYPES.withdraw:
            return state - action.payload
        default:
            return state; // action이 의도대로 안오면 state를 변경하지 않게 하여 코딩 실수를 줄여줌
    }
};

export const UseReducerComp = () => {

    const [number, setNumber] = useState(0);
    const [money, dispatch] = useReducer(reducer, 0); // money초기값

    return (
        <div>
            <p>잔고: {money}</p>
            <input type="number" value={number} onChange={(input) => { setNumber(Number(input.target.value))}} />
            <button onClick={() => dispatch({ type: ACTION_TYPES.deposit, payload: number })}>입금</button>
            <button onClick={() => dispatch({ type: ACTION_TYPES.withdraw, payload: number })}>출금</button>
        </div>
    );
};