"use client";

// components/IDXEmbed.tsx
// Drop-in iframe component for any rDesk IDX search page

import { IDX_CONFIG } from "@/lib/idx-config";

type IDXView = "mapSearch" | "myListings" | "officeListings";

interface IDXEmbedProps {
  /** Which IDX search to show. Defaults to 'officeListings'. */
  view?: IDXView;
  /** Override with a completely custom URL if needed. */
  customUrl?: string;
  /** iframe height. Defaults to '700px'. */
  height?: string;
  /** Accessible title for the iframe. */
  title?: string;
}

export default function IDXEmbed({
  view = "officeListings",
  customUrl,
  height = "700px",
  title = "Property Search",
}: IDXEmbedProps) {
  const src = customUrl ?? IDX_CONFIG.links[view];

  return (
    <div className="idx-embed-wrapper w-full rounded-lg overflow-hidden shadow-md border border-gray-200">
      <iframe
        src={src}
        width="100%"
        height={height}
        frameBorder="0"
        title={title}
        allowFullScreen
        loading="lazy"
        style={{ display: "block" }}
      />
    </div>
  );
}
