import { TypedObject } from '@portabletext/types';

export interface Author {
    _id: string;
    name: string;
}
  
export interface Category {
  _id: string;
  title: string;
  slug: string;
}

export interface Post {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  author: Author;
  mainImage: {
    asset: {
      _ref: { _id: string; url: string; };
      _id: string;
      url: string;
    };
  };
  categories: Category[];
  publishedAt: string;
  body: TypedObject[]; 
}

export interface PostProps {
  params: {
    slug: string;
  };
}