import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";

// Font files can be colocated inside of `pages`
const myFontTitle = localFont({
  src: "./custom-title-font.otf",
  variable: "--font-title-awais",
});
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 ">
      <div className="">
        <p className={`${myFontTitle.className} text-9xl`}>Awais Isane</p>
      </div>
      <div className="flex justify-center gap-x-5">
        <ImageLinks
          src="/x-logo-black.svg"
          alt="logo of X.com"
          label="X"
          href="https://x.com/6001k1d"
        />
        <ImageLinks
          src="/github-mark.svg"
          alt="logo of github"
          label="Github"
          href="https://github.com/AwaisIsane"
        />
        <ImageLinks
          src="/linkedin_ico.webp"
          alt="logo of linkedin"
          label="Linkedin"
          href="https://www.linkedin.com/in/awaisisane"
        />
        <ImageLinks
          src="/mail_ico.webp"
          alt="logo of email"
          label="Email"
          href="mailto:awaisisane@gmail.com"
        />
        <ImageLinks
          src="/blog-solid.svg"
          alt="blog icon"
          label="Blog"
          href="/blogs"
        />
      </div>
    </main>
  );
}
const ImageLinks = ({
  src,
  alt,
  label,
  href,
}: {
  src: string;
  alt: string;
  label: string;
  href: string;
}) => {
  return (
    <Link href={href}>
      <div className="flex flex-col items-center justify-center h-16 min-w-8">
        <Image src={src} width={32} height={32} alt={alt} />
        <div> {label}</div>
      </div>
    </Link>
  );
};
