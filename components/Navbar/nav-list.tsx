import Link from "next/link"

export const ul_class = "flex flex-col gap-4 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-12"

export function NavList({ nav_items, theme_dropdown, children }:{
  nav_items: any,
  theme_dropdown: React.ReactNode,
  children: React.ReactNode
}) {
  return (
    <ul className={ul_class}>
      {nav_items.map((n: any, index: number) => (
        <li key={index}>
          <Link href={`${n === 'home' ? '/' : `/${n.toLowerCase()}`} `} className="text-base font-medium transition-all hover:opacity-60 uppercase">
            {n}
          </Link>
        </li>
      ))}
      <li className="text-base font-medium transition-all hover:opacity-60 uppercase">
        {children}
      </li>
      <li className="text-base font-medium transition-all uppercase">
        {theme_dropdown}
      </li>
    </ul>
  )
}