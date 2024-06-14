import { Post } from '@/lib/sanityTypes';
import Link from 'next/link';

interface SearchResultsProps {
  isSearching: boolean;
  searchResults: Post[];
  searchTerm: string;
}

export function SearchResults({ isSearching, searchResults, searchTerm }: SearchResultsProps) {
  return (
    <div className="absolute top-full mt-2 w-full bg-white shadow-lg rounded-lg z-50">
      {isSearching && <p className="p-4 text-center">Searching...</p>}
      {!isSearching && searchResults.length === 0 && searchTerm !== '' && (
        <p className="p-4 text-center">No results found.</p>
      )}
      {!isSearching && searchResults.length > 0 && (
        <div className="p-4">
          <h2 className="text-lg font-bold mb-2">Search Results:</h2>
          <ul className="space-y-2">
            {searchResults.map((post) => (
              <li key={post._id}>
                <Link href={`/blog/${post.slug}`} className="block hover:bg-gray-100 p-2 rounded">
                  <div className="flex items-center gap-4">
                    {post.mainImage && (
                      <img
                        src={post.mainImage.asset.url}
                        alt={post.title}
                        className="w-12 h-12 object-cover rounded-lg"
                      />
                    )}
                    <span>{post.title}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}