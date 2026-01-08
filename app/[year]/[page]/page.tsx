import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header/Header";
import data from "@/app/data";

interface PageProps {
  params: Promise<{
    year: string;
    page: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { year, page } = await params;

  const selectedCatalog = data.find((catalog) => catalog.catalog === year);
  const folder = selectedCatalog?.folder ?? "";
  const currentPage =
    (selectedCatalog?.pages.findIndex((p) => p.fileName === page) ?? -1) + 1;

  const catalogYear = selectedCatalog?.year ?? "";
  const toyLine =
    selectedCatalog?.pages.find((p) => p.fileName === page)?.toyLine ?? "";

  return (
    <div className="grid max-w-7xl mx-auto px-8">
      <div className="w-full py-4 flex gap-8 justify-end items-center text-white text-xs">
        <Link href="/">About</Link>
        <Link href="/">Kenner Products</Link>
        <Link href="/">Instagram</Link>
        <Link href="/" className="bg-pink-400 px-4 py-1 rounded-md">
          Get In Touch
        </Link>
      </div>
      <Header year={year} />

      <main className="max-w-7xl mx-auto pb-12">
        <div className="flex pb-12">
          <div className="sm:w-full lg:w-3/4 pr-12">
            <Image
              src={`/images/${folder}/${page}.webp`}
              alt="Sample Toy Image"
              width={1600}
              height={1100}
              unoptimized={false}
              className="border-white border-12 shadow-lg/50"
            />
            <p className="flex justify-center p-4">
              <span className="font-bold">{currentPage}</span> &nbsp;/{" "}
              {selectedCatalog?.pages.length}
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
        <div className="grid grid-cols-7 gap-8 text-center">
          {selectedCatalog?.pages.map((page, index) => (
            <Link key={index} href={`/${year}/${page.fileName}`}>
              <Image
                key={index}
                src={`/images/${selectedCatalog.folder}/${page.fileName}.webp`}
                alt="Sample Toy Image"
                width={200}
                height={138}
                unoptimized={false}
                className="w-full h-auto border-white border-4 shadow-2xl"
              />
              <span className="inline-block px-4 py-1 text-center mt-2 bg-blue-400 text-white rounded-md font-bold">
                {page.fileName}
              </span>
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
