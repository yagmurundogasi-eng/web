import Link from "next/link";
import { JsonLd } from "./JsonLd";
import { absoluteUrl } from "@/data/site";

type Item = { name: string; href?: string };

export function Breadcrumbs({ items }: { items: Item[] }) {
  const schemaItems = items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.href ? absoluteUrl(item.href) : undefined,
  }));

  return (
    <>
      <nav className="breadcrumbs" aria-label="Sayfa yolu">
        <ol>
          {items.map((item, index) => (
            <li key={`${item.name}-${index}`}>
              {item.href ? <Link href={item.href}>{item.name}</Link> : <span aria-current="page">{item.name}</span>}
            </li>
          ))}
        </ol>
      </nav>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: schemaItems }} />
    </>
  );
}
