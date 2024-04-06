"use client";
import Link from "next/link";
import { useEffect } from "react";
import { themeChange } from "theme-change";

export default function BlogNavbar({
}) {
  useEffect(() => {
    themeChange(false); 
  }, []);

  return (
    <nav className="block top-0 uppercase z-10 w-full max-w-full px-4 py-2 lg:px-8 lg:py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-medium transition-all hover:opacity-60"
          >
            {" "}
            Home
          </Link>
          <Link
            href="/blog"
            className="text-sm font-medium transition-all hover:opacity-60"
          >
            Blog
          </Link>
          <div className="dropdown">
            <div
              tabIndex={0}
              className="flex items-center text-sm font-medium transition-all hover:opacity-60"
            >
              Theme
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-10 p-2 shadow bg-base-300 rounded-box"
            >
              <li>
                <input
                  type="radio"
                  data-set-theme=""
                  name="theme-dropdown"
                  className="btn btn-sm btn-block btn-ghost justify-start"
                  aria-label="Default"
                  value="retro"
                />
              </li>
              {/* Additional theme options here */}
            </ul>
          </div>
        </div>
        <div className="flex items-center gap-6">
          {/* Search bar */}
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
