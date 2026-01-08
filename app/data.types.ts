type Page = {
  fileName: string;
  toyLine: string;
};

type Catalog = {
  folder: string;
  catalog: string;
  year: string;
  pages: Page[];
};
