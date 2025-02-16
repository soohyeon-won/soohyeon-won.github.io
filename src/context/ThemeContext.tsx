import { createContext, Dispatch, SetStateAction } from "react";

interface ThemeContextType {
    isDark: boolean;
    setIsDark: Dispatch<SetStateAction<boolean>>;
}


interface UserContextType {
    user: {
        userseq: number;
        username: string;
    };
    setUser: (user: { userseq: number; username: string}) => void;
}

// null: 의도적으로 비어 있음을 나타냄
// null인 경우 사용 시 반환값이 null일 수 있기 때문에 타입 체크가 필요함
// export const ThemeContext = createContext<ThemeContextType | null>(null);

// undefined: 아직 값이 정의되지 않음
// undefined는 undefined | T로 추론되어 타입 체크를 강제합니다.
// TypeScript가 예외처리를 강제하기 떄문에 더 선호되는 방식
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const UserContext = createContext<UserContextType | undefined>(undefined);