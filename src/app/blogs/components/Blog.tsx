import Link from "next/link";
import React from "react";

interface BlogComponentProps {
  title: string;
  time: string;
  slug: string;
}

const BlogComponent: React.FC<BlogComponentProps> = ({ title, time, slug }) => {
  return (
    <li className="flex gap-4">
      <span className="italic text-zinc-700	">
        <time dateTime={time}>{time}</time>
      </span>
      <Link href={`/blogs/${slug}`} className="text-blue-500	hover:underline">
        {title}
      </Link>
    </li>
  );
};

export default BlogComponent;
