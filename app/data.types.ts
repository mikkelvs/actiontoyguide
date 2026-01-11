type Page = {
  fileName: string;
  toyLine: string;
  description: string;
};

type Catalog = {
  folder: string;
  catalog: string;
  year: string;
  pages: Page[];
};
