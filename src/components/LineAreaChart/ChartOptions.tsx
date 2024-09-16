import { colors } from "color";
import ReactDOMServer from "react-dom/server";
import ChartTooltip from "./ChartTooltip";
import ApexCharts from "apexcharts";
import {
  areAllTimestampsSameYear,
  formatLabelDate,
  formatTooltipDate,
} from "@/app/utils/helpers";

export type ChartData = {
  options: ApexCharts.ApexOptions;
  series: {
    name: string;
    data: number[];
  }[];
};

function ChartTooltipFunc({
  series,
  seriesIndex,
  dataPointIndex,
  w,
}: {
  series: number[][]; // 2D array, where each series contains an array of numbers (data points)
  seriesIndex: number; // Index of the series being hovered
  dataPointIndex: number; // Index of the specific data point being hovered
  w: {
    globals: {
      categoryLabels: string[]; // Array of labels (e.g., date values)
      fullDates: string[]; // Array of full date strings
      allSameYear: boolean; // Boolean indicating if all timestamps are from the same year
    };
  };
}) {
  const price: number = series[seriesIndex][dataPointIndex];
  const date: string = w.globals.fullDates[dataPointIndex];
  const allSameYear: boolean = w.globals.allSameYear;

  return ReactDOMServer.renderToString(
    <ChartTooltip date={formatTooltipDate(date, allSameYear)} price={price} />
  );
}

// Chart Configuration Generator
const getChartOptions = (
  timestamps: string[] = ["hello"],
  priceValues: number[],
  days: number
): ChartData => {
  return {
    options: {
      chart: {
        id: "area-line-chart",
        type: "area",
        zoom: {
          enabled: false,
        },
        events: {
          updated: (chartContext: any) => {
            chartContext.w.globals.fullDates = timestamps;
            chartContext.w.globals.allSameYear =
              areAllTimestampsSameYear(timestamps);
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: timestamps,
        tickAmount: 12,
        labels: {
          rotate: -45,
          formatter: function (value: string) {
            return formatLabelDate(value, days);
          },
        },
        axisBorder: {
          show: true,
        },
        axisTicks: {
          show: false,
        },
        tooltip: {
          enabled: false,
          offsetY: 50,
        },
        crosshairs: {
          show: true,
          position: "back",
          stroke: {
            color: colors.dark[500],
            width: 1,
            dashArray: 5,
          },
        },
      },
      yaxis: {
        crosshairs: {
          show: true,
          position: "back",
          stroke: {
            color: colors.dark[200],
            width: 1,
            dashArray: 3,
          },
        },
        labels: {
          formatter: function (value: number) {
            return value.toFixed(0);
          },
        },
      },
      fill: {
        type: "gradient",
        colors: [colors.green[900]],
        gradient: {
          shadeIntensity: 0.1,
          opacityFrom: 0.6,
          opacityTo: 0.3,
          stops: [60, 100],
        },
      },
      grid: {
        show: true,
        borderColor: colors.dark[400],
        strokeDashArray: 0,
        yaxis: {
          lines: {
            show: true, // Show horizontal lines (parallel to x-axis)
          },
        },
        xaxis: {
          lines: {
            show: false, // Optionally disable vertical grid lines (parallel to y-axis)
          },
        },
      },
      colors: [colors.green[700]],
      tooltip: {
        shared: false,
        custom: ChartTooltipFunc,
        x: {
          formatter: function (value: number) {
            return value.toString();
          },
        },
        theme: "dark",
      },
      stroke: {
        curve: "straight",
        width: 1.5,
      },
      // 'noData' property to handle when there is no data
      noData: {
        text: priceValues.length === 0 ? "Loading..." : "", // Show 'Loading...' if no data
        align: "center",
        verticalAlign: "middle",
        offsetX: 0,
        offsetY: 0,
        style: {
          color: colors.dark[50],
          fontSize: "16px",
          fontFamily: "Josefin Sans",
        },
      },
    },
    series: [
      {
        name: "Price",
        data: priceValues, // Series data
      },
    ],
  };
};

export default getChartOptions;
