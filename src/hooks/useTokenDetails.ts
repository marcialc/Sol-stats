import useSWR from "swr";

const COIN_GECKO_API_KEY = process.env.NEXT_PUBLIC_COIN_GECKO_API_KEY;
const COIN_GECKO_API_URL = process.env.NEXT_PUBLIC_COIN_GECKO_API_URL;

type UseTokenDetailsProps = {
  tokenName: string;
  refreshInterval?: number; // Optional prop for setting refresh interval (in milliseconds)
};

type TokenDetailsResponse = {
  id: string;
  symbol: string;
  name: string;
  image: {
    thumb: string;
    small: string;
    large: string;
  };
  market_data: {
    current_price: {
      usd: number;
    };
    market_cap: {
      usd: number;
    };
    total_supply: number | null;
    circulating_supply: number;
    max_supply: number | null;
    price_change_percentage_24h: number | null;
    high_24h: {
      usd: number;
    };
    low_24h: {
      usd: number;
    };
    market_cap_rank: number | null;
  };
  links: {
    homepage: string[];
    blockchain_site: string[];
    repos_url: {
      github: string[];
      bitbucket?: string[];
    };
  };
  description: {
    en: string;
  };
  last_updated: string;
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

const useTokenDetails = ({
  tokenName,
  refreshInterval,
}: UseTokenDetailsProps) => {
  const apiUrl = `${COIN_GECKO_API_URL}/coins/${tokenName}`;

  const response = useSWR<TokenDetailsResponse>(
    [apiUrl, COIN_GECKO_API_KEY],
    ([url, key]) => fetcher(url as string, key as string),
    {
      refreshInterval,
    }
  );

  return response;
};

export default useTokenDetails;
