export type WpProduct = {
    id: number;
    date: string;
    date_gmt: string;
    guid: {
      rendered: string;
    };
    modified: string;
    modified_gmt: string;
    slug: string;
    status: string;
    type: string;
    link: string;
    title: {
      rendered: string;
    };
    content: {
      rendered: string;
      protected: boolean;
    };
    excerpt: {
      rendered: string;
      protected: boolean;
    };
    featured_media: number;
    comment_status: string;
    ping_status: string;
    template: string;
    meta: any[];
    product_brand: any[];
    product_cat: number[];
    product_tag: any[];
    class_list: Record<string, string>; // یا string[] اگر بخوای لیست باشه
    gallery_images: number[];
    yoast_head: string;
    yoast_head_json: {
      title: string;
      description: string;
      robots: Record<string, string>;
      canonical: string;
      og_locale: string;
      og_type: string;
      og_title: string;
      og_description: string;
      og_url: string;
      og_site_name: string;
      article_modified_time: string;
      og_image: {
        width: number;
        height: number;
        url: string;
        type: string;
      }[];
      twitter_card: string;
      twitter_misc: Record<string, string>;
      schema: any;
    };
    _links: {
      self: { href: string; targetHints?: any }[];
      collection: { href: string }[];
      about: { href: string }[];
      replies?: { embeddable: boolean; href: string }[];
      "wp:featuredmedia"?: { embeddable: boolean; href: string }[];
      "wp:attachment"?: { href: string }[];
      "wp:term"?: {
        taxonomy: string;
        embeddable: boolean;
        href: string;
      }[];
      curies: {
        name: string;
        href: string;
        templated: boolean;
      }[];
    };
  };
  
export interface ProductCategory {
    id: number;
    count: number;
    description: string;
    link: string;
    name: string;
    slug: string;
    taxonomy: string;
    parent: number;
    meta: any[]; // چون داخل meta داده‌ای نیومده، any[] در نظر گرفتم
    yoast_head: string;
    yoast_head_json: {
      title: string;
      description: string;
      robots: {
        index: string;
        follow: string;
        "max-snippet": string;
        "max-image-preview": string;
        "max-video-preview": string;
      };
      canonical: string;
      og_locale: string;
      og_type: string;
      og_title: string;
      og_description: string;
      og_url: string;
      og_site_name: string;
      twitter_card: string;
      schema: {
        "@context": string;
        "@graph": Array<Record<string, any>>;
      };
    };
    _links: {
      self: Array<{ href: string; targetHints?: { allow: string[] } }>;
      collection: Array<{ href: string }>;
      about: Array<{ href: string }>;
      up?: Array<{ embeddable: boolean; href: string }>;
      "wp:post_type": Array<{ href: string }>;
      curies: Array<{ name: string; href: string; templated: boolean }>;
    };
  }
  