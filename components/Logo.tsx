import Image from "next/image"
import Link from "next/link"

export default function Logo(){
    return (
        <>
            <div className="hidden lg:block lg:absolute top-0 p left-10 bg-yellow-950 rounded-b-xl z-10">
                <Link href="/">
                    <Image 
                        src="/sf.png"
                        width={125}
                        height={100}
                        alt="logo"
                        priority
                    />
                </Link>
            </div>
        </>
    )
}