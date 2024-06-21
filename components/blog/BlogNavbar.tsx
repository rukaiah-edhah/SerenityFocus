"use client";
import Link from "next/link";
import { useEffect } from "react";
import { themeChange } from "theme-change";
import { nav_class } from "../Navbar/Navbar";
import { ResNavbar } from "../Navbar/resNavbar";
import { BlogSearch } from "./blog-search";
import { NavList } from "../Navbar/nav-list";
import { nav_items } from "../Navbar/Navbar";

export default function BlogNavbar({
 children,
}: {
 children: React.ReactNode;
}) {
  useEffect(() => {
    themeChange(false);
  }, []);

  const nav_item = nav_items.slice(0, 2);

  return (
    <nav
      data-theme=""
      className={nav_class}
    >
      <div className="flex items-center justify-end">
        <div className="hidden lg:flex items-end gap-12">
          <NavList nav_items={nav_item} theme_dropdown={<BlogSearch />}>
            {children}
          </NavList>
        </div>
        <ResNavbar
          nav_items={nav_items}
          theme_dropdown={<BlogSearch />}
        >
          {children}
        </ResNavbar>
      </div>
    </nav>
  );
}
