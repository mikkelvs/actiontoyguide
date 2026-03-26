import InfoBoxProps from "./InfoBox.types";

const InfoBox = ({ className, lines }: InfoBoxProps): React.JSX.Element => {
  return (
    <dl
      className={`w-full space-y-4 bg-white p-4 rounded-md text-black text-sm border-amber-500 shadow-2xl ${className ? className : ""}`}
    >
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
