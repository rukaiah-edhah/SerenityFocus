import { PostProps } from '@/lib/sanityTypes';
import PostContent from '@/components/blog/PostContent';
import BlogNavbar from '@/components/blog/BlogNavbar';
import UserAuth from '@/components/UserAuth';
import { ThemeDropdown } from '@/components/Navbar/theme-dropdown';
import { fetchPostData } from '@/lib/fetchData';

export default async function PostPage({ params }: PostProps) {
  const post = await fetchPostData(params.slug);

  if (!post) {
    return (
      <div className="flex flex-col justify-center min-h-screen text-center text-gray-600 container">
        <h2 className="text-2xl font-semibold mb-4">Post not found</h2>
        <p className="text-gray-600">
          Sorry, the content you are looking for does not exist.
        </p>
      </div>
    );
  }

  return (
    <>
      <BlogNavbar>
        <UserAuth />
      </BlogNavbar>
      <main data-theme="" className="flex">
        <PostContent post={post} /> 
      </main>
    </>
  );
}
