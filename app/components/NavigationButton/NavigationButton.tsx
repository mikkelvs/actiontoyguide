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
    <Link href={href} className="text-center">
      <Image
        src={src}
        alt="Image"
        width={width / 10}
        height={height / 10}
        className={`hover:border-amber-300 border-2 shadow-md" ${
          active ? "border-amber-300" : "border-white"
        }`}
      />
      <div className="text-sm text-white rounded-md mt-2 text-center">
        {label}
      </div>
    </Link>
  );
};

export default NavigationButton;
