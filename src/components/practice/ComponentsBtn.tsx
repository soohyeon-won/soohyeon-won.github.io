import React from 'react';

interface MyBtnProps {
  message: string; // `message`라는 문자열 prop
}
// named export
export const MyBtn = ({ message = "init" }: MyBtnProps) => {
  
  return (
  <div>
    <button onClick = {() => console.log(message)}>{message}</button>
  </div>
  );
};

interface ComponentsBtnProps {
  buttonId: number;
}
// default export
const ComponentsBtn = (props: ComponentsBtnProps) => { // 함수형 컴포넌트
  const handleClick = (id: number): void => { // Arrow Function
    alert(`Button clicked with id: ${id}`)
  };

  return (
    <button className='list-item' onClick={() => handleClick(props.buttonId)}>open popup</button> // JSX를 렌더링
  );
};

export default ComponentsBtn;