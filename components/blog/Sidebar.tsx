'use client';

import { useEffect, useState } from 'react';
import { getRecentPosts, getCategories } from '@/lib/fetchData';
import { Post, Category } from '@/lib/sanityTypes';
import Link from 'next/link';

export default function SidebarDrawer() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [recentPosts, setRecentPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function fetchData() {
      const [categoriesData, recentPostsData] = await Promise.all([
        getCategories(),
        getRecentPosts()
      ]);
      setCategories(categoriesData);
      setRecentPosts(recentPostsData);
    }
    fetchData();
  }, []);

  return (
    <div className="drawer drawer-end lg:drawer-open">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="min-h-full menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
        <li>
            <span className="text-base font-bold mt-4">Recent Posts</span>
          </li>
          {recentPosts.map((post) => (
            <li key={post._id}>
              <Link href={`/blog/${post.slug}`}>
                {post.title}
              </Link>
            </li>
          ))}

          {/* <li>
            <span className="text-base font-bold">Categories</span>
          </li>
          {categories.map((category) => (
            <li key={category._id}>
              <Link href={`/category/${category.slug}`}>
                {category.title}
              </Link>
            </li>
          ))} */}

          <li>
            <span className="text-base font-bold mt-4">About the Authors</span>
            <div className="mt-2">
              <p className="text-sm">{`We're CS students who love finding new ways to stay productive. On this blog, we share our favorite tips and tricks to help you make the most of your time.`}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}