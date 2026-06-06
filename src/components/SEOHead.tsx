import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  schema?: object | object[];
}

export default function SEOHead({ title, description, canonical, schema }: SEOHeadProps) {
  useEffect(() => {
    document.title = title;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", description);

    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", canonical);
    }

    // Open Graph
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", title);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", description);
    if (canonical) {
      document.querySelector('meta[property="og:url"]')?.setAttribute("content", canonical);
    }

    // Twitter
    document.querySelector('meta[property="twitter:title"]')?.setAttribute("content", title);
    document.querySelector('meta[property="twitter:description"]')?.setAttribute("content", description);

    // Inject page-specific JSON-LD schema
    document.querySelectorAll("script[data-page-schema]").forEach((el) => el.remove());
    if (schema) {
      const schemas = Array.isArray(schema) ? schema : [schema];
      schemas.forEach((s) => {
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.setAttribute("data-page-schema", "true");
        script.textContent = JSON.stringify(s);
        document.head.appendChild(script);
      });
    }

    return () => {
      document.querySelectorAll("script[data-page-schema]").forEach((el) => el.remove());
    };
  }, [title, description, canonical, schema]);

  return null;
}
