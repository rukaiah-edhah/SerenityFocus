import Link from "next/link"

export const ul_class = "flex flex-col gap-4 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-12"

export function NavList({ nav_items }: any) {
  return (
    <ul className={ul_class}>
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
  )
}