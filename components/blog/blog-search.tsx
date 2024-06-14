'use client';

import { useState, useCallback } from 'react';
import { searchPosts } from '@/lib/fetchData';
import { Post } from '@/lib/sanityTypes';
import { debounce } from '@/lib/utils';
import { SearchResults } from './SearchResults';

export function BlogSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<Post[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = useCallback(
    debounce(async (term: string) => {
      if (term.trim() !== '') {
        setIsSearching(true);
        const results = await searchPosts(term);
        setSearchResults(results);
        setIsSearching(false);
      } else {
        setSearchResults([]);
        setIsSearching(false);
      }
    }, 300),
    []
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    setIsSearching(true);
    handleSearch(term);
  };

  return (
    <div className="relative flex items-center gap-6">
      <input 
        type="search"
        placeholder="Search..."
        className="input input-bordered text-base-content"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <SearchResults
        isSearching={isSearching}
        searchResults={searchResults}
        searchTerm={searchTerm}
      />
    </div>
  );
}