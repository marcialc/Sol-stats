const TokenDetail = ({
  title,
  subSection,
}: {
  title: string;
  subSection: React.ReactElement | string;
}) => {
  return (
    <div className="flex flex-col items-center md:items-start justify-between">
      <p className="font-bold">{title}</p>
      <h2 className="text-lg">{subSection}</h2>
    </div>
  );
};

export default TokenDetail;
