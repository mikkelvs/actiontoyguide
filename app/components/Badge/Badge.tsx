import BadgeProps from "./Badge.types";

const Badge = ({ children, fixedWidth = false }: BadgeProps) => (
  <span
    className={`${fixedWidth ? "w-30 md:w-36" : ""} inline-block px-4 py-1 text-center mt-4 text-white rounded-lg font-bold bg-blue-500 hover:bg-blue-700 border-2 hover:border-blue-200`}
  >
    {children}
  </span>
);

export default Badge;
