import { ul_class } from "../Navbar/nav-list"
import Link from "next/link"

export function BlogNavList({ nav_items }: any) {
  return(
    <ul className={ul_class}>
      {nav_items.map((n: any, index: number) => (
        <li key={index} className="block p-1 font-sans text-sm antialiased font-normal leading-normal">
          {n === "Home" ? (
            <Link href="/" className="text-base font-medium transition-all hover:opacity-60 uppercase">
              {n}
            </Link>
          ) : (
            <>{n}</>
          )}
        </li>
      ))}
    </ul>
  )
}