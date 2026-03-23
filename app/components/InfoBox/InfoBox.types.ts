type InfoBoxLine = {
  label: string;
  value: string | number;
};

type InfoBoxProps = {
  className?: string;
  lines: InfoBoxLine[];
};

export default InfoBoxProps;
