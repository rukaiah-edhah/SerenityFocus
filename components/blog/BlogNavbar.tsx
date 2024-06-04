"use client";
import Link from "next/link";
import { useEffect } from "react";
import { themeChange } from "theme-change";
import { BlogNavList } from "./blog-nav-list";
import { nav_class } from "../Navbar/Navbar";
import { ResNavbar } from "../Navbar/resNavbar";
import { BlogSearch } from "./blog-search";

export default function BlogNavbar({
  theme_dropdown, children,
}: {
  theme_dropdown: React.ReactNode, children: React.ReactNode;
}) {
  useEffect(() => {
    themeChange(false);
  }, []);

  const nav_items = ["Home", theme_dropdown, children, <BlogSearch />];

  return (
    <nav
      data-theme=""
      className={nav_class}
    >
      <div className="flex items-center justify-end">
        <div className="hidden lg:flex items-end gap-12">
          <BlogNavList nav_items={nav_items} />
        </div>
        <ResNavbar
          nav_items={nav_items}
        />
      </div>
    </nav>
  );
}
