"use client";

import React from "react";
import LineAreaChart from "@/components/LineAreaChart";
import ChartTile from "@/components/LineAreaChart/ChartTitle";
import useTokenDetails from "@/hooks/useTokenDetails";

type ChartSectionProps = {
  tokenName: string;
};

const ChartSection = ({ tokenName }: ChartSectionProps) => {
  const { data, isLoading, error } = useTokenDetails({ tokenName });

  if (isLoading)
    return <span className="loading loading-dots loading-lg"></span>;
  if (error || !data) return <div>Error loading token data</div>;

  return (
    <section className="flex-1 flex flex-col gap-4 md:p-4 sm:p-2 md:border md:border-dark-600 md:rounded-lg">
      <ChartTile
        logo={data.image.large}
        name={data.name}
        symbol={data.symbol}
      />
      <LineAreaChart tokenName={tokenName} />
    </section>
  );
};

export default ChartSection;
