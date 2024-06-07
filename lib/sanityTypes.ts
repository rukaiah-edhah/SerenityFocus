import { TypedObject } from '@portabletext/types';

export interface Author {
    _id: string;
    name: string;
}
  
export interface Category {
    _id: string;
    title: string;
}

export interface Author {
  name: string;
}

export interface Category {
  title: string;
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
      _ref: string;
    };
  };
  categories: Category[];
  publishedAt: string;
  body: TypedObject[]; 
}