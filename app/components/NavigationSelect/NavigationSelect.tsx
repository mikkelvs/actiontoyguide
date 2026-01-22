"use client";

import { useParams, useRouter } from "next/navigation";

import NavigationSelectProps from "./NavigationSelect.types";

const NavigationSelect = (props: NavigationSelectProps): React.JSX.Element => {
  const router = useRouter();
  const params = useParams<{ id: string }>();
  const selectedId = params?.id ?? "";

  return (
    <select
      value={selectedId}
      className="block h-10 w-xxs rounded-lg border bg-pink-500 border-gray-300 text-sm text-white w-36 p-2"
      onChange={(e) => router.push(`/${e.target.value}/01`)}
    >
      <option value="">Select Catalog Year</option>
      {props.data.map((catalog, index) => (
        <option key={index} value={catalog.id}>
          {catalog.id}
        </option>
      ))}
    </select>
  );
};

export default NavigationSelect;
