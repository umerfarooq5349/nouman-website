# SEO Audit Report: muhammadnouman.services

This report details the SEO audit findings for **muhammadnouman.services** based on the Next.js codebase. It covers structural SEO, semantic markup, dynamic route meta-tagging, search engine crawlability, indexability, and structured schema data.

---

## 1. Executive Summary

| Category | Status | Priority | Key Findings |
| :--- | :--- | :--- | :--- |
| **Search Engine Crawlability** | 🔴 Critical | High | Missing `robots.txt` and `sitemap.xml`. Search engines cannot efficiently index project routes. |
| **Dynamic Page Metadata** | 🔴 Critical | High | Case study detail pages lack dynamic metadata, defaulting to the generic homepage metadata. |
| **Social Media Sharing (OG)** | 🟡 Warning | Medium | OpenGraph and Twitter cards lack preview image URLs. Links shared on social channels will look empty. |
| **Structured Data (Schema)** | 🟡 Warning | Medium | No JSON-LD Schema markup is present to clarify business credentials and certifications. |
| **Semantic & Accessibility** | 🟢 Good | Low | Solid heading hierarchy, alt attributes, skip-to-content helper, and clean mobile layouts. |

---

## 2. Detailed Findings & Audits

### 🔴 Issue 1: Missing Robots.txt & Sitemap.xml
* **Finding:** There are no `robots.txt` or `sitemap.xml` files in the `public/` directory or computed routes in `app/`. 
* **Impact:** Search engine bots (Googlebot, Bingbot) cannot quickly map new pages, leading to delayed indexing of case studies or service offerings.
* **Next.js Best Practice:** Utilize Next.js dynamic routing APIs (`sitemap.ts` and `robots.ts`) in the `app/` directory to generate these files automatically.

### 🔴 Issue 2: Generic Case Study Metadata (Dynamic Pages)
* **Finding:** The dynamic route file [app/case-study/[slug]/page.tsx](file:///c:/Users/Muhammad%20Umer%20Farooq/Desktop/project/app/case-study/[slug]/page.tsx) does not export `generateMetadata` or a `metadata` object.
* **Impact:** Every single case study (e.g. `/case-study/dr-tarek-aesthetics`) shares the exact title and description of the home page: `"Muhammad Nouman — Certified GoHighLevel Expert"`. This causes duplicate-content flags in Google Search Console and weakens search keyword rankings.

### 🟡 Issue 3: Missing Social Preview Images (OpenGraph / Twitter)
* **Finding:** Global metadata in [app/layout.tsx](file:///c:/Users/Muhammad%20Umer%20Farooq/Desktop/project/app/layout.tsx) defines OG and Twitter cards, but is missing their `images` array.
* **Impact:** Shared links on LinkedIn, Twitter, or Slack will render only text previews without an engaging brand cover image.

### 🟡 Issue 4: Missing Structured Data (JSON-LD)
* **Finding:** The site does not serve structured JSON-LD data to specify Nouman's role, professional service status, and certifications.
* **Impact:** Search engines cannot construct rich-snippets for brand searches (such as showing business address, phone, star ratings, or services list in search result cards).

---

## 3. Recommended Code Implementations

To address these gaps, implement the following changes in the workspace:

### A. Dynamic Sitemap Generator
Create [app/sitemap.ts](file:///c:/Users/Muhammad%20Umer%20Farooq/Desktop/project/app/sitemap.ts) to compile routes dynamically:

```typescript
import { MetadataRoute } from "next";
import { caseStudies } from "@/lib/case-studies";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://muhammadnouman.services";

  // Static routes
  const staticRoutes = ["", "/about", "/services", "/process", "/work", "/contact"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Dynamic Case Studies
  const caseStudyRoutes = Object.keys(caseStudies).map((slug) => ({
    url: `${baseUrl}/case-study/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...caseStudyRoutes];
}
```

### B. Robots.txt Configuration
Create [app/robots.ts](file:///c:/Users/Muhammad%20Umer%20Farooq/Desktop/project/app/robots.ts):

```typescript
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/_next/",
    },
    sitemap: "https://muhammadnouman.services/sitemap.xml",
  };
}
```

### C. Dynamic Metadata for Case Studies
Add `generateMetadata` inside [app/case-study/[slug]/page.tsx](file:///c:/Users/Muhammad%20Umer%20Farooq/Desktop/project/app/case-study/[slug]/page.tsx):

```typescript
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const study = caseStudies[params.slug];
  if (!study) return {};

  return {
    title: `${study.title} Case Study — GoHighLevel Setup`,
    description: study.headline,
    openGraph: {
      title: `${study.title} | GHL CRM Case Study`,
      description: study.headline,
      url: `https://muhammadnouman.services/case-study/${params.slug}`,
      type: "article",
    },
  };
}
```

### D. JSON-LD Schema Markup
Embed structured business schema inside the home page layout or root layout:

```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Muhammad Nouman — Certified GoHighLevel Expert",
  "url": "https://muhammadnouman.services",
  "logo": "https://muhammadnouman.services/logo_dark.png",
  "description": "Done-for-you GoHighLevel setups, funnels, and automated outbound systems for clinics and service agencies.",
  "sameAs": [
    "https://www.linkedin.com/in/muhammad-nouman",
    "https://facebook.com/nouman.ghl"
  ]
}
```
