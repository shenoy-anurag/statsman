export interface IndicatorData {
  countryCode: string;
  year: number;
  value: number | null;
}

/**
 * Fetches indicator data utilizing a dual-strategy (Offline JSON + REST API).
 * By default it checks for offline data first to ensure snappy visualizations.
 */
export async function fetchIndicatorData(
  indicatorCode: string,
  countryCodes: string[],
  startYear: number,
  endYear: number,
  useOffline: boolean = true
): Promise<IndicatorData[]> {
  if (useOffline) {
    // TODO: In the future, we will load a static JSON file stored in public/ or a local database.
    // For now, we fallback to the API gracefully.
    console.warn("Offline dataset not yet populated. Falling back to World Bank REST API.");
  }

  // World Bank API format: http://api.worldbank.org/v2/country/{countryCodes}/indicator/{indicatorCode}?date={startYear}:{endYear}&format=json&per_page=1000
  // countryCodes should be separated by a semicolon
  const countryString = countryCodes.join(";");
  const url = `https://api.worldbank.org/v2/country/${countryString}/indicator/${indicatorCode}?date=${startYear}:${endYear}&format=json&per_page=1000`;
  
  try {
    const response = await fetch(url, { next: { revalidate: 86400 } }); // Cache for 24 hours
    if (!response.ok) throw new Error("Failed to fetch from World Bank API");
    
    const data = await response.json();
    
    // The World Bank API returns an array where the second element contains the actual data
    if (!data || !data[1]) return [];

    return data[1].map((item: any) => ({
      countryCode: item.countryiso3code || item.country.id,
      year: parseInt(item.date, 10),
      value: item.value, // value can be null explicitly
    }));
  } catch (error) {
    console.error("Error fetching World Bank data:", error);
    return [];
  }
}
