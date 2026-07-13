import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { ProductCard } from "@/components/ProductCard";
import { ArrowRightIcon, WhatsAppIcon } from "@/components/Icons";
import { categories, getProductsByCategory, products } from "@/data/products";
import { absoluteUrl, whatsappHref } from "@/data/site";

export const metadata: Metadata = {
  title: "Ürünler",
  description: "Dut pekmezi, dut kurusu, kuşburnu, bitkiler, kurutmalık sebzeler, ev eriştesi ve salamura yaprak ürünlerini inceleyin.",
  alternates: { canonical: "/urunler" },
  openGraph: { title: "Ürünler | Yağmurun Doğası", url: "/urunler" },
};

export default function ProductsPage() {
  const whatsapp = whatsappHref("Merhaba, ürünleriniz hakkında güncel gramaj ve stok bilgisi almak istiyorum.");
  const external = whatsapp.startsWith("http");

  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Yağmurun Doğası Ürünleri",
        url: absoluteUrl("/urunler"),
        numberOfItems: products.length,
        itemListElement: products.map((product, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: absoluteUrl(`/urunler/${product.slug}`),
          name: product.name,
        })),
      }} />
      <div className="page-hero">
        <div className="container">
          <Breadcrumbs items={[{ name: "Ana Sayfa", href: "/" }, { name: "Ürünler" }]} />
          <p className="eyebrow">Ürün kataloğu</p>
          <h1>Köy kahvaltılıklarından ev yapımı lezzetlere</h1>
          <p>Her üründe kullanım, içerik, gramaj, alerjen ve saklama bilgilerini okuyun. Güncel fiyat ve stok için doğrudan iletişim kurun.</p>
          <div className="anchor-nav" aria-label="Ürün kategorileri">
            {categories.map((category) => <a href={`#${category.slug}`} key={category.slug}>{category.name}</a>)}
          </div>
        </div>
      </div>

      {categories.map((category, index) => {
        const categoryProducts = getProductsByCategory(category.slug);
        return (
          <section className={`section product-category-section${index % 2 ? " section--tinted" : ""}`} id={category.slug} key={category.slug}>
            <div className="container">
              <div className="category-heading">
                <div><p className="eyebrow">{String(index + 1).padStart(2, "0")} / {String(categories.length).padStart(2, "0")}</p><h2>{category.name}</h2></div>
                <p>{category.description}</p>
              </div>
              <div className="product-grid">
                {categoryProducts.map((product) => <ProductCard product={product} key={product.slug} />)}
              </div>
            </div>
          </section>
        );
      })}

      <section className="section catalog-cta">
        <div className="container catalog-cta__inner">
          <div><p className="eyebrow eyebrow--light">Aradığınız ürünü bulamadınız mı?</p><h2>Mevsimsel ürünleri ve yeni stokları sorun.</h2><p>Ürün listesi üretim ve hasat dönemine göre değişebilir.</p></div>
          <Link className="button button--cream" href={whatsapp} {...(external ? { target: "_blank", rel: "noreferrer" } : {})}><WhatsAppIcon /> WhatsApp’tan Sorun <ArrowRightIcon /></Link>
        </div>
      </section>
    </>
  );
}
