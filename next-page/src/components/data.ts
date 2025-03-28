// src/data.ts
// option + shift + f : 정렬
import { javascriptTopics } from "./data/javascript";
import { reactBasicsTopics } from "./data/reactBasics";
import { reactHooksTopics } from "./data/reactHooks";
import { routingTopics } from "./data/routing";
import { stateManagementsTopics } from "./data/stateManagement";
import { testsTopics } from "./data/testing";

export interface Section {
    title: string;
    content: string;
    code: string; // 인터페이스에 기본값을 정의하진 못해 code?: String 선택성 속성 이용 가능
}

export interface Topic {
    id: string; // id가 문자열이라면 유지
    title: string;
    content?: string; // content는 선택적 속성
    depth: number;
    sections?: Section[]; // sections도 선택적 속성
}

export const topics = [
    ...javascriptTopics, ...reactBasicsTopics, ...reactHooksTopics,
    ...stateManagementsTopics, ...routingTopics, ...testsTopics
]