/**
 * Analytics Layer using Umami API
 */
import { INDICATORS } from "@/constants/indicators";

const UMAMI_API_CLIENT_ID = process.env.UMAMI_API_CLIENT_ID;
const UMAMI_API_CLIENT_SECRET = process.env.UMAMI_API_CLIENT_SECRET;
const UMAMI_API_URL = process.env.UMAMI_API_URL || "https://api.umami.is";
const UMAMI_WEBSITE_ID = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;

// Cache the auth token
let umamiAuthToken: string | null = null;
let tokenExpiry: number = 0;

async function getUmamiToken() {
  // If a manual token is provided, always use it
  if (process.env.UMAMI_API_TOKEN) {
    return process.env.UMAMI_API_TOKEN;
  }

  if (umamiAuthToken && Date.now() < tokenExpiry) {
    return umamiAuthToken;
  }

  if (!UMAMI_API_CLIENT_ID || !UMAMI_API_CLIENT_SECRET) {
    return null;
  }

  try {
    const res = await fetch(`${UMAMI_API_URL}/v1/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: UMAMI_API_CLIENT_ID,
        password: UMAMI_API_CLIENT_SECRET,
      }),
    });

    if (!res.ok) return null;
    const data = await res.json();
    umamiAuthToken = data.token;
    tokenExpiry = Date.now() + 23 * 60 * 60 * 1000; // 23 hours
    return umamiAuthToken;
  } catch (error) {
    console.error("[Umami] Failed to get auth token", error);
    return null;
  }
}

export interface Trend {
  id: string;
  title: string;
  indicator: string;
  countries: string;
  start: number;
  end: number;
  views: number;
}

// We fetch the Top 5 trending comparisons from Umami URL metrics.
export async function getTrendingComparisons(): Promise<Trend[]> {
  const token = await getUmamiToken();
  const websiteId = UMAMI_WEBSITE_ID;

  if (token && websiteId) {
    try {
      const now = Date.now();
      const twentyFourHoursAgo = now - 24 * 60 * 60 * 1000;
      
      const res = await fetch(
        `${UMAMI_API_URL}/v1/websites/${websiteId}/metrics?type=url&startAt=${twentyFourHoursAgo}&endAt=${now}&limit=20`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.ok) {
        const metrics = await res.json();
        
        // Filter for /explore pages and parse params
        const trends: Trend[] = metrics
          .filter((m: any) => m.x.startsWith("/explore?"))
          .map((m: any, index: number) => {
            try {
              const url = new URL(m.x, "https://statsman.app");
              const indicatorId = url.searchParams.get("indicator");
              const countries = url.searchParams.get("countries") || "";
              const startStr = url.searchParams.get("start");
              const endStr = url.searchParams.get("end");
              
              const indicator = INDICATORS.find(i => i.id === indicatorId);
              const title = indicator 
                ? `${indicator.shortName} in ${countries.split(',').join(', ')}` 
                : "Custom Comparison";

              return {
                id: `umami-${index}`,
                title,
                indicator: indicatorId || "",
                countries,
                start: startStr ? parseInt(startStr) : 1960,
                end: endStr ? parseInt(endStr) : 2024,
                views: m.y,
              };
            } catch (e) {
              return null;
            }
          })
          .filter((t: any): t is Trend => t !== null && !!t.indicator && !!t.countries)
          .slice(0, 5);

        if (trends.length > 0) return trends;
      }
    } catch (error) {
      console.error("[Umami] Error fetching metrics", error);
    }
  }

  // Fallback to mock data if Umami is not configured or fails
  return [
    {
      id: "trend-1",
      title: "GDP in CHN, IND, JPN",
      indicator: "NY.GDP.MKTP.CD",
      countries: "CHN,IND,JPN",
      start: 1980,
      end: 2025,
      views: 12450
    },
    {
      id: "trend-2",
      title: "Population in IND, CHN, USA",
      indicator: "SP.POP.TOTL",
      countries: "IND,CHN,USA",
      start: 1960,
      end: 2025,
      views: 9820
    },
    {
      id: "trend-3",
      title: "Literacy in IND, CHN",
      indicator: "SE.ADT.LITR.ZS",
      countries: "IND,CHN",
      start: 1980,
      end: 2025,
      views: 5430
    }
  ];
}

// Analytics tracking endpoint
export async function trackView(indicator: string, countries: string) {
  // Fire and forget: Umami client-side script already handles page views.
  // This function can be used for custom events if needed.
  console.log(`[Analytics] Tracked view: ${indicator} for ${countries}`);
}
