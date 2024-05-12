import UserAuth from "@/components/UserAuth";
import BlogNavbar from "@/components/blog/BlogNavbar";
import SidebarDrawer from "@/components/blog/Sidebar";
import BlogPostList from "@/components/blog/BlogPostCard";

export default function Blog() {
  return (
    <>
      <BlogNavbar>
        <UserAuth />
      </BlogNavbar>
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
