'use client'

export default function Deletebtn({id, onRemove} : {id: string, onRemove: any}){

    const handleClick = () => {
        onRemove(id);
    }
    
    return(
        <>
            <button onClick={handleClick} className="btn btn-sm btn-circle btn-ghost" >x</button>
        </>
    )
}