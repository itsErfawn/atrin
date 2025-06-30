import { BlogType } from "@/types/blogs";
import { CalendarDays, User } from "lucide-react";

export default function BlogContent({
  title,
  content,
  thumbnail,
  createdAt,
}: BlogType) {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">{title}</h1>

      <div className="flex items-center gap-4 text-gray-500 text-sm">
        <div className="flex items-center gap-1">
          <User className="w-4 h-4" />
          <span>admin</span>
        </div>
        <div className="flex items-center gap-1">
          <CalendarDays className="w-4 h-4" />
          <span>{createdAt.toLocaleDateString()}</span>
        </div>
      </div>

      <img
        src={thumbnail}
        alt={title}
        className="w-full rounded-xl shadow-md"
      />

      <div
        className="prose prose-custom prose-lg max-w-none text-gray-800"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </div>
  );
}
