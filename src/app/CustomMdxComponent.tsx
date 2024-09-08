// components/mdx-remote.js
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypePrism from "rehype-prism-plus";

const components = {
  //   h1: (props: any) => (
  //     <h1 {...props} className="large-text">
  //       {props.children}
  //     </h1>
  //   ),
};

export function CustomMDX(props: any) {
  return (
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
  );
}
