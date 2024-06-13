import { sanityClient } from "./sanity.client";
import { Post } from "./sanityTypes";

export const getAllPosts = async (): Promise<Post[]> => {
  const query = `*[_type == "post"]{
    _id,
    title,
    "slug": slug.current,
    "author": author->{name},
    "mainImage": mainImage{
    asset->{
      _id,
      url
    }
  },
    "categories": categories[]->{title},
    publishedAt,
    body,
  }`;
  try {
    const posts: Post[] = await sanityClient.fetch(query);
    return posts;
  } catch (error) {
    console.error("Failed to fetch posts", error);
    return [];
  }
};

export const fetchPostData = async (slug: string): Promise<Post | null> => {
  const query = `*[_type == "post" && slug.current == $slug][0]`;
  try {
    return await sanityClient.fetch(query, { slug });
  } catch (error) {
    console.error(`Failed to fetch post with slug: ${slug}`, error);
    return null;
  }
};

export const generateStaticParams = async () => {
  const query = `*[_type == "post"]{ "slug": slug.current }`;
  try {
    const posts = await sanityClient.fetch(query);
    return posts.map((post: { slug: string }) => ({ slug: post.slug }));
  } catch (error) {
    console.error("Failed to fetch static params", error);
    return [];
  }
};
