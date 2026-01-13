import Image from "next/image";
import Link from "next/link";
import { PageProps } from "@/app/[year]/[page]/page.types";
import data from "@/app/data";
import Badge from "./components/Badge/Badge";

export default async function Page({ params }: PageProps) {
  const { year, page } = await params;

  const catalog = data.find((c) => c.catalog === year);
  const pages = catalog?.pages ?? [];

  const pageIndex = pages.findIndex((p) => p.fileName === page);

  const currentPage = pageIndex + 1;
  const catalogYear = catalog?.year ?? "";
  const catalogNumber = catalog?.folder ?? "";
  const folder = catalog?.folder ?? "";

  const { toyLine = "", description = "" } = pages[pageIndex] ?? {};

  return (
    <main className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
      {data.map((catalog, index) => (
        <Link key={index} href={`/${catalog.catalog}/01`}>
          <Image
            alt={catalog.year}
            src={`/images/${catalog.folder}/01.webp`}
            width={1600}
            height={1100}
            className="w-full h-auto border-white border-4 shadow-md/50"
          />
          <Badge>{catalog.year}</Badge>
        </Link>
      ))}
    </main>
  );
}
