import { sanityClient } from "./sanity.client";
import { Category, Post } from "./sanityTypes";

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

export const getRecentPosts = async (): Promise<Post[]> => {
  const query = `*[_type == "post"] | order(publishedAt desc)[0..2]{
    _id,
    title,
    "slug": slug.current,
    "mainImage": mainImage{
      asset->{
        _id,
        url
      }
    },
    publishedAt,
  }`;
  try {
    const posts: Post[] = await sanityClient.fetch(query);
    return posts;
  } catch (error) {
    console.error("Failed to fetch recent posts", error);
    return [];
  }
};

export const searchPosts = async (searchTerm: string): Promise<Post[]> => {
  const query = `*[_type == "post" && title match $searchTerm]{
    _id,
    title,
    "slug": slug.current,
    body,
    "mainImage": mainImage{
      asset->{
        _id,
        url
      }
    }
  }`;
  const params = { searchTerm: `*${searchTerm}*` };
  try {
    const posts: Post[] = await sanityClient.fetch(query, params);
    return posts;
  } catch (error) {
    console.error("Failed to search posts", error);
    return [];
  }
};

// May use it later to get posts by categories 

export const getCategories = async (): Promise<Category[]> => {
  const query = `*[_type == "category"]{
    _id,
    title,
    "slug": slug.current
  }`;
  try {
    const categories: Category[] = await sanityClient.fetch(query);
    return categories;
  } catch (error) {
    console.error("Failed to fetch categories", error);
    return [];
  }
};