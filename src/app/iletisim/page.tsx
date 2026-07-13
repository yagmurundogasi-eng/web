import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { WhatsAppContactForm } from "@/components/WhatsAppContactForm";
import { InstagramIcon, MailIcon, MapPinIcon, WhatsAppIcon } from "@/components/Icons";
import { absoluteUrl, siteConfig, whatsappNumber } from "@/data/site";

export const metadata: Metadata = {
  title: "İletişim",
  description: "Yağmurun Doğası ürünleri için WhatsApp, Instagram ve e-posta iletişim bilgileri.",
  alternates: { canonical: "/iletisim" },
  openGraph: { title: "İletişim | Yağmurun Doğası", url: "/iletisim" },
};

export default function ContactPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Yağmurun Doğası İletişim",
    url: absoluteUrl("/iletisim"),
    mainEntity: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.siteUrl,
      sameAs: [siteConfig.instagramUrl],
      ...(siteConfig.email ? { email: siteConfig.email } : {}),
      ...(whatsappNumber ? { telephone: `+${whatsappNumber}` } : {}),
    },
  };

  return (
    <>
      <JsonLd data={contactSchema} />
      <div className="page-hero page-hero--compact">
        <div className="container">
          <Breadcrumbs items={[{ name: "Ana Sayfa", href: "/" }, { name: "İletişim" }]} />
          <p className="eyebrow">Bize ulaşın</p>
          <h1>Ürün hakkında sormak istediğiniz her şeyi doğrudan konuşalım.</h1>
          <p>Güncel gramaj, içerik, fiyat, stok, gönderim ve saklama bilgisi için en hızlı kanal WhatsApp’tır.</p>
        </div>
      </div>

      <section className="section">
        <div className="container contact-layout">
          <div className="contact-options">
            <article><span><WhatsAppIcon /></span><div><h2>WhatsApp</h2><p>Ürün adını, istediğiniz gramajı ve teslimat ilini yazarak bilgi alın.</p>{siteConfig.phoneDisplay ? <strong>{siteConfig.phoneDisplay}</strong> : <small>Numara Vercel ortam değişkeniyle eklenecek.</small>}</div></article>
            <article><span><InstagramIcon /></span><div><h2>Instagram</h2><p>Yeni ürün ve stok paylaşımlarını takip edin, doğrudan mesaj gönderin.</p><a href={siteConfig.instagramUrl} target="_blank" rel="noreferrer">{siteConfig.instagramHandle}</a></div></article>
            <article><span><MailIcon /></span><div><h2>E-posta</h2><p>Kurumsal talepler ve ayrıntılı sorular için e-posta kullanabilirsiniz.</p>{siteConfig.email ? <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> : <small>E-posta adresi yayın öncesinde eklenecek.</small>}</div></article>
            <article><span><MapPinIcon /></span><div><h2>Konum</h2><p>Üretim ve teslim alma noktası bilgisi randevu ve uygunluğa göre paylaşılır.</p><strong>{siteConfig.location}</strong></div></article>
            <div className="contact-safety"><strong>Güvenli iletişim</strong><p>Kart bilgisi, internet bankacılığı şifresi veya tek kullanımlık doğrulama kodu istemeyiz. Ödeme ve teslimat ayrıntılarını yalnızca doğruladığınız resmi iletişim kanalı üzerinden paylaşın.</p></div>
            <Link className="text-link text-link--large" href="/sik-sorulan-sorular">Sık sorulan soruları inceleyin</Link>
          </div>
          <WhatsAppContactForm whatsappNumber={whatsappNumber} instagramUrl={siteConfig.instagramUrl} />
        </div>
      </section>
    </>
  );
}
