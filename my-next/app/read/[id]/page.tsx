interface ReadProps {
    params: {
        id: string;
    }
}

export default function Read({ params }: ReadProps) {
    return (
        <>
            <h2>Read</h2>
            <p>{params.id}</p>
        </>
    )
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