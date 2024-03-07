import Image from "next/image"

export default function Logo(){
    return (
        <>
            <div className="hidden sm:block sm:absolute top-0 p left-10 bg-yellow-950 rounded-b-xl z-10">
                <Image 
                    src="/sf.png"
                    width={125}
                    height={100}
                    alt="logo"
                />
            </div>
        </>
    )
}