/**
 * Mock Analytics Layer
 * In production, map these functions to Vercel KV, Vercel Postgres, or PostHog.
 */

export interface Trend {
  id: string;
  title: string;
  indicator: string;
  countries: string;
  start: number;
  end: number;
  views: number;
}

// We simulate fetching the Top 3 trending comparisons a user might want to explore.
export async function getTrendingComparisons(): Promise<Trend[]> {
  // Simulating DB latency
  await new Promise((resolve) => setTimeout(resolve, 500));

  return [
    {
      id: "trend-1",
      title: "The Rise of Asian Economies",
      indicator: "NY.GDP.MKTP.CD", // GDP
      countries: "CHN,IND,JPN",
      start: 1980,
      end: 2025,
      views: 12450
    },
    {
      id: "trend-2",
      title: "Global Population Boom",
      indicator: "SP.POP.TOTL",
      countries: "IND,CHN,USA",
      start: 1960,
      end: 2025,
      views: 9820
    },
    {
      id: "trend-3",
      title: "Adult Literacy Successes",
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
  // Fire and forget: send to DB/KV
  console.log(`[Analytics] Tracked view: ${indicator} for ${countries}`);
  // In production: await sql`UPDATE ...`
}
