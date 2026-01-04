import Image from "next/image";
import Link from "next/link";

const images = [
  "/images/1988.881232000/01.webp",
  "/images/1988.881232000/02.webp",
  "/images/1988.881232000/03.webp",
  "/images/1988.881232000/04.webp",
  "/images/1988.881232000/05.webp",
  "/images/1988.881232000/06.webp",
  "/images/1988.881232000/07.webp",
  "/images/1988.881232000/08.webp",
  "/images/1988.881232000/09.webp",
  "/images/1988.881232000/10.webp",
  "/images/1988.881232000/11.webp",
  "/images/1988.881232000/12.webp",
  "/images/1988.881232000/13.webp",
  "/images/1988.881232000/14.webp",
  "/images/1988.881232000/15.webp",
  "/images/1988.881232000/16.webp",
  "/images/1988.881232000/17.webp",
  "/images/1988.881232000/18.webp",
  "/images/1988.881232000/19.webp",
  "/images/1988.881232000/20.webp",
  "/images/1988.881232000/21.webp",
  "/images/1988.881232000/22.webp",
  "/images/1988.881232000/23.webp",
  "/images/1988.881232000/24.webp",
  "/images/1988.881232000/25.webp",
  "/images/1988.881232000/26.webp",
  "/images/1988.881232000/27.webp",
  "/images/1988.881232000/28.webp",
];

export default function Home() {
  return (
    <div className="">
      <header className="flex justify-center p-8">
        <Image
          src="/logo.png"
          alt="Action Toy Guide Logo"
          width={300}
          height={228}
          unoptimized={true}
        />
        {/* <nav>
          <Link href="/toys">Toys List</Link>
        </nav> */}
      </header>
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex justify-center mb-12">
          <Image
            src="/images/1988.881232000/01.webp"
            alt="Sample Toy Image"
            width={800}
            height={550}
            unoptimized={false}
            className="border-white border-8 shadow-2xl"
          />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
          {images.map((src) => (
            <Image
              src={src}
              alt="Sample Toy Image"
              width={200}
              height={138}
              unoptimized={false}
              className="border-white border-4 shadow-2xl"
            />
          ))}
        </div>
      </main>
    </div>
    // <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
    //   <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
    //     <Image
    //       className="dark:invert"
    //       src="/next.svg"
    //       alt="Next.js logo"
    //       width={100}
    //       height={20}
    //       priority
    //     />
    //     <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
    //       <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
    //         Action Toy Guide
    //       </h1>
    //       <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
    //         Coming soon.
    //       </p>
    //     </div>
    //     <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
    //       <a
    //         className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <Image
    //           className="dark:invert"
    //           src="/vercel.svg"
    //           alt="Vercel logomark"
    //           width={16}
    //           height={16}
    //         />
    //         Deploy Now
    //       </a>
    //       <a
    //         className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
    //         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Documentation
    //       </a>
    //     </div>
    //   </main>
    // </div>
  );
}
