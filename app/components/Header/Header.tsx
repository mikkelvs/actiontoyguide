import Image from "next/image";
import NavigationButton from "../../components/NavigationButton/NavigationButton";
import data from "@/app/data";
import NavigationSelect from "@/app/components/NavigationSelect/NavigationSelect";
import HeaderProps from "./Header.types";

const Header = (props: HeaderProps) => {
  return (
    <header className="w-full mx-auto pb-12">
      <div className="flex">
        <div className="w-1/5 justify-start pr-8">
          <Image
            src="/logo.png"
            alt="Action Toy Guide Logo"
            width={150}
            height={114}
            unoptimized={true}
          />
        </div>
        <nav className="w-4/5 gap-4 items-center justify-end hidden lg:flex">
          {data.map((catalog, index) => (
            <NavigationButton
              key={index}
              src={`/images/${catalog.folder}/01.webp`}
              label={catalog.year}
              version={catalog.catalog.split("-")[1]}
              href={`/${catalog.catalog}/01`}
            />
          ))}
        </nav>
        <nav className="w-4/5 hidden md:grid grid-cols-7 gap-4 lg:hidden">
          {data.map((catalog, index) => (
            <NavigationButton
              key={index}
              src={`/images/${catalog.folder}/01.webp`}
              label={catalog.year}
              version={catalog.catalog.split("-")[1]}
              href={`/${catalog.catalog}/01`}
            />
          ))}
        </nav>
        <nav className="w-4/5 md:hidden flex justify-end items-center">
          <NavigationSelect data={data} selectedValue={props.year ?? ""} />
        </nav>
      </div>
    </header>
  );
};

export default Header;
