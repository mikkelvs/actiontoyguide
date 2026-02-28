import Image from "next/image";
import Link from "next/link";

import data from "@/app/data";

import Badge from "./components/Badge/Badge";

const Page = () => (
  <main className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
    {data.map((catalog, index) => (
      <Link key={index} href={`/${catalog.id}/01`}>
        <div className="w-full flex items-center justify-center h-48">
          <Image
            alt={catalog.year}
            src={`/images/${catalog.year}.${catalog.catalogNumber}/01.webp`}
            width={catalog.width / 5}
            height={catalog.height / 5}
            className="max-h-full w-auto border-white border-4 shadow-md/50"
          />
        </div>
        <Badge>{catalog.year}</Badge>
      </Link>
    ))}
  </main>
);

export default Page;
