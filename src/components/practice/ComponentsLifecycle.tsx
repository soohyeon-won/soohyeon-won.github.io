import React, { useState, useEffect } from 'react';

interface Props {
  title: string;
}

const ComponentsLifecycle = ({ title }: Props) => {
  const [lifecycleStage, setLifecycleStage] = useState('Mounted');

  useEffect(() => {
    console.log('Component Mounted');
    setLifecycleStage('Mounted');

    return () => {
      console.log('Component Unmounted');
      setLifecycleStage('Unmounted');
    };
  }, []);

  useEffect(() => {
    if (lifecycleStage !== 'Mounted') {
      console.log('Component Updated');
      setLifecycleStage('Updated');
    }
  }, [title, lifecycleStage]);

  return (
    <div className="detail-container">
      <h1>{title}</h1>
      <p>함수형 컴포넌트: {lifecycleStage}</p>
    </div>
  );
};

export default ComponentsLifecycle;
