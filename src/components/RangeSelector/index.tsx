import React, { useState, useEffect } from "react";

type RangeSelectorProps = {
  ranges: string[];
  onSelect: (range: string) => void;
  defaultSelected?: string;
};

const RangeSelector: React.FC<RangeSelectorProps> = ({
  ranges,
  onSelect,
  defaultSelected,
}) => {
  const [activeRange, setActiveRange] = useState<string>(
    defaultSelected || ranges[0]
  );

  useEffect(() => {
    if (defaultSelected) {
      setActiveRange(defaultSelected);
    }
  }, [defaultSelected]);

  const handleRangeClick = (range: string) => {
    setActiveRange(range);
    onSelect(range);
  };

  return (
    <div role="tablist" className="tabs tabs-boxed">
      {ranges.map((range) => (
        <button
          key={range}
          className={`hover:bg-[#232b34] tab ${
            activeRange === range ? "tab-active" : ""
          }`}
          onClick={() => handleRangeClick(range)}
        >
          {range}
        </button>
      ))}
    </div>
  );
};

export default RangeSelector;
