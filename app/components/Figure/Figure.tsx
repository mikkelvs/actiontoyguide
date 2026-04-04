import Image from "next/image";

import FigureProps from "./Figure.types";

const Figure = ({
  src,
  alt,
  width,
  height,
  caption,
  align = "right",
}: FigureProps): React.JSX.Element => {
  const alignmentClass = align === "left" ? "float-left" : "float-right";
  const leftAligned = align === "left";

  return (
    <figure
      className={`${alignmentClass} w-1/2 md:w-2/5 mt-2 mb-4 ${leftAligned ? "mr-4" : "ml-4"} border-8 lg:border-12 border-white bg-white inline-block`}
    >
      <div className="w-full">
        <Image
          src={src}
          width={width}
          height={height}
          alt={alt}
          className="w-full h-auto"
        />
      </div>

      <figcaption className="text-xs mt-2 text-black ">{caption}</figcaption>
    </figure>
  );
};

export default Figure;
