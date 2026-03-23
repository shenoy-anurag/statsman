# Statsman

**Statsman** is a professional-grade web application for visualizing global socio-economic metrics, uniquely integrated with historical political leadership data. It enables cross-sectional analysis by mapping World Bank indicators against custom political timelines, allowing users to evaluate national performance across different leadership eras and party regimes in a single, intuitive interface.

---

## Core Capabilities

- **Interactive Visualizations**: High-performance multi-line and area charts built with Recharts and Shadcn UI.
- **Political Era Overlays**: SVG-driven gradients and opacities map ruling parties and leaders directly onto the temporal data.
- **Intelligent Data Interpolation**: Bridges data gaps with period-aware proximity tooltips, ensuring a continuous analytical experience.
- **Deep-Link State Management**: Type-safe URL synchronization via `nuqs` for sharing precise multi-country and indicator comparisons.
- **Curated Regional Dashboards**: Specialized views like the **India Dashboard**, featuring granular datasets including DPIIT-recognized startup growth.
- **Adaptive Interface**: Native light and dark mode support with a focus on premium, responsive design.

## Technical Architecture

| Layer | System |
| :--- | :--- |
| **Framework** | Next.js 15 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS v4, Shadcn UI |
| **Charts** | Recharts (SVG Linear Gradients) |
| **State** | `nuqs` (URL Query Sync) |
| **Package Manager** | `pnpm` |

## Getting Started

1. **Install Dependencies**
   ```bash
   pnpm install
   ```

2. **Run Development Server**
   ```bash
   pnpm dev
   ```

3. **Access Application**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Data Strategy

Statsman utilizes a hybrid strategy to ensure both speed and contextual depth:

- **Global Indicators**: Concurrently fetched from the **World Bank REST API** with intelligent caching for optimal performance.
- **Curated Series**: Integration of specialized regional data, such as Indian startup counts sourced from the **Open Government Data (OGD) Platform**.
- **Political Metadata**: A modular, static JSON dataset mapping rulers and political parties to precise yearly boundaries.
