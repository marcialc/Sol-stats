export const formatPrice = (value: number) => {
  return Number(value.toFixed(2));
};

export const formatLabelDate = (timestamp: string, days: number) => {
  const date = new Date(timestamp);

  if (days === 365) {
    return date.toLocaleDateString("en-US", {
      month: "short",
      year: "2-digit",
    });
  } else if (days === 90 || days === 30 || days === 7) {
    return `${date.getDate()}. ${date.toLocaleDateString("en-US", {
      month: "short",
    })}`;
  } else if (days === 1) {
    return `${date.toLocaleTimeString("en-US", {
      hour: "numeric",
    })}`;
  } else {
    return date.toLocaleDateString();
  }
};

export const formatRelativeTime = (timestamp: number, currentTime: number) => {
  const diffInSeconds = Math.floor((currentTime - timestamp) / 1000);
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);

  if (diffInSeconds < 60) {
    return "Just now";
  } else if (diffInMinutes < 60) {
    return `${diffInMinutes} minute${diffInMinutes !== 1 ? "s" : ""} ago`;
  } else if (diffInHours < 24) {
    return `${diffInHours} hour${diffInHours !== 1 ? "s" : ""} ago`;
  } else {
    return `${diffInDays} day${diffInDays !== 1 ? "s" : ""} ago`;
  }
};

export const formatTooltipDate = (timestamp: string, allSameYear: boolean) => {
  const date = new Date(timestamp);

  // If timestamps are from the same year, omit the year
  if (allSameYear) {
    return `${date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    })}, ${date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZoneName: "short",
    })}`;
  } else {
    // If timestamps are from different years, include the year
    return `${date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })}, ${date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZoneName: "short",
    })}`;
  }
};

export const areAllTimestampsSameYear = (timestamps: string[]): boolean => {
  if (timestamps.length === 0) return true;

  const firstYear = new Date(timestamps[0]).getFullYear();

  return timestamps.every((ts) => new Date(ts).getFullYear() === firstYear);
};

export function formatTimestamp(timestamp: number): string {
  const now = new Date().getTime();
  const difference = now - timestamp;

  if (difference < 0) {
    return "In the future";
  }

  const minutes = Math.floor(difference / (1000 * 60));
  const hours = Math.floor(difference / (1000 * 60 * 60));
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));

  if (minutes < 1) {
    return "Just now";
  } else if (minutes < 60) {
    return `${minutes}m ago`;
  } else if (hours < 24) {
    return `${hours}h ago`;
  } else if (days < 7) {
    return `${days}d ago`;
  } else {
    const weeks = Math.floor(days / 7);
    return `${weeks}w ago`;
  }
}
