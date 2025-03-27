// next scripts
// build: 배포판 생성, .next 폴더에 사용자에게 서비스될 내용이 저장됨
// start: .next에 저장되어 있는 내용을 서비스 하게 됨
// build -> start 하고 크롬 인스펙터를 보면 하단에 서빙된 데이터가 작아진 걸 볼 수 있음

// Routing
// http://a.com/segment/segment => domain + path
// segment + segment ... => path



export const NextPracticeComp = () => {

    return (
        <div>
            <a href="/">WEB</a>
            <h2>Next Practice Comp</h2>
            <ol>
                {/* 다이나믹 라우팅 */}
                <li><a href="/read/1">html</a></li>
                <li><a href="/read/2">css</a></li>
            </ol>
            <ol>
                <li><a href="/create">create</a></li>
                <li><a href="/update">update</a></li>
                <li><a href="/delete">delete</a></li>
            </ol>
        </div>
    );
};