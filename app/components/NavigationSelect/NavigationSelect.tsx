"use client";
import NavigationSelectProps from "./NavigationSelect.types";
import { useRouter } from "next/navigation";

const NavigationSelect = (props: NavigationSelectProps): React.JSX.Element => {
  const router = useRouter();

  return (
    <select
      defaultValue={props.selectedValue}
      className="block h-10 w-xxs rounded-md border bg-pink-500 border-gray-300 text-sm text-white"
      onChange={(e) => router.push(`/${e.target.value}/01`)}
    >
      <option>Select Catalog Year</option>
      {props.data.map((catalog, index) => (
        <option key={index} label={catalog.catalog} value={catalog.catalog} />
      ))}
    </select>
  );
};

export default NavigationSelect;
