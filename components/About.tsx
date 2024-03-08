import Image from "next/image"
import Link from "next/link"

type Element = HTMLElement | null;

export default function About() {
    return (
        <div>
            <button className="flex items-center text-base font-medium transition-all hover:opacity-60 uppercase" onClick={()=>{
                const aboutUsModal = document.getElementById('about-us');
                if (aboutUsModal instanceof HTMLDialogElement){
                    aboutUsModal.showModal();
                } else {
                    console.error('About us modal not found')
                }
            }}>About</button>
            <dialog id="about-us" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <div className="hidden lg:items-center lg:justify-center lg:text-center lg:grid lg:grid-cols-3 lg:gap-2 mb-10">
                        <div className="rounded-full ">
                            <Link href="https://www.shaadleehue.com/" target="_blank" className="flex justify-center">
                                <Image 
                                    src="/images/sleep.jpg"
                                    width={100}
                                    height={100}
                                    alt="sleep"
                                    className="transition-all  rounded-full object-cover object-center grayscale hover:filter-none hover:cursor-pointer"
                                />
                            </Link>
                        </div>
                        <div className="rounded-full ">
                            <Link href="https://www.shaadleehue.com/" target="_blank" className="flex justify-center">
                                <Image 
                                    src="/images/sleep.jpg"
                                    width={100}
                                    height={100}
                                    alt="slee"
                                    className="transition-all rounded-full object-cover object-center grayscale hover:filter-none hover:cursor-pointer"
                                />
                            </Link>
                        </div>
                        <div className="rounded-full">
                            <Link href="https://www.shaadleehue.com/" target="_blank" className="flex justify-center">
                                <Image 
                                    src="/images/sleep.jpg"
                                    width={100}
                                    height={100}
                                    alt="slep"
                                    className="transition-all rounded-full object-cover object-center grayscale hover:filter-none hover:cursor-pointer"
                                />
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center normal-case">
                        <h2 className="font-semibold text-xl mb-5">About us</h2>
                        <div className="font-medium text-base">
                            <p>We are the productivity nerds. Our goal is to provide you with the tools to optimize your time by creating an environment that keeps
                                you focused on your tasks. Our team consists of Rukaiah, Shaad, and Shevan. We are happy that you are here. Enjoy!
                            </p>
                        </div>
                    </div>
                </div>
            </dialog>
        </div>
    )
}