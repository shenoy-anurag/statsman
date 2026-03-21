# Statsman

**Statsman** is a highly interactive, modern web application designed to visualize economic and social metrics across countries, dynamically overlaid with political leadership and party data.

By natively integrating World Bank data with custom political timelines, Statsman enables users to intuitively track and compare national performance across specific political eras (e.g., comparing literacy rates and GDP growth across the distinct reigns of different leaders).

## ✨ Features
- **Dynamic Visualizations:** Rich, interactive multi-line and area charts engineered completely with Recharts and Shadcn UI.
- **Political Era Overlays:** Translucent shading, SVG gradient stops, and precise alternating opacities map ruling parties and leaders directly onto the dataset's physical timeline.
- **Advanced Interpolation:** Smooth dashed-line interpolation bridges empty data gaps seamlessly while intelligently pulling the nearest era-specific known facts directly into your active hover tooltip.
- **Shareable State Management:** Real-time URL-driven state (via `nuqs`) allows for the easy sharing of precise multi-country and year-based filter comparisons.
- **Light & Dark Mode:** Accessible global system theming supported natively via `next-themes`.

## 🛠 Tech Stack
- **Core Framework:** [Next.js 16 (App Router)](https://nextjs.org/)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 + Shadcn UI
- **Charts:** Recharts (utilizing `<AreaChart>` and advanced `<linearGradient>` SVG stops)
- **State Management:** `nuqs` (Type-safe URL search query synchronization)
- **Package Manager:** `pnpm`

## 🚀 Getting Started

Ensure you are using `pnpm` as your package manager, then install the dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to interact with the dashboard.

## 📊 Data Strategy
Statsman operates through a unique dual data strategy to guarantee fast and context-heavy renders:
1. **Indicator Data:** Fetched concurrently through the official World Bank REST API, caching metrics securely to ensure optimal loading speeds and accurate metric exploration.
2. **Political Data:** A modular, heavily curated static JSON dataset (`src/data/political.json`) natively maps specific rulers and political parties to tight yearly boundaries.
