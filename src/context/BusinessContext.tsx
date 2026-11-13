import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import type { BusinessProfile } from "@/types/business";
import { INITIAL_BUSINESSES, ALJ_ANNA_PROFILE, createBusinessFromGmbData } from "@/data/businesses";
import { ALL_VALENCIA_BUSINESSES } from "@/data/allValenciaList";

const COMBINED_INITIAL_BUSINESSES: BusinessProfile[] = (() => {
  const seen = new Set<string>();
  const list: BusinessProfile[] = [];
  for (const b of [...INITIAL_BUSINESSES, ...ALL_VALENCIA_BUSINESSES]) {
    if (!seen.has(b.slug)) {
      seen.add(b.slug);
      list.push(b);
    }
  }
  return list;
})();

interface BusinessContextType {
  activeBusiness: BusinessProfile;
  businesses: BusinessProfile[];
  selectBusinessBySlug: (slug: string) => void;
  addNewBusiness: (data: Parameters<typeof createBusinessFromGmbData>[0]) => BusinessProfile;
  addBulkBusinesses: (urls: string[]) => BusinessProfile[];
  resetToDefault: () => void;
}

const BusinessContext = createContext<BusinessContextType | undefined>(undefined);

const LOCAL_STORAGE_CUSTOM_BIZ_KEY = "custom_businesses_v1";

export const BusinessProvider = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // Load custom businesses from local storage
  const [businesses, setBusinesses] = useState<BusinessProfile[]>(() => {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_CUSTOM_BIZ_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          // Merge with initial, avoiding duplicates by slug
          const initialSlugs = new Set(COMBINED_INITIAL_BUSINESSES.map((b) => b.slug));
          const filteredCustom = parsed.filter((b) => !initialSlugs.has(b.slug));
          return [...COMBINED_INITIAL_BUSINESSES, ...filteredCustom];
        }
      }
    } catch {
      // ignore
    }
    return COMBINED_INITIAL_BUSINESSES;
  });

  // Track active slug
  const [activeSlug, setActiveSlug] = useState<string>(() => {
    const match = location.pathname.match(/\/b\/([^/]+)/);
    return match ? match[1] : INITIAL_BUSINESSES[0].slug;
  });

  // Keep slug in sync with URL
  useEffect(() => {
    const match = location.pathname.match(/\/b\/([^/]+)/);
    if (match && match[1]) {
      setActiveSlug(match[1]);
    } else if (location.pathname === "/" && activeSlug !== ALJ_ANNA_PROFILE.slug) {
      // On root, stay with currently selected or default
    }
  }, [location.pathname, activeSlug]);

  const activeBusiness = businesses.find((b) => b.slug === activeSlug) || businesses[0] || ALJ_ANNA_PROFILE;

  const selectBusinessBySlug = useCallback(
    (slug: string) => {
      const exists = businesses.find((b) => b.slug === slug);
      if (exists) {
        setActiveSlug(slug);
        navigate(`/b/${slug}`);
      }
    },
    [businesses, navigate]
  );

  const addNewBusiness = useCallback(
    (data: Parameters<typeof createBusinessFromGmbData>[0]) => {
      const newBiz = createBusinessFromGmbData(data);
      setBusinesses((prev) => {
        const updated = [newBiz, ...prev.filter((b) => b.slug !== newBiz.slug)];
        try {
          const customOnly = updated.filter(
            (b) => !INITIAL_BUSINESSES.some((init) => init.slug === b.slug)
          );
          localStorage.setItem(LOCAL_STORAGE_CUSTOM_BIZ_KEY, JSON.stringify(customOnly));
        } catch {
          // ignore
        }
        return updated;
      });
      setActiveSlug(newBiz.slug);
      navigate(`/b/${newBiz.slug}`);
      return newBiz;
    },
    [navigate]
  );

  const addBulkBusinesses = useCallback(
    (urls: string[]) => {
      const createdProfiles: BusinessProfile[] = [];
      for (const rawUrl of urls) {
        const trimmed = rawUrl.trim();
        if (trimmed && (trimmed.startsWith("http") || trimmed.includes("google.com/maps"))) {
          const profile = createBusinessFromGmbData({ url: trimmed });
          createdProfiles.push(profile);
        }
      }

      if (createdProfiles.length === 0) return [];

      setBusinesses((prev) => {
        const createdSlugs = new Set(createdProfiles.map((p) => p.slug));
        const updated = [...createdProfiles, ...prev.filter((b) => !createdSlugs.has(b.slug))];
        try {
          const customOnly = updated.filter(
            (b) => !INITIAL_BUSINESSES.some((init) => init.slug === b.slug)
          );
          localStorage.setItem(LOCAL_STORAGE_CUSTOM_BIZ_KEY, JSON.stringify(customOnly));
        } catch {
          // ignore
        }
        return updated;
      });

      if (createdProfiles[0]) {
        setActiveSlug(createdProfiles[0].slug);
        navigate(`/b/${createdProfiles[0].slug}`);
      }

      return createdProfiles;
    },
    [navigate]
  );

  const resetToDefault = useCallback(() => {
    setActiveSlug(ALJ_ANNA_PROFILE.slug);
    navigate(`/b/${ALJ_ANNA_PROFILE.slug}`);
  }, [navigate]);

  return (
    <BusinessContext.Provider
      value={{
        activeBusiness,
        businesses,
        selectBusinessBySlug,
        addNewBusiness,
        addBulkBusinesses,
        resetToDefault,
      }}
    >
      {children}
    </BusinessContext.Provider>
  );
};

export const useBusiness = () => {
  const context = useContext(BusinessContext);
  if (!context) {
    throw new Error("useBusiness must be used within a BusinessProvider");
  }
  return context;
};
