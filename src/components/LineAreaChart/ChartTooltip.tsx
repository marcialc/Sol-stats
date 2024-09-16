interface ChartTooltipProps {
  date: string;
  price: number;
}
const ChartTooltip = ({ date, price }: ChartTooltipProps) => {
  return (
    <div className="flex flex-col flex-wrap gap-2 text-white p-3 rounded-md">
      <div className="mb-1">
        <strong>Date:</strong> {date}
      </div>
      <div>
        <strong>Price:</strong> ${price.toFixed(2)} USD
      </div>
    </div>
  );
};

export default ChartTooltip;
