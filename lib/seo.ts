import { Metadata } from "next";

const SITE_NAME = "Kotaxa";
const SITE_URL = "https://kotaxa.com";

interface SEOProps {
  title: string;
  description: string;
  path?: string;
}

export function createMetadata({
  title,
  description,
  path = "",
}: SEOProps): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,

    metadataBase: new URL(SITE_URL),

    alternates: {
      canonical: url,
    },

    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
