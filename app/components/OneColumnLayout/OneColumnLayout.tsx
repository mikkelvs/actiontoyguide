import OneColumnLayoutProps from "./OneColumnLayout.types";

const OneColumnLayout = ({
  children,
}: OneColumnLayoutProps): React.JSX.Element => {
  return (
    <main className="w-full grid md:justify-items-end lg:justify-items-center">
      <div className="w-full md:w-4/5 lg:w-3/5">{children}</div>
    </main>
  );
};

export default OneColumnLayout;
