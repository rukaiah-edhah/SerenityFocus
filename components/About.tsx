import Image from "next/image"
import Link from "next/link"

type Element = HTMLElement | null;

export default function _About() {
    return (
      <>
        <div className="flex lg:items-center lg:justify-center lg:text-center lg:grid lg:grid-cols-3 lg:gap-2 mb-10 ">
            <div className="rounded-full ">
                <Link href="https://www.linkedin.com/in/shevan-abdulla-677685236/" target="_blank" className="flex justify-center">
                    <Image 
                        src="/images/Shevan.jpg"
                        width={100}
                        height={100}
                        alt="shevan"
                        className="transition-filter duration-500 ease-in-out rounded-full object-fill object-center grayscale hover:filter-none hover:cursor-pointer"
                    />
                </Link>
            </div>
            <div className="rounded-full ">
                <Link href="https://www.linkedin.com/in/rukaiah-edhah/" target="_blank" className="flex justify-center">
                    <Image 
                        src="/images/Rukaiah.jpg"
                        width={100}
                        height={100}
                        alt="rukaiah"
                        className="transition-filter duration-500 ease-in-out rounded-full object-cover object-center grayscale hover:filter-none hover:cursor-pointer"
                    />
                </Link>
            </div>
            <div className="rounded-full">
                <Link href="https://www.linkedin.com/in/rleehue-joseph/" target="_blank" className="flex justify-center">
                    <Image 
                        src="/images/Shaad.png"
                        width={100}
                        height={100}
                        alt="shaad"
                        className="transition-filter duration-500 ease-in-out rounded-full object-cover object-center grayscale hover:filter-none hover:cursor-pointer"
                    />
                </Link>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center normal-case m-10 lg:m-0">
              <h2 className="font-semibold text-xl mb-5">About us</h2>
              <div className="font-medium text-base">
                  <p>We are the productivity nerds. Our goal is to provide you with the tools to optimize your time by creating an environment that keeps
                      you focused on your tasks. Our team consists of Rukaiah, Shaad, and Shevan. We are happy that you are here. Enjoy!
                  </p>
              </div>
          </div>
        </>
    )
}