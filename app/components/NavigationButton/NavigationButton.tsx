import Image from "next/image";
import Link from "next/link";
import NavigationButtonProps from "./NavigationButton.types";

const NavigationButton = (props: NavigationButtonProps): React.JSX.Element => {
  return (
    <Link href={props.href} className="text-center">
      <Image
        src={props.src}
        alt="Image"
        width={100}
        height={55}
        unoptimized={false}
        className="border-white hover:border-amber-300 border-2 shadow-md"
      />
      <div className="text-sm text-white rounded-md mt-2 text-center">
        {props.label}{" "}
        {/* {props.version && (
            <span className="text-gray-500">({props.version})</span>
          )} */}
      </div>
    </Link>
  );
};

export default NavigationButton;
