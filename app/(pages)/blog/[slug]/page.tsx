import BlogContent from "@/components/Module/blog/BlogContent";
import RelatedPostsSection from "@/components/Module/blog/RelatedPostsSection";
import { getBlog, GetBlogMeta } from "@/controllers/BlogsController";

type Props = {
  params: Promise<{ slug: string }>;
};

const relatedPosts = [
  {
    id: 1,
    title: "مزایای استفاده از Next.js",
    image: "/testiamgeblog.jpg",
    date: "۱۴۰۳/۰۳/۲۸",
    author: "ادمین",
  },
  {
    id: 2,
    title: "آشنایی با Vite و مزایای آن",
    image: "/testiamgeblog.jpg",
    date: "۱۴۰۳/۰۲/۱۵",
    author: "ادمین",
  },
  {
    id: 3,
    title: "چرا TypeScript محبوب شده؟",
    image: "/testiamgeblog.jpg",
    date: "۱۴۰۳/۰۱/۰۵",
    author: "ادمین",
  },
  {
    id: 4,
    title: "بهترین کتابخانه‌های UI در سال ۲۰۲۵",
    image: "/testiamgeblog.jpg",
    date: "۱۴۰۳/۰۳/۰۹",
    author: "ادمین",
  },
];
export async function generateMetadata({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<any>;
}) {
  const { slug } = await params;
  const metas = await GetBlogMeta(slug);
  return {
    title: metas?.title,
  };
}
export default async function BlogPage({ params }: Props) {
  const { slug } = await params;
  const data = await getBlog(slug);
  console.log(data);

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-10">
      <BlogContent {...data} />
      <RelatedPostsSection posts={relatedPosts} />
    </div>
  );
}
