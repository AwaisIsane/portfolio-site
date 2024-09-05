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
        <div className="flex flex-col items-center">
          <Image
            src="/x-logo-black.png"
            width={32}
            height={32}
            alt="logo of X.com"
          />
          <div> X </div>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src="/github-mark.svg"
            width={32}
            height={32}
            alt="logo of github"
          />
          <div>github</div>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src="/linkedin_ico.webp"
            width={32}
            height={32}
            alt="logo of linkedin"
          />
          <div>linkedin</div>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src="/mail_ico.webp"
            width={32}
            height={32}
            alt="logo of email"
          />
          <div>email</div>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/resume.webp" width={32} height={32} alt="resume icon" />
          <div>resume</div>
        </div>
      </div>
    </main>
  );
}
