import React from "react";
import Image from "next/image";
import Link from "next/link";

type BlogCardProps = {
  title: string;
  image: string;
};

function BlogCard({ title, image }: BlogCardProps) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-md hover:-translate-y-5 transition-transform duration-400 overflow-hidden flex flex-col">
      <div className="w-full h-[225px] relative md:h-[140px] ">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-3xl p-3"
        />
      </div>
      <div className="p-[12px] flex flex-col justify-between items-center ">
        <h5 className="text-secondary text-sm text-center">{title}</h5>

        <button className="button w-30 bg-secondary-20 text-secondary hover:bg-primary hover:text-white transition-all duration-300 mt-4">
          <Link
            href="#"
            className="text-[12px] text-primary-700 flex items-center justify-center gap-1 !font-extralight"
          >
            مطالعه بیشتر
            <Image
              src="/image/blog/profile-2user23.svg"
              alt="icon"
              width={20}
              height={20}
            />
          </Link>
        </button>
      </div>
    </div>
  );
}

export default BlogCard;
