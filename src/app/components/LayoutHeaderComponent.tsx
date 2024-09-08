import Link from "next/link";

export default function LayoutHeaderComponent({
  children,
  navSection,
}: {
  children: React.ReactNode;
  navSection: string;
}) {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <header>
        <h1 className="text-4xl">Awais Isane - {navSection}</h1>
        <nav className="flex gap-3 my-3 text-lg text-blue-500">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/blogs" className="hover:underline">
            Blog
          </Link>
          <Link href="/projects" className="hover:underline">
            Projects
          </Link>
        </nav>
      </header>
      <div>{children}</div>
    </div>
  );
}
