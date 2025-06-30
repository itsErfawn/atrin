export interface BlogType {
    id: number;
    slug: string;
    thumbnail: string;
    title: string;
    content: string;
    description: string;
    createdAt: Date;
  }
  
  export type BlogCard = Pick<BlogType, "id" | "slug" | "thumbnail" | "title" | "createdAt">;
  
  export type BlogCardCollection = BlogCard[];
  