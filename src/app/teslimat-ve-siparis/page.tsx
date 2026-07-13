import type { Metadata } from "next";
import Link from "next/link";
import { PolicyLayout } from "@/components/PolicyLayout";
import { whatsappHref } from "@/data/site";

export const metadata: Metadata = { title: "Sipariş ve Teslimat", description: "Yağmurun Doğası WhatsApp üzerinden bilgi ve sipariş görüşmesi ile teslimat süreci.", alternates: { canonical: "/teslimat-ve-siparis" } };

export default function DeliveryPage() {
  const whatsapp = whatsappHref("Merhaba, sipariş ve teslimat süreci hakkında bilgi almak istiyorum.");
  const external = whatsapp.startsWith("http");
  return (
    <PolicyLayout title="Sipariş ve Teslimat" description="Sitenin bilgilendirme odaklı yapısını ve WhatsApp üzerinden yürütülen görüşme adımlarını açıklar.">
      <h2>1. Site üzerinden sipariş oluşmaz</h2>
      <p>Web sitesinde sepet, ödeme veya otomatik sipariş kaydı bulunmaz. Ürün sayfalarındaki WhatsApp bağlantıları bilgi görüşmesi başlatır.</p>
      <h2>2. Görüşmede teyit edilen bilgiler</h2>
      <ul><li>Ürünün güncel gramajı, içeriği ve ambalajı</li><li>Stok ve üretim partisi durumu</li><li>Fiyat, ödeme yöntemi ve varsa kargo ücreti</li><li>Teslimat ili ve tahmini gönderim zamanı</li><li>Soğuk zincir veya özel paketleme gereksinimi</li></ul>
      <h2>3. Kargo ve soğuk zincir</h2>
      <p>Kuru ürünler ile süt ürünlerinin gönderim koşulları aynı değildir. Tereyağı ve peynir gibi ürünlerde teslimat süresi, hava koşulu ve soğuk zincir imkânı değerlendirilmeden kesin gönderim taahhüdü verilmez.</p>
      <h2>4. Hasar ve teslimat kontrolü</h2>
      <p>Kargo tesliminde paketin dış görünümünü kontrol edin. Hasarlı veya sızıntılı paketlerde teslimat görevlisine tutanak tutturarak aynı gün resmi iletişim kanalından bilgi verin.</p>
      <h2>5. İade ve cayma koşulları</h2>
      <p>Çabuk bozulabilen, son kullanma tarihi yakın veya hijyen nedeniyle tekrar satışı uygun olmayan ürünlerde cayma hakkı mevzuattaki istisnalara tabi olabilir. Ürüne özel koşullar sipariş kesinleşmeden önce yazılı olarak paylaşılmalıdır.</p>
      <div className="legal-warning"><strong>Yayın öncesi not:</strong> Kesin kargo firması, ücretler, teslim süreleri, ödeme yöntemi, iade adresi ve satıcı bilgileri netleştiğinde bu metin tüketici hukuku uzmanı tarafından güncellenmelidir.</div>
      <Link className="button button--primary" href={whatsapp} {...(external ? { target: "_blank", rel: "noreferrer" } : {})}>Teslimat Bilgisi Sorun</Link>
    </PolicyLayout>
  );
}
