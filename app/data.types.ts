type ToyLine = {
  id: string;
  slug: string;
  name: string;
  description: string;
};

type Page = {
  fileName: string;
  toyLine: ToyLine;
  description: string;
};

export type Catalog = {
  catalogNumber: string;
  id: string;
  year: string;
  pages: Page[];
};
