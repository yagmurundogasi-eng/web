import type { ReactNode } from "react";
import { Breadcrumbs } from "./Breadcrumbs";

export function PolicyLayout({ title, description, updated = "12 Temmuz 2026", children }: { title: string; description: string; updated?: string; children: ReactNode }) {
  return (
    <>
      <div className="page-hero page-hero--compact policy-hero">
        <div className="container">
          <Breadcrumbs items={[{ name: "Ana Sayfa", href: "/" }, { name: title }]} />
          <p className="eyebrow">Bilgilendirme metni</p>
          <h1>{title}</h1>
          <p>{description}</p>
          <small>Son güncelleme: {updated}</small>
        </div>
      </div>
      <section className="section">
        <div className="container container--policy policy-content">{children}</div>
      </section>
    </>
  );
}
