import { notFound } from "next/navigation";
import { getBlogPosts } from "../utils";
import { CustomMDX } from "../customComponent";

export function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPost({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const posts = getBlogPosts();
  const post = posts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return <CustomMDX source={post.content} />;
}
