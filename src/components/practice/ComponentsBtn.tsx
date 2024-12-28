import React from 'react';

interface ComponentsBtnProps {
  buttonId: number;
}

const ComponentsBtn = (props: ComponentsBtnProps) => { // 함수형 컴포넌트
  const handleClick = (id: number): void => { // Arrow Function
    alert(`Button clicked with id: ${id}`)
  };

  return (
    <button onClick={() => handleClick(props.buttonId)}>Click me</button> // JSX를 렌더링
  );
};

export default ComponentsBtn;