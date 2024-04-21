import UserAuth from "@/components/UserAuth";
import BlogNavbar from "@/components/blog/BlogNavbar";
import SidebarDrawer from "@/components/blog/Sidebar";

export default function Blog() {
  return (
    <>
      <BlogNavbar>
        <UserAuth />
      </BlogNavbar>
      <main data-theme="">
        <SidebarDrawer />
      </main>
    </>
  );
}
