import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header/Header";

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
    <div className="grid w-full mx-auto">
      <div className="w-7xl mx-auto py-4 flex gap-8 justify-end text-white text-sm">
        <Link href="/">About</Link>
        <Link href="/">Kenner Products</Link>
        <Link href="/">Instagram</Link>
        <Link href="/" className="bg-pink-400 px-4 py-1 rounded-md">
          Get In Touch
        </Link>
      </div>
      <Header />

      <main className="w-7xl mx-auto pb-12">
        <div className="flex pb-12">
          <div className="w-3/4 pr-12">
            <Image
              src="/images/1988.881232000/01.webp"
              alt="Sample Toy Image"
              width={1600}
              height={1100}
              unoptimized={false}
              className="border-white border-12 shadow-lg/50"
            />
            <p className="flex justify-center p-4">
              <span className="font-bold">1</span> &nbsp;/ 28
            </p>
          </div>
          <div className="w-1/4">
            <div className="border-2 border-purple-300 text-white p-8 rounded-xl">
              <h1 className="text-4xl font-bold pb-4">1988 Action Toy Guide</h1>
              <p className="text-lg">
                The 1988 Kenner Star Wars Droids 12 Back Action Figure Set is a
                collectible set of action figures based on the popular Star Wars
                franchise. This set features characters from the animated series
                "Star Wars: Droids," which aired in the mid-1980s. The figures
                are designed with attention to detail, capturing the likeness of
                the characters from the show.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-8">
          {images.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt="Sample Toy Image"
              width={200}
              height={138}
              unoptimized={false}
              className="w-full h-auto border-white border-4 shadow-2xl"
            />
          ))}
        </div>
      </main>
      <footer className="w-7xl mx-auto">Footer</footer>
    </div>
  );
}
