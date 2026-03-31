import BadgeProps from "./Badge.types";

const Badge = ({ children }: BadgeProps): React.JSX.Element => (
  <span className="min-w-12 mt-4 badge">{children}</span>
);

export default Badge;
