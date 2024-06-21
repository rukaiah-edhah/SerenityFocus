'use client'
import Link from "next/link";
import { ResNavbar } from "./resNavbar";
import { ThemeDropdown } from "./theme-dropdown";
import { NavList } from "./nav-list";

export const nav_class = "block top-0 uppercase z-10 w-full max-w-full px-5 py-4 lg:px-8 lg:py-4"
export const nav_items = ["home", "blog", "stats"]

export default function Navbar({children}: {children: React.ReactNode}){  

    return(
        <nav data-theme="" className={nav_class}>
            <div className="flex items-center justify-center">
                <div></div>
                <div className="flex items-center gap-12">
                    <div className="hidden lg:block mr-4">
                      <NavList nav_items={nav_items} theme_dropdown={<ThemeDropdown />}>
                        {children}
                      </NavList>
                    </div>
                    <ResNavbar nav_items={nav_items} theme_dropdown={<ThemeDropdown />}>
                      {children}
                    </ResNavbar>
                </div>
            </div>
        </nav>
    )
}