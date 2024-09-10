---
title: "how i created my portfolio site"
publishedAt: "2024-09-10"
summary: "how i created my portfolio site using nextjs with rss , markdown support and actions to deploy to github pages"
---

# **My Portfolio Site**

Recently i was learning nextjs so i decided to create my own portfolio site In this post, I'll walk you through the key features and technologies that make up my site, including Markdown support, RSS feeds, and deployment to GitHub Pages.
you can check out the code here [https://github.com/AwaisIsane/portfolio-site](https://github.com/AwaisIsane/portfolio-site)

## **Features**

My portfolio site boasts several key features:

### **Markdown Support**

\
i used markdown to create a clean and organized layout for my portfolio site. It's easy to write, read, and edit using markdown \
i used [next-MDX-remote](https://github.com/hashicorp/next-mdx-remote) to render Markdown files as html. i created a custom component to render the markdown files.

```jsx
// components/mdx-remote.js
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypePrism from "rehype-prism-plus";

const components = {
  h1: (props: any) => (
    <h1 {...props} className="text-xl">
      {props.children}
    </h1>
  ),
  a: (props: any) => (
    <a {...props} className="text-blue-500 hover:underline">
      {props.children}
    </a>
  ),
};

export function CustomMDX({ source }: { source: string }) {
  return (
    <article>
      <MDXRemote
        source={source}
        components={components}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [rehypePrism],
          },
        }}
      />
    </article>
  );
}
```

\
this would parse my markdown string to html i also used remark,rehype plugins to style up my markdown files

### **RSS Feeds**

\
To make it easy for visitors to stay up-to-date with my latest blogs i have created a custom rss for my blogs i used node rss package to help in genrating rss feed dynamically
\
i created a file `app/feed.xml/route.ts` which will generate rss feed for all my blog posts

```ts
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
      guid: `${siteDetails.siteUrl}/${post.slug}`,
      url: `${siteDetails.siteUrl}/${post.slug}`,
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
```

### **Deployment to GitHub Pages**

\
Finally, I'm utilizing the power of GitHub Actions to deploy my site to GitHub Pages, ensuring that any changes I make are instantly reflected on the live site. This process is fully automated, saving me the effort
\
read more about it [here](deploy-nextjs-site-to-github-pages)
