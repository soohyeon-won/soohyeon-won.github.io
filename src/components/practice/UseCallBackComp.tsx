import React, { useCallback, useEffect, useState } from "react"

export const UseCallBackCompLegacy = () => {

    // UseCallBack
    // Memoization(캐싱된 데이터를 메모리에서 꺼내어 사용하는 최적화 기법) 기법으로 컴포넌트 최적화를 해주는 것
    // js의 함수는 객체의 한 종류
    // calculate에 함수 객체가 할당 됨
    // const calculate = useCallback((num: number) => {
    //     return num + 1;
    // }, []);

    // 함수형 컴포넌트 == 함수
    // 함수형 컴포넌트가 렌더링 된다 == 함수형 컴포넌트가 호출이 된다. => 모든 내부 변수 초기화

    const [number, setNumber] = useState(0);

    // warning 오류로 인해 아래 useCallBack 함수로 대체
    // const someFunction = () => {
    //     console.log('someFunc number:',{number})
    //     return;
    // };
    const someFunction = useCallback(() => {
        console.log('someFunc number:',{number})
        return;
    }, [number]);

    // input에서 state를 변경 > 컴포넌트 랜더링
    // calculate 변수에 저장된 객체(함수)를 참조하는 주소를 갖고 있음
    // 렌더링 하게 되었을 때 someFunction에 있는 주소가 변경되면서 useEffect함수가 호출 됨
    useEffect(() => {
        console.log("someFunction changed")
    }, [someFunction]);

    return (
        <div>
            <input type="number" value={number} onChange={(input) => { setNumber(Number(input.target.value))}} />
            <button onClick={someFunction}>Call someFunc</button>
        </div>
    )
}

export const UseCallBackComp = () => {

    const [number, setNumber] = useState(0);

    const someFunction2 = useCallback(() => {
        console.log('someFunc number:',{number}) // 의존성 배열에 number가 없으면 number가 바뀌지 않음
        return;
    }, [number]);

    useEffect(() => {
        console.log("someFunction changed")
    }, [someFunction2]);

    return (
        <div>
            <input type="number" value={number} onChange={(input) => { setNumber(Number(input.target.value))}} />
            <button onClick={someFunction2}>Call someFunc</button>
        </div>
    )
}

export const UseCallBackComp2 = () => {

    const [size, setSize] = useState(50);
    const [isDark, setIsDark] = useState(false);

    const someFunction = useCallback(() => {
        console.log('someFunc size:',{size}) // 의존성 배열에 number가 없으면 number가 바뀌지 않음
        return;
    }, [size]);

    useEffect(() => {
        console.log("someFunction changed")
    }, [someFunction]);

    // state가 바뀔때 렌더링 되면서 계속 변경됨
    // 하위 컴포넌트인 Box에도 영향을 줘서 useEffect가 계속 호출됨
    // Legacy
    // const createBoxStyle = () => {
    //     return {
    //         backgroundColor: 'pink',
    //         width: `${size}px`,  // 올바른 템플릿 리터럴 사용
    //         height: `${size}px`,
    //     };
    // };

    // To-be
    const createBoxStyle = useCallback(() => {
        return {
            backgroundColor: 'pink',
            width: `${size}px`,  // 올바른 템플릿 리터럴 사용
            height: `${size}px`,
        };
    }, [size])

    return (
        <div>
            <input type="number" value={size} onChange={(input) => { setSize(Number(input.target.value))}} />
            {/* <div style={createBoxStyle()}></div> */}
            <button onClick={() => setIsDark(!isDark)}>상위컴포넌트 Dark모드 변경</button>
            <Box createBoxStyle={createBoxStyle}></Box>
            <div style={{background: isDark ? 'black':'white', width:'100px', height:'100px'}}></div>
        </div>
    )
}

interface BoxProps {
    createBoxStyle: () => React.CSSProperties;
  }
  
  const Box = ({createBoxStyle }: BoxProps) => {
    const [style, setStyle] = useState<React.CSSProperties>({});
  
    useEffect(() => {
      console.log("박스 키우기 🎨");
      setStyle(createBoxStyle());
    }, [createBoxStyle]);
  
    return <div style={style}></div>;
  };
  
  export default Box;
  