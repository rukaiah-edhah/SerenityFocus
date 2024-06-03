'use client'
import Link from "next/link";
import { useEffect } from "react";
import { themeChange } from 'theme-change'
import About from "./About";
import Stats from "./Stats";
import { ResNavbar } from "./resNavbar";
import { ThemeDropdown } from "./theme-dropdown";

export default function Navbar({children}: {children: React.ReactNode}){  
    const nav_items = [<About />, <Stats />, <ThemeDropdown />, "Blog", children]

    return(
        <nav data-theme="" className="block top-0 uppercase z-10 w-full max-w-full px-4 py-2 lg:px-8 lg:py-4">
            <div className="flex items-center justify-between ">
                <div></div>
                <div className="flex items-center gap-12">
                    <div className="hidden lg:block mr-4">
                        <ul className="flex flex-row gap-4 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center md:gap-6 lg:gap-12">
                            {nav_items.map((n, index) => (
                              <li key={index} className="block p-1 font-sans text-sm antialiased font-normal leading-normal">
                                {n === "Blog" ? (
                                  <Link href="/blog" className="text-base font-medium transition-all hover:opacity-60 uppercase">
                                    {n}
                                  </Link>
                                ) : (
                                  <>{n}</>
                                )}
                              </li>
                            ))}
                        </ul>
                    </div>
                    <ResNavbar 
                      nav_items={nav_items}
                    />
                </div>
            </div>
        </nav>
    )
}