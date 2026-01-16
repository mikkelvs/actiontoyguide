import InfoBoxProps from "./InfoBox.types";

const InfoBox = ({ year, number, pages }: InfoBoxProps) => {
  return (
    <dl className="w-full md:w-1/2 lg:w-full space-y-4 bg-white mt-8 p-4 rounded-md text-black text-sm border-amber-500 shadow-2xl">
      <div className="flex justify-between">
        <dt className="font-bold uppercase">Year</dt>
        <dd className="text-amber-700 text-right">{year}</dd>
      </div>
      <div className="flex justify-between gap-4 border-t border-gray-200 pt-4">
        <dt className="font-bold uppercase">Catalog #</dt>
        <dd className="text-amber-700 text-right">{number}</dd>
      </div>
      <div className="flex justify-between gap-4 border-t border-gray-200 pt-4">
        <dt className="font-bold uppercase">Pages</dt>
        <dd className="text-amber-700 text-right">{pages.toString()}</dd>
      </div>
      {/* <div className="flex justify-between gap-4 border-t border-gray-200 pt-4">
        <dt className="font-bold uppercase">Contents</dt>
        <dd className="text-amber-700">{description}</dd>
      </div> */}
    </dl>
  );
};

export default InfoBox;
