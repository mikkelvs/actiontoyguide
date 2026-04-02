import Image from "next/image";

import ImageFigureProps from "./ImageFigure.types";

const ImageFigure = ({
  src,
  alt,
  width,
  height,
  caption,
  align = "right",
}: ImageFigureProps): React.JSX.Element => {
  const leftAligned = align === "left";

  return (
    <figure
      style={{ width }}
      className={`float-${align} mt-2 mb-4 ${leftAligned ? "mr-4" : "ml-4"} border-8 lg:border-12 border-white bg-white inline-block`}
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

export default ImageFigure;
