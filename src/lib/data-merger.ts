import { fetchIndicatorData } from "./data-client";
import { getPoliticalEra, PoliticalEra } from "./political-data";

export interface MergedDataPoint {
  year: number;
  [key: string]: number | PoliticalEra | null | undefined;
}

/**
 * Fetches WB indicator data and merges it with the political era data
 * Returns a format optimized for Recharts (Array of yearly objects)
 */
export async function getMergedChartData(
  indicatorCode: string,
  countryCodes: string[],
  startYear: number,
  endYear: number
): Promise<MergedDataPoint[]> {
  const rawData = await fetchIndicatorData(indicatorCode, countryCodes, startYear, endYear);
  
  // rawData is a flat array of { countryCode, year, value }
  // We need to pivot it to { year: 1980, "IND": 40.5, "IND_era": {...}, "CHN": 65.4, "CHN_era": {...} }
  
  const map = new Map<number, MergedDataPoint>();
  
  // Pre-fill years
  for (let year = startYear; year <= endYear; year++) {
    map.set(year, { year });
  }

  // Pivot WB data and mix in political data
  for (const item of rawData) {
    if (item.year >= startYear && item.year <= endYear) {
      let dp = map.get(item.year);
      if (!dp) {
        dp = { year: item.year };
        map.set(item.year, dp);
      }
      dp[item.countryCode] = item.value;
      
      // Inject political era data
      const era = getPoliticalEra(item.countryCode, item.year);
      if (era) {
        dp[`${item.countryCode}_era`] = era;
      }
    }
  }

  // Convert map to array and sort by year chronologically
  return Array.from(map.values()).sort((a, b) => a.year - b.year);
}
