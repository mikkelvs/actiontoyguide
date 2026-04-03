"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

import NavigationSelect from "@/app/components/NavigationSelect/NavigationSelect";
import data from "@/app/data";

import NavigationButton from "../../components/NavigationButton/NavigationButton";

const Header = (): React.JSX.Element => {
  const pathname = usePathname();
  const params = useParams<{ id: string }>();
  const isHomePage = pathname === "/";
  console.log(pathname);

  return (
    <header className="w-full mx-auto pb-12">
      <div className="flex">
        <div
          className={` ${
            isHomePage
              ? "w-full justify-center flex mt-8"
              : "flex w-2/5 md:w-1/5 justify-start pr-4 md:pr-8"
          }`}
        >
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Action Toy Guide Logo"
              width={isHomePage ? 300 : 150}
              height={isHomePage ? 228 : 114}
              unoptimized={true}
              loading="eager"
            />
          </Link>
        </div>
        <nav
          className={` ${
            isHomePage
              ? "hidden"
              : "w-3/5 md:w-4/5 md:grid grid-cols-7 gap-4 md:items-center md:gap-4 lg:flex lg:justify-end hidden"
          }`}
        >
          {data.map((catalog, index) => (
            <NavigationButton
              key={index}
              src={`/images/${catalog.year}.${catalog.catalogNumber}/01.webp`}
              label={catalog.year}
              href={`/${catalog.id}/01`}
              active={params.id === catalog.id}
              width={catalog.width / 10}
              height={catalog.height / 10}
            />
          ))}
        </nav>
        <nav
          className={`w-4/5 md:hidden flex justify-end items-center ${
            isHomePage ? "hidden" : ""
          }`}
        >
          <NavigationSelect data={data} />
        </nav>
      </div>
    </header>
  );
};

export default Header;
