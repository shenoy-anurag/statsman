export interface IndicatorConfig {
  id: string;
  name: string;
  shortName: string;
  caveat: string;
  source: string;
  type: string;
}

export const INDICATORS: IndicatorConfig[] = [
  {
    id: "NY.GDP.MKTP.KD.ZG",
    name: "GDP growth (annual %)",
    shortName: "GDP Growth Rate",
    caveat: "Growth is calculated from constant price GDP year-over-year. Does not account for informal economies or inflation recalculation anomalies.",
    source: "https://data.worldbank.org/indicator/NY.GDP.MKTP.KD.ZG",
    type: "percentage",
  },
  {
    id: "NY.GDP.MKTP.CD",
    name: "GDP (current US$)",
    shortName: "GDP",
    caveat: "GDP measures formal economic activity and doesn't account for inequality, unpaid labor, or the informal sector prevalent in emerging markets.",
    source: "https://data.worldbank.org/indicator/NY.GDP.MKTP.CD",
    type: "absolute",
  },
  {
    id: "NY.GDP.PCAP.CD",
    name: "GDP per capita (current US$)",
    shortName: "GDP per Capita",
    caveat: "Averages total economic output by population size. High wealth concentration and inequality can heavily distort this figure from average lived reality.",
    source: "https://data.worldbank.org/indicator/NY.GDP.PCAP.CD",
    type: "absolute",
  },
  {
    id: "NY.GNP.PCAP.CD",
    name: "GNI per capita, Atlas method (current US$)",
    shortName: "GNI per Capita",
    caveat: "GNI accounts for income from abroad. The Atlas method smooths exchange rate fluctuations, but informal remittances are often underreported.",
    source: "https://data.worldbank.org/indicator/NY.GNP.PCAP.CD",
    type: "absolute",
  },
  {
    id: "NY.GNS.ICTR.GN.ZS",
    name: "Gross Savings (% of GNI)",
    shortName: "Gross Savings Rate",
    caveat: "Calculated as GNI minus total consumption. High savings rates can indicate capital accumulation potential, but may also reflect lack of domestic consumption.",
    source: "https://data.worldbank.org/indicator/NY.GNS.ICTR.GN.ZS",
    type: "percentage",
  },
  {
    id: "SI.POV.NAHC",
    name: "Poverty headcount ratio at national poverty lines",
    shortName: "National Poverty",
    caveat: "National poverty lines are defined differently by each country based on local economic conditions, making direct cross-country numerical comparisons statistically invalid.",
    source: "https://data.worldbank.org/indicator/SI.POV.NAHC",
    type: "percentage",
  },
  {
    id: "SI.POV.LMIC",
    name: "Poverty headcount ratio at $3.65 a day (2017 PPP)",
    shortName: "Absolute Poverty",
    caveat: "Standardized metric for lower-middle-income countries using Purchasing Power Parity. Price fluctuations and localized inflation significantly impact real tracking.",
    source: "https://data.worldbank.org/indicator/SI.POV.LMIC",
    type: "percentage",
  },
  {
    id: "SI.DST.FRST.20",
    name: "Income share held by lowest 20%",
    shortName: "Bottom 20% Income",
    caveat: "Relies on rigorous household surveys which are frequently irregular or delayed in developing nations, leading to structural reporting lags.",
    source: "https://data.worldbank.org/indicator/SI.DST.FRST.20",
    type: "percentage",
  },
  {
    id: "SL.UEM.TOTL.ZS",
    name: "Unemployment, total (% of total labor force)",
    shortName: "Unemployment",
    caveat: "Does not count discouraged workers who stopped looking for jobs, nor does it capture underemployment or extremely poor quality informal work.",
    source: "https://data.worldbank.org/indicator/SL.UEM.TOTL.ZS",
    type: "percentage",
  },
  {
    id: "SL.TLF.CACT.ZS",
    name: "Labor force participation rate, total (15+)",
    shortName: "Labor Force Part.",
    caveat: "Varies heavily based on cultural norms surrounding women in the workplace and shifts in the retirement or compulsory schooling ages.",
    source: "https://data.worldbank.org/indicator/SL.TLF.CACT.ZS",
    type: "percentage",
  },
  {
    id: "SE.PRM.ENRR",
    name: "School enrollment, primary (% gross)",
    shortName: "Primary Enrollment",
    caveat: "Gross enrollment can exceed 100% due to over-age / under-age students and grade repetition. Does not guarantee quality of education or daily attendance.",
    source: "https://data.worldbank.org/indicator/SE.PRM.ENRR",
    type: "percentage",
  },
  {
    id: "SE.ADT.1524.LT.ZS",
    name: "Literacy rate, youth total (% of people ages 15-24)",
    shortName: "Youth Literacy",
    caveat: "Methodologies vary greatly; some nations use self-reporting while others use empirical testing. Usually lags behind rapid demographic shifts.",
    source: "https://data.worldbank.org/indicator/SE.ADT.1524.LT.ZS",
    type: "percentage",
  },
  {
    id: "SP.DYN.LE00.IN",
    name: "Life expectancy at birth, total (years)",
    shortName: "Life Expectancy",
    caveat: "Highly sensitive to infant mortality rates. Rapid changes in medical infrastructure or epidemic outbreaks can radically alter trajectory estimates.",
    source: "https://data.worldbank.org/indicator/SP.DYN.LE00.IN",
    type: "absolute",
  },
  {
    id: "SH.DYN.MORT",
    name: "Mortality rate, under-5 (per 1,000 live births)",
    shortName: "Under-5 Mortality",
    caveat: "Relies on civil registration systems which are often incomplete in lower-income areas, prompting researchers to use demographic models and estimates.",
    source: "https://data.worldbank.org/indicator/SH.DYN.MORT",
    type: "absolute",
  },
  {
    id: "SP.POP.TOTL",
    name: "Population, total",
    shortName: "Population",
    caveat: "Relies on decennial census data and mid-year estimates. Margin of error expands the further away a country is from its last comprehensive physical census.",
    source: "https://data.worldbank.org/indicator/SP.POP.TOTL",
    type: "absolute",
  },
  {
    id: "EG.ELC.ACCS.ZS",
    name: "Access to electricity (% of population)",
    shortName: "Electricity Access",
    caveat: "Measures access to the grid but does not account for reliability, brownouts, or affordability of the power actually provided to households.",
    source: "https://data.worldbank.org/indicator/EG.ELC.ACCS.ZS",
    type: "percentage",
  },
  {
    id: "IT.NET.USER.ZS",
    name: "Individuals using the Internet (% of population)",
    shortName: "Internet Users",
    caveat: "Definition of 'internet user' varies significantly by country, often relying on self-reporting or limited surveys, leading to potential overstatement of actual access.",
    source: "https://data.worldbank.org/indicator/IT.NET.USER.ZS",
    type: "percentage",
  },
  {
    id: "AG.LND.FRST.ZS",
    name: "Forest area (% of land area)",
    shortName: "Forest Cover",
    caveat: "Definition of 'forest' can include commercial plantations depending on the reporting body, sometimes masking real old-growth deforestation.",
    source: "https://data.worldbank.org/indicator/AG.LND.FRST.ZS",
    type: "percentage",
  },
  {
    id: "NE.EXP.GNFS.ZS",
    name: "Exports of goods and services (% of GDP)",
    shortName: "Exports",
    caveat: "High percentages indicate deep integration into the global supply chain but also signify structural vulnerability to global market shocks.",
    source: "https://data.worldbank.org/indicator/NE.EXP.GNFS.ZS",
    type: "percentage",
  },
  {
    id: "BX.KLT.DINV.CD.WD",
    name: "Foreign direct investment, net inflows (BoP)",
    shortName: "FDI Inflows",
    caveat: "Represents net inflows (new investment minus disinvestment). Subject to massive volatility caused by singular mega-deals or sudden geopolitical shifts.",
    source: "https://data.worldbank.org/indicator/BX.KLT.DINV.CD.WD",
    type: "absolute",
  }
];

// Provide an easy lookup map for UI rendering context
export const INDICATORS_MAP = INDICATORS.reduce((acc, curr) => {
  acc[curr.id] = curr;
  return acc;
}, {} as Record<string, IndicatorConfig>);

export const TOP_INDICATORS = [
  "NY.GDP.MKTP.CD",      // GDP
  "NY.GDP.PCAP.CD",      // GDP per capita
  "NY.GNS.ICTR.GN.ZS",   // Gross Savings
  "SL.UEM.TOTL.ZS",      // Unemployment
  "SE.PRM.ENRR",         // School enrollment
  "SP.DYN.LE00.IN",      // Life expectancy
  "EG.ELC.ACCS.ZS",      // Electricity access
  "IT.NET.USER.ZS",      // Internet Users
  "BX.KLT.DINV.CD.WD",   // FDI
  "SP.POP.TOTL"          // Population
];
