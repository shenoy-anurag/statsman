import politicalDataRaw from '@/data/political.json';

export interface PoliticalEra {
  leader: string;
  party: string;
  color: string;
  start: number;
  end: number;
  reference?: string;
}

export type PoliticalDataset = Record<string, PoliticalEra[]>;

const politicalData: PoliticalDataset = politicalDataRaw as PoliticalDataset;

/**
 * Gets the specific political leader and party traversing a given country at a given year.
 */
export function getPoliticalEra(countryCode: string, year: number): PoliticalEra | null {
  const eras = politicalData[countryCode];
  if (!eras) return null;
  
  // A leader is ruling a year if the year is >= start and < end. 
  // Modifiers can be made to handle overlap, but simplest interval logic for now.
  return eras.find(era => year >= era.start && year < era.end) || null;
}

/**
 * Gets the entire political history provided in our Wikidata JSON for a given country code.
 */
export function getPoliticalErasForCountry(countryCode: string): PoliticalEra[] {
  return politicalData[countryCode] || [];
}
