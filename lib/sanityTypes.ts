export interface Author {
    _id: string;
    name: string;
}
  
export interface Category {
    _id: string;
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
      _id: string;
      asset: {
        _ref: string;
      };
    };
    categories: Category[];
    publishedAt: string;
    body: object[];
}
  