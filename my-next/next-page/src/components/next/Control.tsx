'use client';

import { useParams } from "next/navigation";

export function Control() {

    const params = useParams();
    console.log('test',params);
    const id = params.id;
    
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
