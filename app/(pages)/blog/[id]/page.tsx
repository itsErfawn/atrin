import BlogContent from "@/components/Module/blog/BlogContent";
import RelatedPostsSection from "@/components/Module/blog/RelatedPostsSection";

type Props = {
  params: { slug: string };
};

const fakeBlogData = {
  title: "چرا ری‌اکت انتخاب خوبی برای توسعه فرانت‌اند است؟",
  content: `
    ری‌اکت یکی از محبوب‌ترین کتابخانه‌های جاوااسکریپت برای ساخت رابط کاربری است.
    این کتابخانه با استفاده از مفاهیم کامپوننتی، رندر مجدد بهینه و تجربه کاربری سریع، گزینه‌ای عالی برای توسعه‌دهندگان وب محسوب می‌شود.
    در این مقاله با مزایای ری‌اکت آشنا می‌شویم.
  `,
  image: "/testiamgeblog.jpg",
  author: "علیرضا رضایی",
  date: "۱۴۰۳/۰۴/۰۳",
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

export default function BlogPage({ params }: Props) {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-10">
      <BlogContent {...fakeBlogData} />
      <RelatedPostsSection posts={relatedPosts} />
    </div>
  );
}
