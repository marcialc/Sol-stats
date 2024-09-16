import Chart from "react-apexcharts";
import useTokenChartData from "@/hooks/useTokenChartData";

type ChartDisplayProps = {
  tokenName: string;
  days: number;
};

const ChartDisplay = ({ tokenName, days }: ChartDisplayProps) => {
  const { chartOptions, error } = useTokenChartData({
    tokenName,
    days,
    refreshInterval: 30000,
  });

  if (error) return <div>Error loading chart</div>;

  return (
    <Chart
      options={chartOptions.options}
      series={chartOptions.series}
      type="area"
      width="100%"
      className="min-w-[355px]"
    />
  );
};

export default ChartDisplay;
