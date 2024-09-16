import Image from "next/image";

type ChartTileProps = {
  logo: string;
  name: string;
  symbol: string;
};

const ChartTitle = ({ logo, name, symbol }: ChartTileProps) => {
  return (
    <div className="flex gap-4 items-center md:justify-start justify-center">
      <Image src={logo} alt="logo" width={40} height={40} />
      <h1 className="text-2xl">{name}</h1>
      <p className="text-xl text-dark-500">{symbol.toLocaleUpperCase()}</p>
    </div>
  );
};

export default ChartTitle;
