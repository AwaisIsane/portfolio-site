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

export function CustomMDX(props: any) {
  return (
    <article>
      <MDXRemote
        {...props}
        components={{ ...components, ...(props.components || {}) }}
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
