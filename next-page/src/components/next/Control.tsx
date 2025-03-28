'use client';

import { useParams } from "next/navigation";

export function Control() {

    const params = useParams();
    console.log('test',params);
    const id = params.id;
    
    // 클라이언트 컴포넌트에서는 process.env 사용 시 NEXT_PUBLIC_ 붙여야 함
    console.log('API_URL', process.env.API_URL)
    console.log('NEXT_PUBLIC_API_URL', process.env.NEXT_PUBLIC_API_URL)

    return (
        <>
        {id ? <>
            <li><a href="/create">create</a></li>
            <li><a href={"/update/"+id}>update</a></li>
            <li><a href="/delete">delete</a></li>
            </> : null
        }
        </>
    );
}
;
