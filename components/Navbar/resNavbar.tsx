'use client'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { IoMdMenu } from "react-icons/io";
import { useEffect } from "react";
import { themeChange } from 'theme-change'
import { NavList } from "./nav-list";

export function ResNavbar({
  nav_items, children, theme_dropdown
}: {
  nav_items: any,
  theme_dropdown: React.ReactNode,
  children: React.ReactNode
}){
  useEffect(() => {
    themeChange(false)
  }, [])

  return(
    <div className="flex flex-col lg:hidden absolute top-4 right-2"> 
      <Sheet>
        <SheetTrigger>
          <IoMdMenu className="w-6 h-6 mr-2"/>
        </SheetTrigger>
        <SheetContent side="top" className="bg-base-content/100 border-none text-base-300  flex">
          <div className="mr-4">
            <NavList nav_items={nav_items} theme_dropdown={theme_dropdown} children={children} />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}