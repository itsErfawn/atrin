import { CalendarDays, User } from "lucide-react";
import Link from "next/link";

type RelatedPostProps = {
  title: string;
  image: string;
  author?: string;
  createdAt: string;
  slug: string;
};

export default function RelatedPostCard({
  title,
  image,
  author,
  createdAt,
  slug,
}: RelatedPostProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="rounded-xl shadow hover:shadow-lg transition p-3 bg-white"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover rounded-lg mb-3"
      />
      <h3 className="font-bold text-sm text-gray-800 mb-1 line-clamp-2">
        {title}
      </h3>
      <div className="flex justify-between">
        <div className="flex items-center gap-2 text-gray-500 text-xs">
          <User className="w-3 h-3" />
          <span>{author}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-500 text-xs mt-1">
          <CalendarDays className="w-3 h-3" />
          <span>
            {createdAt ? new Date(createdAt).toLocaleDateString() : ""}
          </span>
        </div>
      </div>
    </Link>
  );
}
