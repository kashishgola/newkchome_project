// lib/idx-config.ts
// Central configuration for Rebecca Graham's IDX integration

export const IDX_CONFIG = {
  agent: {
    name: "Rebecca Graham",
    email: "rebecca@keyhomeskc.com",
    slug: "rebecca-graham",
  },

  // rDesk IDX listing URLs
  links: {
    mapSearch:
      "https://kcrar.rdeskbw.com/rebecca-graham/listing/listingsearch.aspx",
    myListings:
      "https://kcrar.rdeskbw.com/rebecca-graham/Listing/ProcessAllMyListingsSearch.aspx",
    officeListings:
      "https://kcrar.rdeskbw.com/rebecca-graham/Listing/ProcessAllMyListingsSearch.aspx?o=1",
  },

  // Admin portals (server-side / internal use only — never expose passwords)
  admin: {
    idxAdmin: "https://kcrar.fnistools.com",
    crmAdmin: "https://kcrar.rdesk.com",
  },
} as const;
