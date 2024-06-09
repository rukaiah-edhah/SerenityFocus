import { sanityClient } from './sanity.client';
import { Post } from './sanityTypes';

export const getAllPosts = async (): Promise<Post[]> => {
  const query = `*[_type == "post"]{
    _id,
    title,
    "slug": slug.current,
    "author": author->{name},
    "mainImage": {
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