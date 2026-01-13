export type PageProps = {
  params: Promise<{
    id: string;
    page: string;
  }>;
};
