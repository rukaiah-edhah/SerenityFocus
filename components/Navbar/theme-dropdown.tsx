'use client'
import { useEffect } from "react";
import { themeChange } from 'theme-change'


export function ThemeDropdown() {
  useEffect(() => {
    themeChange(false)
  }, [])

  return (
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
  )
}