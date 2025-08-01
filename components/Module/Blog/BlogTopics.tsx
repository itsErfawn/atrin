import React from "react";

const topics = [
  { name: "مطالب ورزشی ", number: 10 },
  { name: "درباره برندها ", number: 8 },
  { name: "مطالب آموزشی ", number: 4 },
  { name: "دسته‌بندی نشده ", number: 7 },
];

function BlogTopics() {
  return (
    <div>
      {topics.map((items) => (
        <div
          key={items.name}
          className="flex justify-between items-center space-y-4.5"
        >
          <div className="text-secondary !font-extralight text-sm">
            {items.name}
          </div>
          <div className="border border-secondary-20 px-1 rounded-md !font-extralight text-sm">
            {items.number}
          </div>
        </div>
      ))}
    </div>
  );
}

export default BlogTopics;
