import Script from "next/script";

export const Umami = () => {
  const websiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;
  const scriptUrl = process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL || "https://cloud.umami.is/script.js";

  if (!websiteId) return null;

  return (
    <Script
      defer
      src={scriptUrl}
      data-website-id={websiteId}
      data-domains={process.env.NEXT_PUBLIC_UMAMI_DOMAINS}
    />
  );
};
