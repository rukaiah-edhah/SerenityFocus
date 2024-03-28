import sanityClient from "./sanityClient";
import { Post, Author, Category } from '../lib/sanityTypes';


export const getAllPosts = async (): Promise<Post[]> => {
    const query = `*[_type == "post"]{
      _id,
      title,
      "slug": slug.current,
      "author": author->{name},
      "mainImage": {
        "asset": mainImage.asset->_ref
      },
      "categories": categories[]->{title},
      publishedAt,
      body
    }`;
    try {
      const posts: Post[] = await sanityClient.fetch(query);
      return posts;
    } catch (error) {
      console.error("Failed to fetch posts", error);
      return [];
    }
};