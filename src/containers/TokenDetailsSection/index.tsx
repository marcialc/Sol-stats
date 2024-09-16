"use client";

import useTokenDetails from "@/hooks/useTokenDetails";
import React from "react";
import TokenDetail from "@/components/TokenDetail";
import { colors } from "color";
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";
import Divider from "@/components/Divider";

type TokenDetailsProps = {
  tokenName: string;
};

const TokenDetailsSection = ({ tokenName }: TokenDetailsProps) => {
  const { data, error } = useTokenDetails({
    tokenName,
    refreshInterval: 30000,
  });

  if (error) return <div>Error loading token data</div>;
  if (!data) return <div>Loading token data...</div>;

  const {
    market_data: {
      current_price,
      market_cap,
      circulating_supply,
      total_supply,
      max_supply,
      price_change_percentage_24h,
    },
    links: { homepage, blockchain_site, repos_url },
  } = data;

  const pricePercentage = () => {
    return (
      price_change_percentage_24h !== null && (
        <div
          className={`flex gap-2 justify-center items-center ${
            price_change_percentage_24h > 0
              ? "text-green-700"
              : "text-orange-800"
          }`}
        >
          {price_change_percentage_24h > 0 ? (
            <BiSolidUpArrow color={colors.green[700]} />
          ) : (
            <BiSolidDownArrow color={colors.orange[800]} />
          )}
          <span>${price_change_percentage_24h.toFixed(2)}%</span>
        </div>
      )
    );
  };

  return (
    <section className="relative w-full md:w-[300px] md:max-h-[90dvh] flex flex-col items-center md:items-start border border-dark-600 rounded-lg justify-center md:overflow-auto p-4 mb-4 md:mb-0">
      <TokenDetail
        title="Current Price"
        subSection={
          <div className="flex gap-4">
            ${current_price.usd.toLocaleString()}
            {pricePercentage()}
          </div>
        }
      />
      <Divider />
      <TokenDetail
        title="Market Cap"
        subSection={market_cap.usd.toLocaleString()}
      />
      <Divider />
      <TokenDetail
        title="Circulating Supply"
        subSection={circulating_supply.toLocaleString()}
      />
      <Divider />

      {total_supply ? (
        <>
          <TokenDetail
            title="Total Supply"
            subSection={total_supply.toLocaleString()}
          />{" "}
          <Divider />
        </>
      ) : null}

      <TokenDetail
        title="Max Supply"
        subSection={max_supply ? max_supply.toLocaleString() : "∞"}
      />
      <Divider />

      {price_change_percentage_24h ? (
        <>
          <TokenDetail
            title="24h Change"
            subSection={`${price_change_percentage_24h.toFixed(2)}%`}
          />
          <Divider />
        </>
      ) : null}
      <h2 className="text-xl my-4">Info</h2>
      <TokenDetail
        title="Website"
        subSection={
          <a
            href={homepage[0]}
            target="_blank"
            className="btn btn-active btn-ghost leading-none min-h-0 h-fit p-2"
          >
            solana
          </a>
        }
      />
      <Divider />
      <TokenDetail
        title="Explorer"
        subSection={
          <a
            href={blockchain_site[0]}
            target="_blank"
            className="btn btn-active btn-ghost leading-none min-h-0 h-fit p-2"
          >
            solscan.io
          </a>
        }
      />
      <Divider />
      <TokenDetail
        title="Source Code"
        subSection={
          <a
            href={repos_url.github[0]}
            target="_blank"
            className="btn btn-active btn-ghost leading-none min-h-0 h-fit p-2"
          >
            GitHub
          </a>
        }
      />
    </section>
  );
};

export default TokenDetailsSection;
