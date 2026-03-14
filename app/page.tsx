import Image from "next/image";
import Link from "next/link";

import data from "@/app/data";

import Badge from "./components/Badge/Badge";

const Page = () => (
  <main className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
    {data.map((catalog, index) => (
      <Link
        key={index}
        href={`/${catalog.id}/01`}
        className="flex flex-col items-center"
      >
        <div className="w-full flex items-center justify-center h-full">
          <Image
            alt={catalog.year}
            src={`/images/${catalog.year}.${catalog.catalogNumber}/01.webp`}
            width={catalog.width / 5}
            height={catalog.height / 5}
            className="w-full h-auto border-white border-4 shadow-md/50"
          />
        </div>
        <Badge>{catalog.year}</Badge>
      </Link>
    ))}
  </main>
);

export default Page;
