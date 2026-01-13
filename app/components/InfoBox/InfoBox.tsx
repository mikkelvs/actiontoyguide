import InfoBoxProps from "./InfoBox.types";

const InfoBox = ({ year, number, pages }: InfoBoxProps) => {
  return (
    <dl className="w-full md:w-1/2 lg:w-full space-y-2 bg-white mt-8 p-4 rounded-md text-black text-md">
      <div className="flex justify-between gap-4">
        <dt className="font-bold uppercase">Year</dt>
        <dd className="text-orange-500 text-right">{year}</dd>
      </div>
      <div className="flex justify-between gap-4">
        <dt className="font-bold uppercase">Catalog #</dt>
        <dd className="text-orange-500 text-right">{number}</dd>
      </div>
      <div className="flex justify-between gap-4">
        <dt className="font-bold uppercase">Pages</dt>
        <dd className="text-orange-500 text-right">{pages.toString()}</dd>
      </div>
    </dl>
  );
};

export default InfoBox;
