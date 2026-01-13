import Image from "next/image";
import Link from "next/link";

import data from "@/app/data";

import Badge from "./components/Badge/Badge";

const Page = () => (
  <main className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
    {data.map((catalog, index) => (
      <Link key={index} href={`/${catalog.id}/01`}>
        <Image
          alt={catalog.year}
          src={`/images/${catalog.year}.${catalog.catalogNumber}/01.webp`}
          width={1600}
          height={1100}
          className="w-full h-auto border-white border-4 shadow-md/50"
        />
        <Badge>{catalog.year}</Badge>
      </Link>
    ))}
  </main>
);

export default Page;
