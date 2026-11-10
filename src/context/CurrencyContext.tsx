import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react";

export type Currency = "USD" | "VES";

export interface CurrencyContextType {
  currency: Currency;
  setCurrency: (c: Currency) => void;
  toggleCurrency: () => void;
  bcvRate: number | null;
  convertToVES: (usdPrice: number) => number;
  formatCurrency: (usdPrice: number) => string;
  formatDualPrice: (usdPrice: number) => { primary: string; secondary: string; full: string };
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

const RATE_CACHE_KEY = "bcvRateCache";
const DEFAULT_FALLBACK_RATE = 75.0; // Reasonable fallback if completely offline on first launch

// Function to fetch rate from Venezuelan official APIs
async function fetchBCVRate(): Promise<number | null> {
  // Source 1: DolarAPI Venezuela (Fast, highly reliable, CORS enabled)
  try {
    const res = await fetch("https://ve.dolarapi.com/v1/dolares/oficial");
    if (res.ok) {
      const data = await res.json();
      if (typeof data?.promedio === "number" && data.promedio > 0) {
        return data.promedio;
      }
    }
  } catch (err) {
    console.warn("DolarAPI rate fetch failed:", err);
  }

  // Source 2: PyDolarVe API
  try {
    const res = await fetch("https://pydolarve.org/api/v2/dollar?page=bcv");
    if (res.ok) {
      const data = await res.json();
      const price = data?.monitors?.usd?.price;
      const numPrice = typeof price === "number" ? price : parseFloat(price);
      if (!isNaN(numPrice) && numPrice > 0) {
        return numPrice;
      }
    }
  } catch (err) {
    console.warn("PyDolarVe rate fetch failed:", err);
  }

  return null;
}

export const CurrencyProvider = ({ children }: { children: ReactNode }) => {
  const [currency, setCurrencyState] = useState<Currency>(() => {
    const stored = localStorage.getItem("currency");
    return stored === "VES" ? "VES" : "USD";
  });

  const [bcvRate, setBcvRate] = useState<number | null>(() => {
    try {
      const cached = localStorage.getItem(RATE_CACHE_KEY);
      if (cached) {
        const { rate } = JSON.parse(cached);
        if (typeof rate === "number" && rate > 0) return rate;
      }
    } catch {
      /* ignore parse error */
    }
    return DEFAULT_FALLBACK_RATE;
  });

  const setCurrency = useCallback((c: Currency) => {
    setCurrencyState(c);
    localStorage.setItem("currency", c);
  }, []);

  const toggleCurrency = useCallback(() => {
    setCurrencyState((prev) => {
      const next = prev === "USD" ? "VES" : "USD";
      localStorage.setItem("currency", next);
      return next;
    });
  }, []);

  const convertToVES = useCallback(
    (usdPrice: number): number => {
      const rate = bcvRate || DEFAULT_FALLBACK_RATE;
      return usdPrice * rate;
    },
    [bcvRate]
  );

  useEffect(() => {
    let isMounted = true;

    const getRate = async () => {
      const rate = await fetchBCVRate();
      if (isMounted && rate && rate > 0) {
        setBcvRate(rate);
        try {
          localStorage.setItem(
            RATE_CACHE_KEY,
            JSON.stringify({ rate, fetchedAt: Date.now() })
          );
        } catch {
          /* ignore storage error */
        }
      }
    };

    getRate();

    // Check rate every 15 minutes while app is open
    const interval = setInterval(getRate, 15 * 60 * 1000);
    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  const formatCurrency = useCallback(
    (usdPrice: number): string => {
      if (currency === "VES" && bcvRate) {
        const ves = usdPrice * bcvRate;
        return `${ves.toLocaleString("es-VE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} Bs.`;
      }
      return `$${usdPrice.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    },
    [currency, bcvRate]
  );

  const formatDualPrice = useCallback(
    (usdPrice: number): { primary: string; secondary: string; full: string } => {
      const effectiveRate = bcvRate || DEFAULT_FALLBACK_RATE;
      const vesAmount = usdPrice * effectiveRate;
      const usdStr = `$${usdPrice.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
      const vesStr = `${vesAmount.toLocaleString("es-VE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} Bs.`;

      if (currency === "VES") {
        return {
          primary: vesStr,
          secondary: usdStr,
          full: `${vesStr} · ${usdStr}`,
        };
      }
      return {
        primary: usdStr,
        secondary: vesStr,
        full: `${usdStr} · ${vesStr}`,
      };
    },
    [currency, bcvRate]
  );

  return (
    <CurrencyContext.Provider
      value={{
        currency,
        setCurrency,
        toggleCurrency,
        bcvRate,
        convertToVES,
        formatCurrency,
        formatDualPrice,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const ctx = useContext(CurrencyContext);
  if (!ctx) throw new Error("useCurrency must be used within CurrencyProvider");
  return ctx;
};
