// next scripts
// build: 배포판 생성, .next 폴더에 사용자에게 서비스될 내용이 저장됨
// start: .next에 저장되어 있는 내용을 서비스 하게 됨
// build -> start 하고 크롬 인스펙터를 보면 하단에 서빙된 데이터가 작아진 걸 볼 수 있음

import Link from "next/link";
import { Control } from "./Control";

// * Routing
// http://a.com/segment/segment => domain + path
// segment + segment ... => path

// * SSR
// 인스펙터 > 더보기 > Run command > disable javascript 를 끄면 리액트는 실행이 안됨
// next는 로드 됨 자바스크립트가 아닌 HTML을 응답함
// 인스펙터 > Network > no throttling > 네트워크 환경 바꿀 수 있음

// 서버 띄우기
// npx json-server --port 9999 --watch db.json
// 콘솔에 아래 코드를 입력하면 JSON 데이터를 가져올 수 있음
// fetch('http://localhost:9999/topics')
//   .then((resp) => resp.json())
//   .then((result) => {
//     console.log('result', result);
//   })
//   .catch((error) => {
//     console.error('Error fetching topics:', error);
//   });

export const NextPracticeComp = () => {

    return (
        <div>
            <a href="/">WEB</a>
            <h2>Next Practice Comp</h2>
            <ol>
                {/* 정적 자원 사용 */}
                <img src="/next.svg" width={100} height={100}></img>
                {/* 다이나믹 라우팅 */}
                <li><a href="/read/1">html</a></li>
                <li><a href="/read/2">css</a></li>
            </ol>
            <ol>
                <Control />
                <li><Link href="/delete">Nextjs Link</Link></li>
            </ol>


        </div>
    );
};

