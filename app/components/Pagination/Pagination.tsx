"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

import data from "@/app/data";

const Pagination = () => {
  const { id, page } = useParams<{ id: string; page: string }>();

  const catalog = data.find((c) => c.id === id);
  const pages = catalog?.pages ?? [];
  const pageIndex = pages.findIndex((p) => p.fileName === page);
  const currentPage = pageIndex + 1;

  return (
    <div className="flex justify-between py-8">
      <Link
        href={`/${id}/${pages[Math.max(0, pageIndex - 1)]?.fileName}`}
        className={`inline-block px-4 py-1 mr-4 text-center text-white rounded-md font-bold w-36 bg-blue-500 border-2 ${
          pageIndex > 0 ? "" : "pointer-events-none opacity-50"
        }`}
      >
        Previous
      </Link>

      <div className="inline-block px-4">
        <span className="font-bold">{currentPage}</span> /{" "}
        {catalog?.pages.length}
      </div>

      <Link
        href={`/${id}/${
          pages[Math.min(pages.length - 1, pageIndex + 1)]?.fileName
        }`}
        className={`inline-block px-4 py-1 ml-4 text-center text-white rounded-md font-bold w-36 bg-blue-500 border-2 ${
          pageIndex < pages.length - 1 ? "" : "pointer-events-none opacity-50"
        }`}
      >
        Next
      </Link>
    </div>
  );
};

export default Pagination;
