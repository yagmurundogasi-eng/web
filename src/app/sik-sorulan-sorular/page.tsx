import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { WhatsAppIcon } from "@/components/Icons";
import { faqs } from "@/data/faq";
import { absoluteUrl, whatsappHref } from "@/data/site";

export const metadata: Metadata = {
  title: "Sık Sorulan Sorular",
  description: "Yağmurun Doğası ürünleri, sipariş yöntemi, gönderim, içerik, alerjen ve fotoğraflar hakkında sık sorulan sorular.",
  alternates: { canonical: "/sik-sorulan-sorular" },
};

export default function FaqPage() {
  const whatsapp = whatsappHref("Merhaba, web sitesindeki bilgilere ek olarak bir soru sormak istiyorum.");
  const external = whatsapp.startsWith("http");

  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        url: absoluteUrl("/sik-sorulan-sorular"),
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      }} />
      <div className="page-hero page-hero--compact">
        <div className="container">
          <Breadcrumbs items={[{ name: "Ana Sayfa", href: "/" }, { name: "Sık Sorulan Sorular" }]} />
          <p className="eyebrow">Açık yanıtlar</p>
          <h1>Sık Sorulan Sorular</h1>
          <p>Ürünler, sipariş süreci ve bilgilendirme yaklaşımımızla ilgili temel cevaplar.</p>
        </div>
      </div>
      <section className="section">
        <div className="container container--narrow">
          <div className="faq-list faq-list--page">
            {faqs.map((faq, index) => (
              <details key={faq.question} open={index === 0}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
          <div className="simple-cta">
            <div><h2>Yanıtını bulamadığınız bir konu mu var?</h2><p>Ürün adını belirterek doğrudan sorun; güncel bilgiyi birlikte netleştirelim.</p></div>
            <Link className="button button--primary" href={whatsapp} {...(external ? { target: "_blank", rel: "noreferrer" } : {})}><WhatsAppIcon /> WhatsApp’tan Sorun</Link>
          </div>
        </div>
      </section>
    </>
  );
}
