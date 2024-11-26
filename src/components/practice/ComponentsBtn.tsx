import React from 'react';

interface ComponentsBtnProps {} // 필요시 props 인터페이스 추가 가능

const ComponentsBtn = (props: ComponentsBtnProps) => {
  const handleClick = (id: number): void => {
    alert(`Button clicked with id: ${id}`);
  };

  return (
    <button onClick={() => handleClick(1)}>Click me</button>
  );
};

export default ComponentsBtn;