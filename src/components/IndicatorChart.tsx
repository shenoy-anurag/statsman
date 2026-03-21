"use client";

import { useMemo } from "react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
} from "@/components/ui/chart";
import { MergedDataPoint } from "@/lib/data-merger";
import { PoliticalEra } from "@/lib/political-data";

interface IndicatorChartProps {
  data: MergedDataPoint[];
  countryCodes: string[];
  indicatorName: string;
}

export function IndicatorChart({ data, countryCodes, indicatorName }: IndicatorChartProps) {
  // Dynamically create a configuration for shadcn chart based on selected countries
  const chartConfig = useMemo(() => {
    const config: ChartConfig = {};
    const colors = [
      "hsl(var(--chart-1))", 
      "hsl(var(--chart-2))", 
      "hsl(var(--chart-3))", 
      "hsl(var(--chart-4))", 
      "hsl(var(--chart-5))"
    ];
    countryCodes.forEach((code, i) => {
      config[code] = {
        label: code,
        color: colors[i % colors.length],
      };
    });
    return config;
  }, [countryCodes]);

  // We build a highly customized tooltip to expose the political rulers per country for a given year
  const CustomTooltipContent = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-background border rounded-lg p-3 shadow-lg flex flex-col gap-3 min-w-[240px]">
          <p className="font-semibold text-foreground border-b pb-2 mb-1">{label}</p>
          {payload.map((entry: any, index: number) => {
            const countryCode = entry.dataKey;
            const era: PoliticalEra | undefined = entry.payload[`${countryCode}_era`];
            const value = entry.value;

            return (
              <div key={index} className="flex flex-col gap-1 border-l-4 pl-3 py-1" style={{ borderLeftColor: entry.color }}>
                <div className="flex items-center justify-between gap-4">
                  <span className="font-medium" style={{ color: entry.color }}>{countryCode}</span>
                  <span className="font-semibold text-foreground">
                    {value !== null && value !== undefined 
                      ? value.toLocaleString(undefined, { maximumFractionDigits: 2 }) 
                      : "No Data"}
                  </span>
                </div>
                {era ? (
                  <div className="text-xs text-muted-foreground bg-muted p-2 rounded-md mt-1 flex flex-col gap-0.5">
                    <span className="block font-medium text-foreground text-sm">{era.leader}</span>
                    <span className="block">{era.party}</span>
                    <div className="w-full h-1 mt-1 rounded-full opacity-70" style={{ backgroundColor: era.color }}></div>
                  </div>
                ) : (
                  <div className="text-xs text-muted-foreground bg-muted/50 p-2 rounded-md mt-1 border border-dashed">
                    Unknown Leader Data
                  </div>
                )}
              </div>
            );
          })}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full flex-col flex items-start gap-4">
      <h3 className="text-xl font-bold tracking-tight">{indicatorName}</h3>
      <ChartContainer config={chartConfig} className="h-[500px] w-full bg-card rounded-xl border p-4 shadow-sm">
        <LineChart accessibilityLayer data={data} margin={{ left: 16, right: 16, top: 16, bottom: 16 }}>
          <CartesianGrid vertical={false} opacity={0.3} />
          <XAxis
            dataKey="year"
            tickLine={false}
            axisLine={false}
            tickMargin={12}
            minTickGap={32}
          />
          <YAxis 
            tickLine={false} 
            axisLine={false} 
            tickMargin={12} 
            width={80}
            tickFormatter={(value) => {
              // Concise large number formatting for Y axis
              if (value >= 1e9) return (value / 1e9).toFixed(1) + 'B';
              if (value >= 1e6) return (value / 1e6).toFixed(1) + 'M';
              if (value >= 1e3) return (value / 1e3).toFixed(1) + 'K';
              return value.toLocaleString();
            }} 
          />
          {/* We replace default shadcn tooltip with our custom political era tooltip */}
          <ChartTooltip cursor={{ stroke: "hsl(var(--muted-foreground))", strokeWidth: 1, strokeDasharray: "4 4" }} content={<CustomTooltipContent />} />
          {countryCodes.map((code) => (
            <Line
              key={code}
              dataKey={code}
              type="monotone"
              stroke={`var(--color-${code})`}
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 6, strokeWidth: 0 }}
            />
          ))}
        </LineChart>
      </ChartContainer>
    </div>
  );
}
