"use client";
import Link from "next/link";
import { useEffect } from "react";
import { themeChange } from "theme-change";

export default function BlogNavbar({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <nav
      data-theme=""
      className="block top-0 uppercase z-10 w-full max-w-full px-4 py-2 lg:px-8 lg:py-4 bg-none"
    >
      <div className="flex items-center justify-end gap-6">
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="font-normal transition-all hover:opacity-60"
          >
            {" "}
            Home
          </Link>
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="flex items-center text-base font-normal transition-all hover:opacity-60"
            >
              Theme
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box"
            >
              <li>
                <input
                  type="radio"
                  data-set-theme=""
                  data-act-class="ACTIVECLASS"
                  name="theme-dropdown"
                  className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                  aria-label="Default"
                  value="retro"
                />
              </li>
              <li>
                <input
                  type="radio"
                  data-set-theme="coffee"
                  data-act-class="ACTIVECLASS"
                  name="theme-dropdown"
                  className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                  aria-label="Coffee"
                  value="coffee"
                />
              </li>
              <li>
                <input
                  type="radio"
                  data-set-theme="aqua"
                  data-act-class="ACTIVECLASS"
                  name="theme-dropdown"
                  className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                  aria-label="Aqua"
                  value="aqua"
                />
              </li>
              <li>
                <input
                  type="radio"
                  data-set-theme="valentine"
                  data-act-class="ACTIVECLASS"
                  name="theme-dropdown"
                  className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                  aria-label="Valentine"
                  value="valentine"
                />
              </li>
            </ul>
          </div>
        </div>
        <li className="block p-1 font-sans text-sm antialiased font-normal leading-normal">
          {children}
        </li>
        <div className="flex items-center gap-6">
          <input
            type="search"
            placeholder="Search..."
            className="input input-bordered"
          />
        </div>
      </div>
    </nav>
  );
}
