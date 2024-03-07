import {
  PopoverContent,
} from "@/components/ui/popover"
import Image from "next/image"
import Link from "next/link"

export default function About() {
    return (
        <div>
            <PopoverContent className="flex flex-col items-center justify-center w-96 bg-base-300 border-none p-10 m-5">
                <div className="hidden lg:grid lg:grid-cols-3 lg:gap-6 mb-10">
                    <div className="rounded-full">
                        <Link href="https://www.shaadleehue.com/" target="_blank">
                            <Image 
                                src="/images/sleep.jpg"
                                width={100}
                                height={100}
                                alt="sleep"
                                className="transition-all rounded-full grayscale hover:filter-none hover:cursor-pointer"
                            />
                        </Link>
                    </div>
                    <div className="rounded-full">
                        <Link href="https://www.shaadleehue.com/" target="_blank">
                            <Image 
                                src="/images/sleep.jpg"
                                width={100}
                                height={100}
                                alt="slee"
                                className="transition-all rounded-full grayscale hover:filter-none hover:cursor-pointer"
                            />
                        </Link>
                    </div>
                    <div className="rounded-full">
                        <Link href="https://www.shaadleehue.com/" target="_blank">
                            <Image 
                                src="/images/sleep.jpg"
                                width={100}
                                height={100}
                                alt="slep"
                                className="transition-all rounded-full grayscale hover:filter-none hover:cursor-pointer"
                            />
                        </Link>
                    </div>
                </div>

                <div>
                    <h2 className="font-semibold text-xl mb-5">About us</h2>
                    <div>
                        <p>We are productivity nerds. Our goal is to provide you with the tools to optimize your time by creating an environment that keeps
                            you focused on your tasks. Our team consists of Rukaiah, Shaad, and Shevan. We are happy that you are here. Enjoy!
                        </p>
                    </div>
                </div>
            </PopoverContent>
        </div>
    )
}