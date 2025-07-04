import RelatedPostCard from "./RelatedPostCard";

type RelatedPost = {
  id: number;
  title: string;
  thumbnail: string;
  createdAt: Date;
  slug:string;
};

type Props = {
  posts: RelatedPost[];
};

export default function RelatedPostsSection({ posts }: Props) {
  return (
    <div className="my-12 space-y-4">
      <h2 className="text-2xl font-semibold text-gray-800">مطالب مرتبط</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {posts.map((post) => (
          <RelatedPostCard
            key={post.id}
            title={post.title}
            image={post.thumbnail}
            author={"admin"}
            createdAt={post.createdAt}
            slug={post.slug}
          />
        ))}
      </div>
    </div>
  );
}
