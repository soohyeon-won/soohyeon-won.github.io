import { useEffect, useState } from "react";

// 커스텀 훅 useWindowSize를 정의합니다.
function useWindowSize() {
    // windowSize라는 상태를 생성하고 초기값으로 현재 창의 너비와 높이를 설정합니다.
    const [windowSize, setWindowSize] = useState({
      width: window.innerWidth, // 창의 현재 너비를 초기값으로 설정
      height: window.innerHeight, // 창의 현재 높이를 초기값으로 설정
    });
  
    // useEffect 훅을 사용하여 컴포넌트가 마운트되거나 언마운트될 때 실행될 코드를 작성합니다.
    useEffect(() => {
      // 창 크기가 변경될 때 실행될 함수 handleResize를 정의합니다.
      const handleResize = () => {
        // 창의 현재 너비와 높이를 상태로 업데이트합니다.
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };
  
      // 브라우저 창 크기 변경 이벤트에 handleResize를 연결합니다.
      window.addEventListener('resize', handleResize);
  
      // 클린업 함수: 컴포넌트가 언마운트될 때 이벤트 리스너를 제거합니다.
      return () => window.removeEventListener('resize', handleResize);
    }, []); // 빈 배열을 두어 이 효과가 한 번만 실행되도록 설정합니다.
  
    // 현재 창 크기를 반환합니다.
    return windowSize;
  }
  
  export default useWindowSize;