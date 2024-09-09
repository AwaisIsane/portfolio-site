import { MetadataRoute } from "next";
import { getBlogPosts } from "./utils";
import { siteDetails } from "./site-details";
//this does not work when you run npm run dev see issue here https://github.com/vercel/next.js/issues/59136
export default function sitemap(): MetadataRoute.Sitemap {
  const url = siteDetails.siteUrl;
  const links = [
    {
      url: url, // Replace with your homepage
      lastModified: new Date(), //can add chane frequency and priority to each link here
    },
    {
      url: `${url}/projects`,
      lastModified: new Date(),
    },
    {
      url: `${url}/blogs`, // Replace with your contact page
      lastModified: new Date(),
    },
  ];
  getBlogPosts().forEach((post) => {
    links.push({
      url: `${url}/blog/${post.slug}`,
      lastModified: new Date(post.metadata.publishedAt),
    });
  });

  return links;
}
