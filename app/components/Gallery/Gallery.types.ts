import { Page } from "@/app/data.types";

type GalleryProps = {
  pages: Page[];
  catalogYear: string;
  catalogNumber: string;
  width: number;
  height: number;
  id: string;
  page: string;
};

export default GalleryProps;
