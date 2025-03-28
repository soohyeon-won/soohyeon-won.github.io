interface ReadProps {
    params: {
        id: number;
    }
}

interface Topic {
    id: number;
    title: string;
    body: string;
}

// 데이터를 읽어서 출력만 하면 서버컴포넌트 적합

export default async function Read({ params }: ReadProps) {
    try {
        const response = await fetch(`http://localhost:9999/topics`);

        if (!response.ok) {
            throw new Error('Failed to fetch topics');
        }

        const topic: Topic[] = await response.json();

        // Find the specific topic based on the ID
        //   const topic = data.topics.find((t: Topic) => t.id === Number(params.id));
        console.log(topic);
        if (!topic) {
            return (
                <div>
                    <h2>Topic Not Found</h2>
                    <p>No topic found with ID: {params.id}</p>
                </div>
            );
        }

        return (
            <div>
                <h2>Read Topic</h2>
                <div>
                    <h3>ID: {topic.at(params.id)?.id}</h3>
                    <h3>Title: {topic.at(params.id)?.title}</h3>
                    <p>Body: {topic.at(params.id)?.body}</p>
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
export function Read2(params: string) {
    return (
        <>
            <h2>Read</h2>
            <p>{params}</p>
        </>
    )
} 