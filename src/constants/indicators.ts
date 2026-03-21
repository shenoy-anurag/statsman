export interface IndicatorConfig {
  id: string;
  name: string;
  caveat: string;
}

export const INDICATORS: IndicatorConfig[] = [
  {
    id: "SP.POP.TOTL",
    name: "Total Population",
    caveat: "Population projections and estimates from various census data. Tracking methods and margins of error can vary significantly between developing countries.",
  },
  {
    id: "NY.GDP.MKTP.CD",
    name: "GDP (current US$)",
    caveat: "GDP measures formal economic activity and does not account for inequality, value of unpaid work, or informal economies, which can be massive in emerging markets.",
  },
  {
    id: "SE.ADT.LITR.ZS",
    name: "Literacy rate, adult total (% of people ages 15 and above)",
    caveat: "Literacy definitions rely on varied methodology by country and year. Many reports rely on self-reporting rather than standardized empirical testing.",
  },
  {
    id: "SP.DYN.LE00.IN",
    name: "Life expectancy at birth, total (years)",
    caveat: "Life expectancy relies on accurate mortality reporting and infant survival rates, which can be misreported in turbulent eras.",
  }
];

// Provide an easy lookup map for UI rendering context
export const INDICATORS_MAP = INDICATORS.reduce((acc, curr) => {
  acc[curr.id] = curr;
  return acc;
}, {} as Record<string, IndicatorConfig>);
