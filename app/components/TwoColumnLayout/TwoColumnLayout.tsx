import TwoColumnLayoutProps from "./TwoColumnLayout.types";

const TwoColumnLayout = ({
  children,
  sideBarContent,
}: TwoColumnLayoutProps): React.JSX.Element => {
  return (
    <div className="flex flex-col lg:flex-row pb-8">
      <div className="w-full lg:w-8/12 lg:pr-8 border-b-2 lg:border-b-0 lg:border-r-2 border-purple-300 mb-0">
        {children}
      </div>
      <div className="w-full lg:w-4/12">
        <div className="border-b-2 lg:border-0 border-purple-300 text-white pt-8 lg:py-0 lg:pl-8">
          {sideBarContent}
        </div>
      </div>
    </div>
  );
};

export default TwoColumnLayout;
