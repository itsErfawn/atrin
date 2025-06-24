import { CalendarDays, User } from "lucide-react";

type BlogContentProps = {
  title: string;
  content: string;
  image: string;
  author: string;
  date: string;
};

export default function BlogContent({
  title,
  content,
  image,
  author,
  date,
}: BlogContentProps) {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">{title}</h1>

      <div className="flex items-center gap-4 text-gray-500 text-sm">
        <div className="flex items-center gap-1">
          <User className="w-4 h-4" />
          <span>{author}</span>
        </div>
        <div className="flex items-center gap-1">
          <CalendarDays className="w-4 h-4" />
          <span>{date}</span>
        </div>
      </div>

      <img src={image} alt={title} className="w-full rounded-xl shadow-md" />

      <div className="text-gray-700 leading-relaxed whitespace-pre-line">
        {content}
      </div>
    </div>
  );
}
