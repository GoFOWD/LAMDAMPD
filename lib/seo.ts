import { Metadata } from "next"
import { COMPANY_INFO, SEO_DEFAULTS } from "@/lib/content"

export function constructMetadata({
  title = SEO_DEFAULTS.title,
  description = SEO_DEFAULTS.description,
  image = "/images/prism-main.png",
  icons = "/favicon.ico",
  noIndex = false,
}: {
  title?: string
  description?: string
  image?: string
  icons?: string
  noIndex?: boolean
} = {}): Metadata {
  return {
    title: {
      default: title,
      template: `%s | ${COMPANY_INFO.name}`,
    },
    description,
    openGraph: {
      title,
      description,
      url: "https://example.com", // TODO: Update with real URL
      siteName: COMPANY_INFO.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "ko_KR",
      type: "website",
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
        },
    icons,
    metadataBase: new URL("https://example.com"), // TODO: Update with actual domain
  }
}
