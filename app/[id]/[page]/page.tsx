import Image from "next/image";
import Link from "next/link";

import { PageProps } from "@/app/[id]/[page]/page.types";
import Gallery from "@/app/components/Gallery/Gallery";
import InfoBox from "@/app/components/InfoBox/InfoBox";
import Pagination from "@/app/components/Pagination/Pagination";
import TwoColumnLayout from "@/app/components/TwoColumnLayout/TwoColumnLayout";
import data from "@/app/data";

export async function generateStaticParams() {
  return data.flatMap((catalog) =>
    catalog.pages.map((page) => ({
      id: catalog.id.toString(),
      page: page.fileName,
    })),
  );
}

const Page = async ({ params }: PageProps) => {
  const { id, page } = await params;

  const catalog = data.find((c) => c.id === id);
  const pages = catalog?.pages ?? [];
  const width = catalog?.width ?? 0;
  const height = catalog?.height ?? 0;

  const pageIndex = pages.findIndex((p) => p.fileName === page);

  const catalogYear = catalog?.year ?? "";
  const catalogNumber = catalog?.catalogNumber ?? "";

  const infoBoxLines = [
    { label: "Year", value: catalogYear },
    { label: "Catalog #", value: catalogNumber },
    { label: "Pages", value: catalog?.pages.length || 0 },
  ];

  const { toyLine } = pages[pageIndex] ?? {};

  return (
    <main className="w-full">
      <TwoColumnLayout
        sideBarContent={
          <>
            <h1 className="mb-2 text-purple-300">
              {catalogYear} Action Toy Guide
            </h1>

            <h2 className="mt-0 mb-8">
              {toyLine[0].name}
              {toyLine.length > 1 && ` / ${toyLine[1].name}`}
            </h2>

            <div className="flex flex-col md:flex-row-reverse md:items-start lg:flex-col">
              <div className="w-full md:w-1/2 lg:w-full pb-8">
                <InfoBox lines={infoBoxLines} />
              </div>

              <p className="w-full md:w-1/2 lg:w-full md:mr-8 mb-8 lg:mb-0">
                {toyLine[0].description}
              </p>
            </div>
          </>
        }
      >
        <>
          <div className="border-white border-8 lg:border-12">
            <Image
              src={`/images/${catalogYear}.${catalogNumber}/${page}.webp`}
              alt="Sample Toy Image"
              width={width}
              height={height}
              unoptimized={true}
              className="border-gray-700 border-2"
            />
          </div>
          <Pagination />
        </>
      </TwoColumnLayout>

      <Gallery
        pages={pages}
        catalogYear={catalogYear}
        catalogNumber={catalogNumber}
        width={width}
        height={height}
        id={id}
        page={page}
      />
    </main>
  );
};

export default Page;
