'use client'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { IoMdMenu } from "react-icons/io";
import Link from "next/link";
import { useEffect } from "react";
import { themeChange } from 'theme-change'

export function ResNavbar({
  nav_items
}: any){
  useEffect(() => {
    themeChange(false)
  }, [])

  return(
    <div className="flex flex-col lg:hidden  absolute top-4 right-2"> 
      <Sheet>
        <SheetTrigger>
          <IoMdMenu className="w-6 h-6 mr-2"/>
        </SheetTrigger>
        <SheetContent side="left" className="bg-base-content/100 border-none text-base-300 w-3/5 lg:w-1/5">
          <div className="mr-4">
            <ul className="flex flex-col gap-4 ">
              {nav_items.map((n: any, index: number) => (
                <li key={index} className="block p-1 font-sans text-sm antialiased font-normal leading-normal">
                  {n === "Blog" || n === "Home" ? (
                    <Link href={n === "Blog" ? "/blog" : "/"} className="text-base font-medium transition-all hover:opacity-60 uppercase">
                      {n}
                    </Link>
                  ) : (
                    <>{n}</>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}