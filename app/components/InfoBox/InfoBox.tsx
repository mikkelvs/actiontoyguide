import InfoBoxProps from "./InfoBox.types";

const InfoBox = ({ lines }: InfoBoxProps): React.JSX.Element => {
  return (
    <dl className="w-full md:w-1/2 lg:w-full space-y-4 bg-white mt-8 p-4 rounded-md text-black text-sm border-amber-500 shadow-2xl">
      {lines.map((line, index) => (
        <div
          key={index}
          className={`flex justify-between ${index > 0 ? "gap-4 border-t border-gray-200 pt-4" : ""}`}
        >
          <dt className="font-bold uppercase">{line.label}</dt>
          <dd className="text-blue-500 text-right">{line.value.toString()}</dd>
        </div>
      ))}
    </dl>
  );
};

export default InfoBox;
