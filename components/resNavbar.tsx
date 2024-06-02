'use client'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { IoMdMenu } from "react-icons/io";
import Link from "next/link";
import { useEffect } from "react";
import { themeChange } from 'theme-change'

export function ResNavbar({
  about, stats, children
}: {
  about: React.ReactNode, stats: React.ReactNode, children: React.ReactNode
}){
  useEffect(() => {
    themeChange(false)
  }, [])

  return(
    <div className="flex flex-col lg:hidden">
      <Sheet>
        <SheetTrigger>
          <IoMdMenu className="w-6 h-6 mr-2"/>
        </SheetTrigger>
        <SheetContent side="left" className="bg-base-content/100 border-none text-base-300 w-3/5 lg:w-1/5">
          <div className="mr-4">
            <ul className="flex flex-col gap-4 ">
                <li className="block p-1 font-sans text-sm antialiased font-normal leading-normal">
                    {about}
                </li>
                <li className="block p-1 font-sans text-sm antialiased font-normal leading-normal">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="flex items-center uppercase text-base font-medium transition-all hover:opacity-60">
                            Theme
                        </div>
                        <ul tabIndex={0} className="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 text-base-content rounded-box">
                            <li><input type="radio" data-set-theme="" data-act-class="ACTIVECLASS" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Default" value="retro"/></li>
                            <li><input type="radio" data-set-theme="coffee" data-act-class="ACTIVECLASS" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Coffee" value="coffee"/></li>
                            <li><input type="radio" data-set-theme="aqua" data-act-class="ACTIVECLASS" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Aqua" value="aqua"/></li>
                            <li><input type="radio" data-set-theme="valentine" data-act-class="ACTIVECLASS" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Valentine" value="valentine"/></li>
                        </ul>
                    </div>
                </li>
                <li className="block p-1 font-sans text-sm antialiased font-normal leading-normal">
                    {stats}
                </li>
                <li className="block p-1 font-sans text-sm antialiased font-normal leading-normal">
                    <Link href="/blog" className="text-base font-medium transition-all hover:opacity-60 uppercase">
                        Blog
                    </Link>
                </li>
                <li className="block p-1 font-sans text-sm antialiased font-normal leading-normal">
                    {children}
                </li>
            </ul>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}