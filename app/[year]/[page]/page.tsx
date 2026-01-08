import Image from "next/image";
import Link from "next/link";
import NavigationButton from "../../components/NavigationButton/NavigationButton";
import data from "@/app/data";

interface PageProps {
  params: Promise<{
    year: string;
    page: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { year, page } = await params;

  const thumbnails = data.find((catalog) => catalog.catalog === year);

  const currentPage =
    (thumbnails?.pages.findIndex((p) => p.fileName === page) ?? -1) + 1;

  const catalogYear = thumbnails?.year ?? "";
  const toyLine =
    thumbnails?.pages.find((p) => p.fileName === page)?.toyLine ?? "";

  return (
    <div className="grid max-w-7xl mx-auto px-8">
      <div className="w-full py-4 flex gap-8 justify-end text-white text-sm">
        <Link href="/">About</Link>
        <Link href="/">Kenner Products</Link>
        <Link href="/">Instagram</Link>
        <Link href="/" className="bg-pink-400 px-4 py-1 rounded-md">
          Get In Touch
        </Link>
      </div>
      <header className="w-full mx-auto pb-12">
        <div className="flex">
          <div className="w-1/5 justify-start">
            <Image
              src="/logo.png"
              alt="Action Toy Guide Logo"
              width={150}
              height={114}
              unoptimized={true}
            />
          </div>
          <nav className="w-4/5 flex gap-4 items-center justify-end">
            <NavigationButton
              src="/images/1988.881232000/01.webp"
              label="1988"
              version="1"
            />
            <NavigationButton
              src="/images/1988.881232010/01.webp"
              label="1988"
              version="2"
            />
            <NavigationButton
              src="/images/1988.881232020/01.webp"
              label="1988"
              version="3"
            />
            <NavigationButton
              src="/images/1988.881232000/01.webp"
              label="1989"
            />
            <NavigationButton
              src="/images/1988.881232010/01.webp"
              label="1990"
            />
            <NavigationButton
              src="/images/1988.881232020/01.webp"
              label="1990"
            />
            <NavigationButton
              src="/images/1988.881232000/01.webp"
              label="1991"
            />
            <NavigationButton
              src="/images/1988.881232010/01.webp"
              label="1992"
            />
            <NavigationButton
              src="/images/1988.881232000/01.webp"
              label="1993"
              version="1"
            />
            <NavigationButton
              src="/images/1988.881232010/01.webp"
              label="1994"
              version="2"
            />
            <NavigationButton
              src="/images/1988.881232020/01.webp"
              label="1995"
              version="3"
            />
            <NavigationButton
              src="/images/1988.881232000/01.webp"
              label="1995"
            />
            <NavigationButton
              src="/images/1988.881232010/01.webp"
              label="1996"
            />
            <NavigationButton
              src="/images/1988.881232000/01.webp"
              label="1997"
            />
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto pb-12">
        <div className="flex pb-12">
          <div className="sm:w-full lg:w-3/4 pr-12">
            <Image
              src={`/images/1988.881232000/${page}.webp`}
              alt="Sample Toy Image"
              width={1600}
              height={1100}
              unoptimized={false}
              className="border-white border-12 shadow-lg/50"
            />
            <p className="flex justify-center p-4">
              <span className="font-bold">{currentPage}</span> &nbsp;/{" "}
              {thumbnails?.pages.length}
            </p>
          </div>
          <div className="sm:w-full lg:w-1/4">
            <div className="border-2 border-purple-300 text-white p-8 rounded-xl">
              <h1 className="text-4xl font-bold pb-4 mb-4">
                {catalogYear} Action Toy Guide
              </h1>

              <span className="bg-blue-400 px-4 py-2 rounded-md text-sm uppercase font-bold">
                {toyLine}
              </span>

              <p className="text-lg mt-8">
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
          {thumbnails?.pages.map((page, index) => (
            <Link key={index} href={`/${year}/${page.fileName}`}>
              <Image
                key={index}
                src={`/images/${thumbnails.folder}/${page.fileName}.webp`}
                alt="Sample Toy Image"
                width={200}
                height={138}
                unoptimized={false}
                className="w-full h-auto border-white border-4 shadow-2xl"
              />
              <p className="text-center mt-2">{page.fileName}</p>
            </Link>
          ))}
        </div>
      </main>
      <footer className="maxw-7xl mx-auto">Footer</footer>
    </div>
  );
}

export async function generateStaticParams() {
  return data.flatMap((catalog) =>
    catalog.pages.map((page) => ({
      year: catalog.year.toString(),
      page: page.fileName,
    }))
  );
}
