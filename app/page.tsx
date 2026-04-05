import Image from "next/image";
import Link from "next/link";

import data from "@/app/data";

import Badge from "./components/Badge/Badge";

const Page = () => (
  <main>
    <p className="md:text-center mx-auto mb-8">
      Welcome to <strong>Action Toy Guide</strong>, your one-stop resource for
      classic Kenner pack-in catalogs! Select a year below to get started!
    </p>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      {data.map((catalog, index) => (
        <Link
          key={index}
          href={`/${catalog.id}/01`}
          className="flex flex-col items-center gallery-link"
        >
          <div className="w-full flex items-center justify-center h-full">
            <Image
              alt={catalog.year}
              src={`/images/${catalog.year}.${catalog.catalogNumber}/01.webp`}
              width={catalog.width / 5}
              height={catalog.height / 5}
              className="w-full h-auto border-8"
            />
          </div>
          <Badge>{catalog.year}</Badge>
        </Link>
      ))}
    </div>
  </main>
);

export default Page;
