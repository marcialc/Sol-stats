import { useState, useEffect } from "react";

export function useLocalStorageWithExpiry<T>(
  key: string,
  initialValue: T,
  ttl: number
) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key);
      if (item) {
        const parsedItem = JSON.parse(item);
        const now = Date.now();
        if (now > parsedItem.expiry) {
          localStorage.removeItem(key);
          return initialValue;
        }
        return parsedItem.value as T;
      }
      return initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      const now = Date.now();
      const item = {
        value: storedValue,
        expiry: now + ttl,
      };
      localStorage.setItem(key, JSON.stringify(item));
    } catch (error) {
      console.error(error);
    }
  }, [key, storedValue, ttl]);

  const removeItem = () => {
    localStorage.removeItem(key);
    setStoredValue(initialValue);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const item = localStorage.getItem(key);
      if (item) {
        const parsedItem = JSON.parse(item);
        const now = Date.now();
        if (now > parsedItem.expiry) {
          localStorage.removeItem(key);
          setStoredValue(initialValue);
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [key, initialValue]);

  return [storedValue, setStoredValue, removeItem] as const;
}
