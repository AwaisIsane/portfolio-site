import { getBlogPosts } from "./utils";
import Link from "next/link";

// Font files can be colocated inside of `pages`

export default function BlogList() {
  const posts = getBlogPosts();
  return posts.map((post, i) => (
    <div key={i} className="blog-post">
      <h2>{post.metadata.title}</h2>
      <p>Published: {post.metadata.publishedAt}</p>
      <p>{post.metadata.summary}</p>
      <Link href={`/blog/${post.slug}`}>Read more</Link>
      <br />
    </div>
  ));
}
