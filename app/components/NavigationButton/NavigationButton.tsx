import Image from "next/image";
import Link from "next/link";
import NavigationButtonProps from "./NavigationButton.types";

const NavigationButton = (props: NavigationButtonProps): React.JSX.Element => {
  return (
    <Link href="/" className="flex-row justify-center items-center gap-4">
      <Image
        src={props.src}
        alt="Sample Toy Image"
        width={100}
        height={69}
        unoptimized={false}
        className="border-white border-2 shadow-2xl"
      />
      <div className="py-1 px-4 bg-red-800 text-white font-bold rounded-md mt-2">
        {props.label}
      </div>
    </Link>
  );
};

export default NavigationButton;
