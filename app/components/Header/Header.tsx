"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import NavigationSelect from "@/app/components/NavigationSelect/NavigationSelect";
import data from "@/app/data";

import NavigationButton from "../../components/NavigationButton/NavigationButton";

const Header = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <header className="w-full mx-auto pb-12">
      <div className="flex">
        <div
          className={` ${
            isHomePage
              ? "w-full justify-center flex p-8"
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
            />
          </Link>
        </div>
        <nav
          className={` ${
            isHomePage
              ? "hidden"
              : "w-3/5 md:w-4/5 md:grid grid-cols-7 gap-4 md:gap-4 lg:items-center lg:justify-end hidden lg:flex"
          }`}
        >
          {data.map((catalog, index) => (
            <NavigationButton
              key={index}
              src={`/images/${catalog.year}.${catalog.catalogNumber}/01.webp`}
              label={catalog.year}
              version={catalog.id.split("-")[1]}
              href={`/${catalog.id}/01`}
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
