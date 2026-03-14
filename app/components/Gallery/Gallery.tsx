import Image from "next/image";
import Link from "next/link";

import Badge from "../Badge/Badge";
import GalleryProps from "./Gallery.types";

const Gallery = ({
  pages,
  catalogYear,
  catalogNumber,
  width,
  height,
  id,
  page,
}: GalleryProps): React.JSX.Element => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-8 text-center">
      {pages.map((p, index) => (
        <Link key={index} href={`/${id}/${p.fileName}`}>
          <Image
            key={index}
            src={`/images/${catalogYear}.${catalogNumber}/${p.fileName}.webp`}
            alt="Sample Toy Image"
            width={width / 8}
            height={height / 8}
            className={`w-full h-auto border-solid border-4 inline-block hover:border-pink-500" ${
              p.fileName === page ? "border-pink-500" : "border-white"
            }`}
          />

          <Badge>{p.fileName}</Badge>
        </Link>
      ))}
    </div>
  );
};

export default Gallery;
