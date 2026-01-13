import Image from "next/image";
import Link from "next/link";

import { PageProps } from "@/app/[id]/[page]/page.types";
import data from "@/app/data";

export async function generateStaticParams() {
  return data.flatMap((catalog) =>
    catalog.pages.map((page) => ({
      id: catalog.id.toString(),
      page: page.fileName,
    }))
  );
}

const Page = async ({ params }: PageProps) => {
  const { id, page } = await params;

  const catalog = data.find((c) => c.id === id);
  const pages = catalog?.pages ?? [];

  const pageIndex = pages.findIndex((p) => p.fileName === page);

  const currentPage = pageIndex + 1;
  const catalogYear = catalog?.year ?? "";
  const catalogNumber = catalog?.catalogNumber ?? "";

  const { toyLine = "", description = "" } = pages[pageIndex] ?? {};

  return (
    <main className="max-w-7xl mx-auto">
      <div className="lg:flex pb-12">
        <div className="lg:w-8/12 lg:pr-8">
          <Image
            src={`/images/${catalogYear}.${catalogNumber}/${page}.webp`}
            alt="Sample Toy Image"
            width={1600}
            height={1100}
            unoptimized={false}
            className="border-white border-8 lg:border-12 shadow-lg/50"
          />
          <div className="flex justify-between py-8">
            <Link
              href={`/${id}/${pages[Math.max(0, pageIndex - 1)]?.fileName}`}
              className={`inline-block px-4 py-1 mr-4 text-center text-white rounded-md font-bold w-24 bg-blue-500 border-2 ${
                pageIndex > 0 ? "" : "pointer-events-none opacity-50"
              }`}
            >
              Previous
            </Link>

            <div className="inline-block px-4">
              <span className="font-bold">{currentPage}</span> /{" "}
              {catalog?.pages.length}
            </div>

            <Link
              href={`/${id}/${
                pages[Math.min(pages.length - 1, pageIndex + 1)]?.fileName
              }`}
              className={`inline-block px-4 py-1 ml-4 text-center text-white rounded-md font-bold w-24 bg-blue-500 border-2 ${
                pageIndex < pages.length - 1
                  ? ""
                  : "pointer-events-none opacity-50"
              }`}
            >
              Next
            </Link>
          </div>
        </div>
        <div className="sm:w-full lg:w-4/12">
          <div className="border-t-2 border-b-2 md:border-0 md:border-l-2 border-purple-300 text-white py-8 md:py-0 md:px-8">
            <h1 className="text-3xl font-bold">
              {catalogYear} Action Toy Guide
            </h1>
            <h3 className="text-3xl font-bold mb-2 text-blue-400"></h3>

            <span className="text-blue-400 uppercase font-bold text-lg">
              {toyLine}
            </span>

            <dl className="w-full space-y-2 bg-white mt-8 p-4 rounded-md text-black text-md">
              <div className="flex justify-between gap-4">
                <dt className="font-bold uppercase">Year</dt>
                <dd className="text-orange-500 text-right">{catalogYear}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="font-bold uppercase">Catalog #</dt>
                <dd className="text-orange-500 text-right">{catalogNumber}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="font-bold uppercase">Pages</dt>
                <dd className="text-orange-500 text-right">
                  {catalog?.pages.length}
                </dd>
              </div>
            </dl>

            <p className="text-lg mt-8">{description}</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-8 text-center">
        {catalog?.pages.map((page, index) => (
          <Link key={index} href={`/${id}/${page.fileName}`}>
            <Image
              key={index}
              src={`/images/${catalogYear}.${catalogNumber}/${page.fileName}.webp`}
              alt="Sample Toy Image"
              width={200}
              height={138}
              className="w-full h-auto border-white border-4 shadow-md/50"
            />
            <span className="inline-block px-4 py-1 text-center mt-4 text-white rounded-md font-bold border-2 hover:border-pink-400">
              {page.fileName}
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Page;
