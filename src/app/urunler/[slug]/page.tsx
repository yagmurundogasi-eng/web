import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { ProductCard } from "@/components/ProductCard";
import { ArrowRightIcon, CheckIcon, LeafIcon, WhatsAppIcon } from "@/components/Icons";
import { getProduct, products } from "@/data/products";
import { absoluteUrl, siteConfig, whatsappHref } from "@/data/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};

  return {
    title: product.name,
    description: product.summary,
    alternates: { canonical: `/urunler/${product.slug}` },
    openGraph: {
      type: "website",
      title: `${product.name} | Yağmurun Doğası`,
      description: product.summary,
      url: `/urunler/${product.slug}`,
      images: [{ url: product.image, alt: product.imageAlt }],
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const whatsapp = whatsappHref(`Merhaba, ${product.name} hakkında güncel gramaj, içerik, fiyat, stok ve gönderim bilgisi almak istiyorum.`);
  const external = whatsapp.startsWith("http");
  const related = products.filter((item) => item.categorySlug === product.categorySlug && item.slug !== product.slug).slice(0, 3);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: [absoluteUrl(product.image)],
    description: product.description,
    category: product.category,
    url: absoluteUrl(`/urunler/${product.slug}`),
    brand: { "@type": "Brand", name: siteConfig.name },
    additionalProperty: [
      { "@type": "PropertyValue", name: "Gramaj seçenekleri", value: product.gramaj.join(", ") },
      { "@type": "PropertyValue", name: "Saklama", value: product.storage },
      { "@type": "PropertyValue", name: "Bulunabilirlik", value: product.seasonality },
    ],
  };

  return (
    <>
      <JsonLd data={productSchema} />
      <section className="product-detail section">
        <div className="container">
          <Breadcrumbs items={[
            { name: "Ana Sayfa", href: "/" },
            { name: "Ürünler", href: "/urunler" },
            { name: product.category, href: `/urunler#${product.categorySlug}` },
            { name: product.name },
          ]} />
          <div className="product-detail__grid">
            <div className="product-detail__image">
              <Image src={product.image} alt={product.imageAlt} fill priority sizes="(max-width: 900px) 100vw, 50vw" />
              <span className="photo-note">Gerçek fotoğraf · Sunum amaçlı</span>
            </div>
            <div className="product-detail__content">
              <p className="eyebrow">{product.category}</p>
              <h1>{product.name}</h1>
              <p className="product-detail__summary">{product.summary}</p>
              <p>{product.description}</p>

              <div className="availability-card">
                <div><span>Güncel fiyat</span><strong>WhatsApp’tan teyit edin</strong></div>
                <div><span>Stok durumu</span><strong>Dönemsel / parti bazlı</strong></div>
              </div>

              <div className="option-block">
                <span className="option-block__title">Olası gramaj seçenekleri</span>
                <div className="option-chips">{product.gramaj.map((item) => <span key={item}>{item}</span>)}</div>
                <small>Kesin gramaj ve ambalaj seçeneği sipariş öncesinde paylaşılır.</small>
              </div>

              <ul className="feature-list">
                {product.highlights.map((highlight) => <li key={highlight}><CheckIcon /> {highlight}</li>)}
              </ul>

              <div className="product-detail__actions">
                <Link className="button button--primary button--wide" href={whatsapp} {...(external ? { target: "_blank", rel: "noreferrer" } : {})}>
                  <WhatsAppIcon /> WhatsApp’tan Bilgi Al
                </Link>
                <Link className="button button--secondary" href="/iletisim">İletişim</Link>
              </div>
              <p className="microcopy">Bu sayfa ödeme almaz ve stok rezervasyonu yapmaz. Ürün bilgisi görüşme sırasında güncel haliyle teyit edilir.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tinted product-information">
        <div className="container">
          <div className="information-grid">
            <article><span className="information-grid__icon"><LeafIcon /></span><h2>Kullanım önerisi</h2><p>{product.usage}</p></article>
            <article><span className="information-grid__icon"><LeafIcon /></span><h2>Saklama koşulları</h2><p>{product.storage}</p></article>
            <article><span className="information-grid__icon"><LeafIcon /></span><h2>Mevsim ve stok</h2><p>{product.seasonality}</p></article>
          </div>
          <div className="health-disclaimer"><strong>Gıda bilgilendirme notu:</strong> Ürün açıklamaları tıbbi tavsiye veya tedavi vaadi değildir. Alerjiniz, özel beslenme gereksiniminiz ya da düzenli kullandığınız ilaç varsa ürün içeriğini ayrıca teyit edin.</div>
        </div>
      </section>

      {related.length ? (
        <section className="section">
          <div className="container">
            <div className="category-heading"><div><p className="eyebrow">Aynı kategoriden</p><h2>Diğer ürünler</h2></div><Link className="text-link text-link--large" href={`/urunler#${product.categorySlug}`}>Kategoriyi gör <ArrowRightIcon /></Link></div>
            <div className="product-grid">{related.map((item) => <ProductCard product={item} key={item.slug} />)}</div>
          </div>
        </section>
      ) : null}
    </>
  );
}
