import BadgeProps from "./Badge.types";

const Badge = ({ children }: BadgeProps) => (
  <span className="inline-block px-4 py-1 text-center mt-4 text-white rounded-md font-bold bg-blue-500 border-2 hover:border-pink-400">
    {children}
  </span>
);

export default Badge;
