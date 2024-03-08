'use client'
import { useRouter } from 'next/navigation';

export default function Deletebtn({id} : {id: string}){
    const router = useRouter();

    const removePost = async () => {
        const confirmed = confirm('Are you sure?');

        if (confirmed) {
            const res = await fetch(`/api/task?id=${id}`, {
                method: "DELETE",
            });

            if (res.ok){
                router.refresh();
            }
        }
    }
    return(
        <>
            <button onClick={removePost} className="btn btn-sm btn-circle btn-ghost" >x</button>
        </>
    )
}