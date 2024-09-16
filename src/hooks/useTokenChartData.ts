import useSWR from "swr";
import { formatPrice } from "@/app/utils/helpers";
import getChartOptions from "@/components/LineAreaChart/ChartOptions";

const COIN_GECKO_API_KEY = process.env.NEXT_PUBLIC_COIN_GECKO_API_KEY;
const COIN_GECKO_API_URL = process.env.NEXT_PUBLIC_COIN_GECKO_API_URL;

type UseTokenChartDataProps = {
  tokenName: string;
  days: number;
  refreshInterval?: number;
};

type MarketChartResponse = {
  prices: [number, number][];
  market_caps: [number, number][];
  total_volumes: [number, number][];
};

const processMarketData = (prices?: [number, number][]) => {
  if (!prices) return { timestamps: [], priceValues: [] };

  const timestamps = prices.map((item: any) =>
    new Date(item[0]).toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    })
  );
  const priceValues = prices.map((item: any) => formatPrice(item[1]));

  return { timestamps, priceValues };
};

const fetcher = async (url: string, headerValue: string) => {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "x-cg-demo-api-key": headerValue,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
};

const useTokenChartData = ({
  tokenName,
  days,
  refreshInterval,
}: UseTokenChartDataProps) => {
  if (!COIN_GECKO_API_KEY) {
    throw new Error("Coin Gecko API Key is missing");
  }

  if (!COIN_GECKO_API_URL) {
    throw new Error("Coin Gecko API URL is missing");
  }

  const apiUrl = `${COIN_GECKO_API_URL}/coins/${tokenName}/market_chart?vs_currency=usd&days=${days}`;

  const { data, isLoading, error } = useSWR<MarketChartResponse>(
    [apiUrl, COIN_GECKO_API_KEY],
    ([url, key]) => fetcher(url as string, key as string),
    {
      refreshInterval,
    }
  );

  const { timestamps, priceValues } = processMarketData(data?.prices);
  let chartOptions = getChartOptions(timestamps, priceValues, days);

  return { chartOptions, isLoading, error };
};

export default useTokenChartData;
