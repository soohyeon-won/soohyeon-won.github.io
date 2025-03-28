// 하지만 Next.js는 동적 라우팅 페이지에서 params를 Promise로 감싸서 전달
// 이를 비동기적으로 처리하거나 타입을 맞춰야 합니다.
// 1. 비동기 페이지로 수정: params를 Promise로 감싸서 전달해야 합니다.
// 2. 타입 맞추기: params의 타입을 맞춰야 합니다.
// interface ReadProps {
//     params: {
//         id: number;
//     }
// }

interface Topic {
    id: number;
    title: string;
    body: string;
}

export async function generateStaticParams() {
    const response = await fetch("http://localhost:9999/topics");
    const topics = await response.json();
    return topics.map((topic: Topic) => ({
      id: topic.id.toString(),
    }));
  }

// 데이터를 읽어서 출력만 하면 서버컴포넌트 적합

export default async function Read({ params }: { params: Promise<{ id: string }> }) {
    try {
        const response = await fetch(`http://localhost:9999/topics`);

        if (!response.ok) {
            throw new Error('Failed to fetch topics');
        }

        const topic: Topic[] = await response.json();
        const resolvedParams = await params; // Promise 풀기
        const id = parseInt(resolvedParams.id, 10); // string -> number 변환

        // Find the specific topic based on the ID
        //   const topic = data.topics.find((t: Topic) => t.id === Number(params.id));
        console.log(topic);
        if (!topic) {
            return (
                <div>
                    <h2>Topic Not Found</h2>
                    <p>No topic found with ID: {resolvedParams.id}</p>
                </div>
            );
        }

        return (
            <div>
                <h2>Read Topic</h2>
                <div>
                    <h3>ID: {topic.at(id)?.id}</h3>
                    <h3>Title: {topic.at(id)?.title}</h3>
                    <p>Body: {topic.at(id)?.body}</p>
                </div>
            </div>
        );
    } catch (error) {
        // Handle potential errors
        return (
            <div>
                <h2>Error</h2>
                <p>Unable to load topic: {error instanceof Error ? error.message : 'Unknown error'}</p>
            </div>
        );
    }
}

// ❌
// param는 객체여야 함
// id 가 아닌 다른 키값을 사용하면 접근이 안됨
// export function Read2(params: string) {
//     return (
//         <>
//             <h2>Read</h2>
//             <p>{params}</p>
//         </>
//     )
// } 