import BlogComponent from "./components/Blog";
import { getBlogPosts } from "../utils";

// Font files can be colocated inside of `pages`

export default function BlogList() {
  const posts = getBlogPosts();
  return (
    <ul>
      {posts.map((post, i) => (
        <BlogComponent
          key={i}
          time={post.metadata.publishedAt}
          title={post.metadata.title}
          slug={post.slug}
        ></BlogComponent>
      ))}
    </ul>
  );
}
