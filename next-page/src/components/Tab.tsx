import React from "react";
import styled from 'styled-components';

interface TabProps {
    to: string;
    label: string;
    $isActive: boolean;
    onClick: () => void;
  }

  const StyledTapButton = styled.button<{ isActive: boolean }>`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  background-color: ${props => props.isActive ? '#007AFF' : '#E5E5EA'};
  color: ${props => props.isActive ? 'white' : 'black'};
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    opacity: 0.8;
  }
`;

// React.memo 컴포넌트 최적화(캐싱)
// 항목이 자주 변경되지 않는 경우 사용
const Tab = React.memo(({ to, label, $isActive, onClick } : TabProps) => (
    //  <Link href={"/"+to}>
        <StyledTapButton isActive = {$isActive} onClick={onClick}>
            {label}
        </StyledTapButton>
    // </Link>
  ));
  
export default Tab;