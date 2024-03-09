'use client'
import Link from "next/link";
import { useEffect } from "react";
import { themeChange } from 'theme-change'
import About from "./About";
import Stats from "./Stats";

export default function Navbar(){
    useEffect(() => {
        themeChange(false)
    }, [])

    return(
        <nav data-theme="" className="block top-0 uppercase z-10 w-full max-w-full px-4 py-2 lg:px-8 lg:py-4">
            <div className="flex items-center justify-center ">
                <div className="flex items-center gap-12">
                    <div className="block mr-4">
                        <ul className="flex flex-row gap-4 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center md:gap-6 lg:gap-12">
                            <li className="block p-1 font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                <About />
                            </li>
                            <li className="block p-1 font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                <div className="dropdown">
                                    <div tabIndex={0} role="button" className="flex items-center text-base font-medium transition-all hover:opacity-60">
                                        Theme
                                    </div>
                                    <ul tabIndex={0} className="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box">
                                        <li><input type="radio" data-set-theme="" data-act-class="ACTIVECLASS" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Default" value="retro"/></li>
                                        <li><input type="radio" data-set-theme="coffee" data-act-class="ACTIVECLASS" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Coffee" value="coffee"/></li>
                                        <li><input type="radio" data-set-theme="aqua" data-act-class="ACTIVECLASS" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Aqua" value="aqua"/></li>
                                        <li><input type="radio" data-set-theme="valentine" data-act-class="ACTIVECLASS" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Valentine" value="valentine"/></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="block p-1 font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                <Stats />
                            </li>
                            <li className="block p-1 font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                <Link href="#" className="flex items-center text-base font-medium transition-all hover:opacity-60">Sign In</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}