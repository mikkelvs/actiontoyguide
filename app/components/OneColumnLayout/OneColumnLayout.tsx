import OneColumnLayoutProps from "./OneColumnLayout.types";

const OneColumnLayout = ({
  children,
}: OneColumnLayoutProps): React.JSX.Element => {
  return (
    <main className="w-full mx-auto md:mr-0 lg:mx-auto md:w-4/5 lg:w-3/5">
      {children}
    </main>
  );
};

export default OneColumnLayout;
