import Image from "next/image";
import Link from "next/link";

import NavigationButtonProps from "./NavigationButton.types";

const NavigationButton = ({
  href,
  src,
  active,
  label,
  width,
  height,
}: NavigationButtonProps): React.JSX.Element => {
  return (
    <Link href={href}>
      <div className="w-full flex items-center justify-start md:w-full md:h-16 lg:h-10">
        <Image
          src={src}
          alt="Image"
          width={width}
          height={height}
          className={`border-4 hover:border-amber-300 ${
            active ? "border-amber-300" : "border-white"
          }`}
        />
      </div>

      <div className="text-sm text-white text-center font-bold mt-1">
        {label}
      </div>
    </Link>
  );
};

export default NavigationButton;
