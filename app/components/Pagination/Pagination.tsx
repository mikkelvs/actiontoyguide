"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

import data from "@/app/data";

const Pagination = (): React.JSX.Element => {
  const { id, page } = useParams<{ id: string; page: string }>();

  const catalog = data.find((c) => c.id === id);
  const pages = catalog?.pages ?? [];
  const pageIndex = pages.findIndex((p) => p.fileName === page);
  const currentPage = pageIndex + 1;

  return (
    <div className="flex justify-between pt-8 pb-8 lg:pb-0 items-center">
      <Link
        href={`/${id}/${pages[Math.max(0, pageIndex - 1)]?.fileName}`}
        className={`w-30 md:w-36 badge ${pageIndex > 0 ? "" : "pointer-events-none opacity-50"}`}
      >
        Previous
      </Link>

      <div>
        <span className="font-bold">{currentPage}</span> /
        {` ${catalog?.pages.length}`}
      </div>

      <Link
        href={`/${id}/${
          pages[Math.min(pages.length - 1, pageIndex + 1)]?.fileName
        }`}
        className={`w-30 md:w-36 badge ${
          pageIndex < pages.length - 1 ? "" : "pointer-events-none opacity-50"
        }`}
      >
        Next
      </Link>
    </div>
  );
};

export default Pagination;
