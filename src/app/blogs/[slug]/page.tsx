import { notFound } from "next/navigation";
import { getBlogPosts } from "../../utils";
import { CustomMDX } from "../../CustomMdxComponent";

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

  return (
    <main>
      <CustomMDX source={post.content} />
    </main>
  );
}
