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

// 예제2 출석부

interface stateEx2 {
    count: number
    students: Student[]
}

interface Student {
    id: number, name: string, isHere: Boolean
}

const initialState: stateEx2 = {
    count: 0,
    students: []
}

interface Action2 {
    type: string,
    payload: string
}

const reducerEx2Instance = (state: stateEx2, action: Action2) => {
    switch (action.type) {
        case 'add-student':
            const name = action.payload
            const newStudent = {
                id: Date.now(),
                name,
                isHere: false
            }
            return {
                count: state.count + 1,
                students: [...state.students, newStudent]
            }
        case 'delete-student':
            return {
                count: state.count - 1,
                students: state.students.filter(student => student.id.toString() !== action.payload)
            }
        default:
            return state
    }
}

export const UseReducerComp2 = () => {

    const [name, setName] = useState('');
    const [studentsInfo, dispatch] = useReducer(reducerEx2Instance, initialState);

    return (
        <div>
            <h1>출석부</h1>
            <p>총 학생 수 : {studentsInfo.count}</p>
            <input type="text" value={name} placeholder="이름을 입력해주세요" onChange={(input)=> {
                setName(input.target.value);}} />
            <button onClick={() => { dispatch({type:'add-student', payload:name}) }}>추가</button>
            {studentsInfo.students.map((student) => {
                // 방법 1 const StudentView = (name: string) => { 로 정의했을 때
                // return StudentView(student.name)

                // 방법 2 props에 object 담기
                // Warning: Each child in a list should have a unique "key" prop.
              return <StudentView key={student.id} name={student.name} id={student.id} dispatch={dispatch} ></StudentView>  
            })}
        </div>
    );
};

const StudentView = (prop: {name: string, id: number, dispatch: React.Dispatch<Action2> }) => {
    return (
        <div>
            <span>{prop.name}</span>
            <button onClick={() => {
                prop.dispatch({type: 'delete-student', payload: prop.id.toString()})
            }}>삭제</button>
        </div>
    );
}