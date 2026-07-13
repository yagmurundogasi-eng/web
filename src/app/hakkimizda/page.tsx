import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { ArrowRightIcon, BoxIcon, CheckIcon, LeafIcon, TruckIcon, VillageIcon } from "@/components/Icons";
import { absoluteUrl, siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description: "Adını girişimci Yağmur Hanım'dan alan Yağmurun Doğası'nın hikâyesini, ürün seçimini ve şeffaf bilgi yaklaşımını tanıyın.",
  alternates: { canonical: "/hakkimizda" },
  openGraph: { title: "Hakkımızda | Yağmurun Doğası", url: "/hakkimizda" },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "AboutPage",
        name: "Yağmurun Doğası Hakkında",
        url: absoluteUrl("/hakkimizda"),
        inLanguage: "tr-TR",
        about: { "@type": "Organization", name: siteConfig.name, url: siteConfig.siteUrl },
      }} />
      <div className="page-hero page-hero--compact">
        <div className="container">
          <Breadcrumbs items={[{ name: "Ana Sayfa", href: "/" }, { name: "Hakkımızda" }]} />
          <p className="eyebrow">Yağmur Hanım’ın girişimi</p>
          <h1>Adını girişimci Yağmur Hanım’dan, yaklaşımını doğaya duyduğu saygıdan alıyor.</h1>
          <p>Yağmurun Doğası’ndaki “Yağmur”, bir doğa olayını değil markanın arkasındaki girişimciyi anlatır. “Doğası” ise ürünün kaynağına, emeğe ve açık bilgiye duyulan saygıyı temsil eder.</p>
        </div>
      </div>

      <section className="section">
        <div className="container editorial-grid">
          <div className="editorial-image editorial-image--tall">
            <Image src="/images/hero-orchard.webp" alt="Kırsal üretim yaklaşımını temsil eden çiçekli meyve bahçesi ve köy manzarası" fill priority sizes="(max-width: 900px) 100vw, 45vw" />
          </div>
          <div className="editorial-copy">
            <p className="eyebrow">İsmin ardındaki kişi</p>
            <h2>Kişisel özenle başlayan bir marka hikâyesi.</h2>
            <p>Marka, Yağmur Hanım’ın köy lezzetlerini kaynağı ve bilgisiyle birlikte sunma girişiminden doğdu. İsmin ilk yarısı girişimciyi, ikinci yarısı ise ürünlerin gerçek karakterine duyulan saygıyı taşır.</p>
            <p>İnsanlar doğal ürün ararken çoğu zaman aynı sorularla karşılaşıyor: Ürün nereden geliyor, içinde ne var, nasıl saklanmalı ve gönderim koşulları nedir? Yağmurun Doğası bu soruların cevabını siparişten önce vermeyi amaçlar.</p>
            <div className="callout-note">
              <LeafIcon />
              <div><strong>Marka özü</strong><p>“Yağmur” girişimciyi ve kişisel sorumluluğu; “Doğası” ise ürünlerin kaynağına ve karakterine saygılı yaklaşımı ifade eder. İsim ve görsel kimlik bu iki fikri birlikte taşır.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tinted">
        <div className="container">
          <div className="process-heading">
            <p className="eyebrow">Yağmur’un çalışma yaklaşımı</p>
            <h2>Üründen sofraya dört açık adım</h2>
          </div>
          <div className="process-grid">
            <article><span>01</span><VillageIcon /><h3>Ürün seçimi</h3><p>Üretim yöntemi, menşei, mevsim ve mevcut parti bilgileri değerlendirilir.</p></article>
            <article><span>02</span><CheckIcon /><h3>Bilgi teyidi</h3><p>İçerik, alerjen, gramaj ve saklama koşulları sipariş öncesinde netleştirilir.</p></article>
            <article><span>03</span><BoxIcon /><h3>Paketleme</h3><p>Cam, kuru gıda veya soğuk zincir gereksinimine göre uygun ambalaj planlanır.</p></article>
            <article><span>04</span><TruckIcon /><h3>Gönderim</h3><p>Teslimat ili ve ürün özelliğine göre uygunluk bilgisi paylaşılır.</p></article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container editorial-grid editorial-grid--reverse">
          <div className="editorial-copy">
            <p className="eyebrow">Geleceğe bakış</p>
            <h2>Kişisel bir girişimden, güvenilir bir ürün bilgi kaynağına.</h2>
            <p>Site, satış sepeti ve ödeme ekranı yerine araştırma ve iletişim odaklı tasarlandı. Böylece ziyaretçi ürünleri karşılaştırabilir, kullanım rehberlerini okuyabilir ve karar vermeden önce doğrudan soru sorabilir.</p>
            <ul className="check-list">
              <li><CheckIcon /> Gerçek ürün, üretici ve kurucu fotoğraflarına geçiş</li>
              <li><CheckIcon /> Parti bazlı içerik ve gramaj güncellemeleri</li>
              <li><CheckIcon /> Doğrulanabilir müşteri geri bildirimleri</li>
              <li><CheckIcon /> Düzenli, kaynak odaklı rehber içerikleri</li>
            </ul>
            <Link className="button button--primary" href="/urunler">Ürünleri Keşfedin <ArrowRightIcon /></Link>
          </div>
          <div className="editorial-image">
            <Image src="/images/story-herbal-tea.webp" alt="Geleneksel bitki çayı hazırlığını temsil eden sunum" fill sizes="(max-width: 900px) 100vw, 45vw" />
          </div>
        </div>
      </section>
    </>
  );
}
