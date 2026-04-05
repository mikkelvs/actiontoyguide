import BadgeProps from "./Badge.types";

const Badge = ({ children, selected }: BadgeProps): React.JSX.Element => (
  <span className={`min-w-12 mt-4 badge ${selected ? "selected" : ""}`}>
    {children}
  </span>
);

export default Badge;
