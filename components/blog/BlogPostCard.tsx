'use client'

import { useEffect, useState } from 'react';
import { getAllPosts } from '@/lib/fetchPosts';
import { urlFor } from '@/lib/sanityImage';
import { PortableText } from '@portabletext/react';
import { Post } from '@/lib/sanityTypes';

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
            <img
              src={urlFor(post.mainImage).url()}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl font-bold">
              {post.title}
            </h2>
            <p className="text-sm text-gray-500">By {post.author.name} | {new Date(post.publishedAt).toLocaleDateString()}</p>
            <PortableText value={post.body} />
            <div className="card-actions justify-start mt-4">
              <button className="btn btn-primary">Read More</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}