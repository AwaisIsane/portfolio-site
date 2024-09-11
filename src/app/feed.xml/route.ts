import RSS from "rss";
import { siteDetails } from "../site-details";
import { getBlogPosts } from "../utils";

export async function GET() {
  const feed = new RSS({
    title: "Awais Isane Blog",
    description: "blogs written by Awais",
    site_url: siteDetails.siteUrl,
    feed_url: `${siteDetails.siteUrl}/feed.xml`,
    copyright: `${new Date().getFullYear()} Awais Isane`,
    language: "en",
    pubDate: new Date(),
  });

  const posts = getBlogPosts();
  posts.map((post) => {
    feed.item({
      title: post.metadata.title,
      guid: `${siteDetails.siteUrl}/blogs/${post.slug}`,
      url: `${siteDetails.siteUrl}/blogs/${post.slug}`,
      date: post.metadata.publishedAt,
      description: post.metadata.summary || "",
      author: "Awais Isane",
    });
  });

  return new Response(feed.xml({ indent: true }), {
    headers: {
      "Content-Type": "application/atom+xml; charset=utf-8",
    },
  });
}
