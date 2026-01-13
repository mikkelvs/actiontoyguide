type Page = {
  fileName: string;
  toyLine: string;
  description: string;
};

export type Catalog = {
  catalogNumber: string;
  id: string;
  year: string;
  pages: Page[];
};
