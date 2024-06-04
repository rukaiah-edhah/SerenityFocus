import UserAuth from "@/components/UserAuth";
import BlogNavbar from "@/components/blog/BlogNavbar";
import SidebarDrawer from "@/components/blog/Sidebar";
import BlogPostList from "@/components/blog/BlogPostCard";
import { ThemeDropdown } from "@/components/Navbar/theme-dropdown";

export default function Blog() {
  return (
    <>
      <BlogNavbar
        theme_dropdown={<ThemeDropdown />}
        children={<UserAuth />}
      />
      <main data-theme="" className="flex">
        <div className="flex-1 p-4">
          <BlogPostList />
        </div>
        <aside className="w-80 p-4">
          <SidebarDrawer />
        </aside>
      </main>
    </>
  );
}
