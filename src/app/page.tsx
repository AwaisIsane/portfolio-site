import Image from "next/image";
import localFont from "next/font/local";

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
        <ImageLinks src="/x-logo-black.png" alt="logo of X.com" label="X" />
        <ImageLinks
          src="/github-mark.svg"
          alt="logo of github"
          label="Github"
        />
        <ImageLinks
          src="/linkedin_ico.webp"
          alt="logo of linkedin"
          label="Linkedin"
        />
        <ImageLinks src="/mail_ico.webp" alt="logo of email" label="Email" />
        <ImageLinks src="/blog-solid.svg" alt="blog icon" label="Blog" />
      </div>
    </main>
  );
}
const ImageLinks = ({
  src,
  alt,
  label,
}: {
  src: string;
  alt: string;
  label: string;
}) => {
  return (
    <div className="flex flex-col items-center">
      <Image src={src} width={32} height={32} alt={alt} />
      <div> {label}</div>
    </div>
  );
};
