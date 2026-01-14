import Image from "next/image";
import Link from "next/link";

import { PageProps } from "@/app/[id]/[page]/page.types";
import InfoBox from "@/app/components/InfoBox/InfoBox";
import Pagination from "@/app/components/Pagination/Pagination";
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

  const catalogYear = catalog?.year ?? "";
  const catalogNumber = catalog?.catalogNumber ?? "";

  const { toyLine = "", description = "" } = pages[pageIndex] ?? {};

  return (
    <main className="w-full">
      <div className="flex flex-col lg:flex-row pb-8">
        <div className="w-full lg:w-8/12 lg:pr-8">
          <Image
            src={`/images/${catalogYear}.${catalogNumber}/${page}.webp`}
            alt="Sample Toy Image"
            width={1600}
            height={1100}
            unoptimized={false}
            className="border-white border-8 lg:border-12 shadow-2xl"
          />
          <Pagination />
        </div>
        <div className="w-full lg:w-4/12">
          <div className="border-t-2 border-b-2 lg:border-0 lg:border-l-2 border-purple-300 text-white py-8 lg:py-0 lg:pl-8">
            <h1 className="text-3xl font-bold mb-2">
              {catalogYear} Action Toy Guide
            </h1>

            <h2 className="text-blue-400 uppercase font-bold text-lg">
              {toyLine}
            </h2>

            <div className="flex flex-col md:flex-row-reverse lg:flex-col">
              <InfoBox
                year={catalogYear}
                number={catalogNumber}
                pages={catalog?.pages.length || 0}
              />

              <p className="w-full md:w-1/2 lg:w-full mt-8 md:mr-8">
                {description}
              </p>
            </div>
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
              className="w-full h-auto border-white border-4 shadow-2xl"
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
