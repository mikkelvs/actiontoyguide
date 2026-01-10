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
      <div className="w-full py-4 flex gap-4 md:gap-8 justify-end items-center text-white text-xs">
        <Link href="/">About</Link>
        <Link href="/">Kenner Products</Link>
        <Link href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 inline-block mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
            />
          </svg>
          <span className="hidden md:inline-block">Instagram</span>
        </Link>
        <Link href="/" className="bg-pink-400 px-4 py-1 rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 inline-block md:mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>
          <span className="hidden md:inline-block">Get In Touch</span>
        </Link>
      </div>
      <Header year={year} />

      <main className="max-w-7xl mx-auto pb-12">
        <div className="lg:flex pb-12">
          <div className="sm:w-full lg:w-3/4 lg:pr-12">
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
        <div className="grid grid-cols-3 lg:grid-cols-7 gap-8 text-center">
          {selectedCatalog?.pages.map((page, index) => (
            <Link key={index} href={`/${year}/${page.fileName}`}>
              <Image
                key={index}
                src={`/images/${selectedCatalog.folder}/${page.fileName}.webp`}
                alt="Sample Toy Image"
                width={200}
                height={138}
                unoptimized={false}
                className="w-full h-auto border-white border-4 shadow-md/50"
              />
              <span className="inline-block px-4 py-1 text-center mt-4 bg-blue-400 text-white rounded-md font-bold border-2">
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
