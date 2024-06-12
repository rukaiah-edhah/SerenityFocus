import { Post } from "@/lib/sanityTypes";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/lib/sanityImage";

interface PostContentProps {
  post: Post;
}

export default function PostContent({ post }: PostContentProps) {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
        {post.title}
      </h1>
      {post.mainImage && (
        <div className="mb-8">
          <img
            src={urlFor(post.mainImage.asset)}
            alt={post.title}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      )}
      <div className="mt-6 prose prose-lg mx-auto text-gray-700">
        <PortableText value={post.body} />
      </div>
    </div>
  );
}
