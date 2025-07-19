import BlogContent from "@/components/module/blog/BlogContent";
import RelatedPostsSectionblog from "@/components/module/blog/RelatedPostsSectionblog";
import { getBlog, GetBlogMeta } from "@/controllers/BlogsController";

type Props = {
  params: Promise<{ slug: string }>;
};

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
  const { relatedBlog } = data;

  return (
    <>
      <div className="blog-content-container">
        <BlogContent {...data} />
      </div>
      <div className="container">
        <RelatedPostsSectionblog posts={relatedBlog} />
      </div>
    </>
  );
}
