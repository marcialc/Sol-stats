"use client";

import React, { useState } from "react";
import RangeSelector from "../RangeSelector";
import ChartDisplay from "./ChartDisplay";

const timeRangeToDaysMap: { [key: string]: number } = {
  "24h": 1,
  "7d": 7,
  "1m": 30,
  "3m": 90,
  "1y": 365,
};

type LineAreaChartProps = {
  tokenName: string;
};

const LineAreaChart = ({ tokenName }: LineAreaChartProps) => {
  const [days, setDays] = useState<number>(timeRangeToDaysMap["24h"]);

  const handleTimeRangeSelect = (range: string) => {
    const selectedDays = timeRangeToDaysMap[range];
    setDays(selectedDays);
  };

  return (
    <>
      <div className="flex md:justify-end justify-center">
        <RangeSelector
          ranges={Object.keys(timeRangeToDaysMap)}
          onSelect={handleTimeRangeSelect}
          defaultSelected="24h"
        />
      </div>
      <ChartDisplay tokenName={tokenName} days={days} />
    </>
  );
};

export default LineAreaChart;
