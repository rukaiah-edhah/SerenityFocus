'use client'

import { useEffect, useState } from 'react';
import { getAllPosts } from '@/lib/fetchPosts';
import { PortableText } from '@portabletext/react';
import { Post } from '@/lib/sanityTypes';
import { urlFor } from '@/lib/sanityImage';

export default function BlogPostList() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      const data = await getAllPosts();
      setPosts(data);
    }
    fetchPosts();
  }, []);

  return (
    <div className="lg:grid md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {posts.map((post, index) => (
        <div key={index} className="card bg-base-100 shadow-xl">
          <figure>
            {post.mainImage && post.mainImage.asset && post.mainImage.asset.url ? (
              <>
                {console.log("Image Asset:", post.mainImage.asset)}
                {console.log("Image URL:", urlFor(post.mainImage.asset))}
                <img
                  src={urlFor(post.mainImage.asset)}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
              </>
            ) : (
              <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                <span>No Image</span>
              </div>
            )}
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl font-bold">
              {post.title}
            </h2>
            <p className="text-sm text-gray-500">
              By {post.author?.name || 'Unknown Author'} | {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : 'Invalid Date'}
            </p>
            <div className="card-actions justify-start mt-4">
              <button className="btn btn-primary">Read More</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}