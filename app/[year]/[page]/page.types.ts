export type PageProps = {
  params: Promise<{
    year: string;
    page: string;
  }>;
};
