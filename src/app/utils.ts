import path from "path";
import fs from "fs";

type BlogMetadata = {
  title: string;
  publishedAt: string;
  weight?: string;
  summary?: string;
  image?: string;
};

export type Posts = {
  metadata: BlogMetadata;
  slug: string;
  content: string;
};

export type Project = {
  content: string;
};

function readMDXFile(filePath: string) {
  let rawContent = fs.readFileSync(filePath, "utf-8");
  return parseFrontmatter(rawContent);
}

function getMDXData(dir: string) {
  let mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    let { metadata, content } = readMDXFile(path.join(dir, file));
    let slug = path.basename(file, path.extname(file));
    return {
      metadata,
      slug,
      content,
    };
  });
}
const sortPosts = (posts: Posts[]) => {
  return posts.toSorted((a, b) => {
    if ("weight" in a.metadata && "weight" in b.metadata) {
      return Number(b.metadata.weight) - Number(a.metadata.weight);
    } else if ("weight" in a.metadata) {
      return -1;
    } else if ("weight" in b.metadata) {
      return 1;
    }
    return (
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime()
    );
  });
};

export function getBlogPosts(sort = true): Posts[] {
  const data = getMDXData(
    path.join(process.cwd(), "src", "app", "blogs", "posts")
  );
  return sort ? sortPosts(data) : data;
}
export function getProjects(sort = true): Posts[] {
  const data = getMDXData(
    path.join(process.cwd(), "src", "app", "projects", "posts")
  );
  return sort ? sortPosts(data) : data;
}

function getMDXFiles(dir: string) {
  return fs
    .readdirSync(dir)
    .filter((file) => [".mdx", ".md"].includes(path.extname(file)));
}

function parseFrontmatter(fileContent: string) {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  let match = frontmatterRegex.exec(fileContent);
  let frontMatterBlock = match![1];
  let content = fileContent.replace(frontmatterRegex, "").trim();
  let frontMatterLines = frontMatterBlock.trim().split("\n");
  let metadata: Partial<BlogMetadata> = {};

  frontMatterLines.forEach((line) => {
    let [key, ...valueArr] = line.split(": ");
    let value = valueArr.join(": ").trim();
    value = value.replace(/^['"](.*)['"]$/, "$1"); // Remove quotes
    metadata[key.trim() as keyof BlogMetadata] = value;
  });

  return { metadata: metadata as BlogMetadata, content };
}
