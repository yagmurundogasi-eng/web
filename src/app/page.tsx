import Image from "next/image";
import Link from "next/link";
import { BlogCard } from "@/components/BlogCard";
import { CategoryCard } from "@/components/CategoryCard";
import { JsonLd } from "@/components/JsonLd";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeading } from "@/components/SectionHeading";
import { ArrowRightIcon, BoxIcon, CheckIcon, LeafIcon, QuoteIcon, TruckIcon, VillageIcon, WhatsAppIcon } from "@/components/Icons";
import { blogPosts } from "@/data/blog";
import { categories, products } from "@/data/products";
import { faqs } from "@/data/faq";
import { absoluteUrl, siteConfig, whatsappHref, whatsappNumber } from "@/data/site";

export default function HomePage() {
  const whatsapp = whatsappHref("Merhaba, Yağmurun Doğası ürünleri hakkında bilgi almak istiyorum.");
  const external = whatsapp.startsWith("http");
  const featured = ["dut-pekmezi", "dut-kurusu", "kusburnu", "dag-kekigi", "kurutmalik-biber", "dogal-ev-eristesi"]
    .map((slug) => products.find((product) => product.slug === slug))
    .filter((product): product is (typeof products)[number] => Boolean(product));

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    logo: absoluteUrl("/brand-mark.svg"),
    description: siteConfig.description,
    sameAs: [siteConfig.instagramUrl],
    ...(whatsappNumber ? { contactPoint: [{ "@type": "ContactPoint", telephone: `+${whatsappNumber}`, contactType: "customer service", availableLanguage: ["Turkish"] }] } : {}),
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    inLanguage: "tr-TR",
    description: siteConfig.description,
    publisher: { "@type": "Organization", name: siteConfig.name },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.slice(0, 4).map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <JsonLd data={[organization, website, faqSchema]} />

      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__content">
            <p className="eyebrow"><LeafIcon width={18} height={18} /> Yağmur Hanım’ın girişimi, bilgisi açık lezzetler</p>
            <h1>Köyün gerçek lezzetleri, <em>Yağmur’un özeniyle sofranıza...</em></h1>
            <p className="hero__lead">
              Yağmurun Doğası, adını markanın arkasındaki girişimci Yağmur Hanım’dan alır. Dut ürünlerinden ev eriştesine uzanan seçkiyi içerik, gramaj ve gönderim bilgileriyle tanıyın.
            </p>
            <div className="hero__actions">
              <Link className="button button--primary" href="/urunler">Ürünleri İncele <ArrowRightIcon /></Link>
              <Link className="button button--secondary" href="/hakkimizda">Yağmur’un Hikâyesi</Link>
            </div>
            <ul className="hero__checks" aria-label="Bilgilendirme ilkeleri">
              <li><CheckIcon /> İçerik ve alerjen bilgisi</li>
              <li><CheckIcon /> Güncel stok teyidi</li>
              <li><CheckIcon /> Doğrudan iletişim</li>
            </ul>
          </div>
          <div className="hero__visual">
            <Image src="/images/hero-orchard.webp" alt="Çiçekli meyve bahçesinin arkasında köy manzarası" fill priority sizes="(max-width: 900px) 100vw, 48vw" />
            <div className="hero__visual-card">
              <span className="hero__visual-icon"><VillageIcon /></span>
              <div><strong>Yağmur’un seçkisi</strong><span>Kaynak ve parti bilgisi sipariş öncesinde teyit edilir.</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Hizmet özellikleri">
        <div className="container trust-strip__grid">
          <div><LeafIcon /><span><strong>Şeffaf Ürün Bilgisi</strong><small>İçerik ve menşei teyidi</small></span></div>
          <div><VillageIcon /><span><strong>Yağmur’un Seçkisi</strong><small>Küçük üretici ve mevsim odaklı</small></span></div>
          <div><BoxIcon /><span><strong>Özenli Paketleme</strong><small>Ürüne uygun ambalaj</small></span></div>
          <div><TruckIcon /><span><strong>Gönderim Bilgisi</strong><small>Teslimat öncesi netleştirme</small></span></div>
          <div><WhatsAppIcon /><span><strong>WhatsApp İletişim</strong><small>Hızlı ürün danışmanlığı</small></span></div>
        </div>
      </section>

      <section className="section categories-section">
        <div className="container">
          <SectionHeading eyebrow="Ürün grupları" title="Sofranıza uygun kategoriyi keşfedin" description="Ürünleri doğrudan satmak yerine, karar vermenizi kolaylaştıracak açık ve güncel bilgi sunuyoruz." />
          <div className="category-grid">
            {categories.map((category) => <CategoryCard category={category} key={category.slug} />)}
          </div>
        </div>
      </section>

      <section className="section section--tinted">
        <div className="container">
          <SectionHeading
            eyebrow="Öne çıkanlar"
            title="En çok merak edilen ürünler"
            description="Gramaj ve stok dönemsel olarak değişebilir. Güncel bilgiyi ürün sayfasından WhatsApp mesajına aktarabilirsiniz."
            action={<Link className="text-link text-link--large" href="/urunler">Tüm ürünleri gör <ArrowRightIcon /></Link>}
          />
          <div className="product-grid">
            {featured.map((product) => <ProductCard product={product} key={product.slug} />)}
          </div>
        </div>
      </section>

      <section className="section story-section">
        <div className="container story-grid">
          <div className="story-image">
            <Image src="/images/story-herbal-tea.webp" alt="Ahşap masada cam demlik, kurutulmuş bitkiler ve çay malzemeleri" fill sizes="(max-width: 900px) 100vw, 48vw" />
            <div className="story-image__label"><LeafIcon /> Yağmur’un seçkisi</div>
          </div>
          <div className="story-content">
            <p className="eyebrow">İsmin ardındaki girişimci</p>
            <h2>Adını Yağmur Hanım’dan, karakterini doğaya duyduğu saygıdan alır.</h2>
            <p>Buradaki “Yağmur”, bir doğa olayını değil markanın arkasındaki girişimciyi anlatır. “Doğası” ise ürünleri kaynağına, emeğe ve kendi karakterine saygıyla sunma yaklaşımını temsil eder.</p>
            <p>Bu kişisel yaklaşım; abartılı sağlık iddiaları yerine kullanım, içerik, alerjen, saklama ve dönemsel stok bilgilerini açıkça paylaşmayı gerektirir.</p>
            <div className="story-principles">
              <div><span>01</span><strong>Bilgiyi doğrula</strong><p>Parti ve içerik ayrıntılarını gönderim öncesinde teyit et.</p></div>
              <div><span>02</span><strong>Beklentiyi netleştir</strong><p>Gramaj, paketleme ve teslimat bilgisini açıkça paylaş.</p></div>
              <div><span>03</span><strong>İletişimi kolaylaştır</strong><p>Aracı adımlar yerine WhatsApp üzerinden doğrudan görüş.</p></div>
            </div>
            <Link className="button button--secondary" href="/hakkimizda">Yağmur’un Hikâyesi <ArrowRightIcon /></Link>
          </div>
        </div>
      </section>

      <section className="section value-section">
        <div className="container">
          <SectionHeading eyebrow="Neden Yağmurun Doğası?" title="Güven, süslü sözden değil; doğru bilgiden doğar" />
          <div className="value-grid">
            <article><LeafIcon /><h3>Belgesiz iddia yok</h3><p>Organik sertifika gibi doğrulanması gereken ifadeleri ancak belgesi bulunduğunda kullanırız.</p></article>
            <article><BoxIcon /><h3>Ürüne göre bilgi</h3><p>Her ürün için gramaj, içerik, alerjen, saklama ve dönemsel bulunabilirlik ayrı değerlendirilir.</p></article>
            <article><TruckIcon /><h3>Teslimat öncesi teyit</h3><p>Özellikle soğuk zincir ve kırılabilir ambalajlarda gönderim koşulları netleştirilir.</p></article>
            <article><QuoteIcon /><h3>Gerçek yorum yaklaşımı</h3><p>Uydurma müşteri yorumu yayınlamayız; doğrulanabilir geri bildirimler izinle paylaşılır.</p></article>
          </div>
        </div>
      </section>

      <section className="section guide-section section--tinted">
        <div className="container">
          <SectionHeading
            eyebrow="Doğal Yaşam Rehberi"
            title="Ürünü seçmek kadar doğru kullanmak da önemli"
            description="Arama yapanların gerçekten sorduğu sorulara açık, ölçülü ve uygulanabilir yanıtlar."
            action={<Link className="text-link text-link--large" href="/blog">Tüm rehberler <ArrowRightIcon /></Link>}
          />
          <div className="blog-grid">
            {blogPosts.slice(0, 3).map((post) => <BlogCard post={post} key={post.slug} />)}
          </div>
        </div>
      </section>

      <section className="section faq-preview">
        <div className="container faq-preview__grid">
          <div className="faq-preview__intro">
            <p className="eyebrow">Aklınızdakiler</p>
            <h2>Sık sorulan sorulara açık yanıtlar</h2>
            <p>Sipariş, ürün bilgisi, fotoğraflar ve sağlık beyanları hakkında temel noktaları burada bulabilirsiniz.</p>
            <Link className="button button--secondary" href="/sik-sorulan-sorular">Tüm Sorular</Link>
          </div>
          <div className="faq-list">
            {faqs.slice(0, 4).map((faq, index) => (
              <details key={faq.question} open={index === 0}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section instagram-cta">
        <div className="container instagram-cta__inner">
          <div>
            <p className="eyebrow eyebrow--light">Instagram’da takip edin</p>
            <h2>Ürünlerden, hazırlık süreçlerinden ve yeni stoklardan haberdar olun.</h2>
            <p>{siteConfig.instagramHandle}</p>
          </div>
          <div className="instagram-cta__actions">
            <a className="button button--cream" href={siteConfig.instagramUrl} target="_blank" rel="noreferrer">Instagram’a Git <ArrowRightIcon /></a>
            <Link className="button button--outline-light" href={whatsapp} {...(external ? { target: "_blank", rel: "noreferrer" } : {})}><WhatsAppIcon /> Ürün Bilgisi Al</Link>
          </div>
        </div>
      </section>
    </>
  );
}
