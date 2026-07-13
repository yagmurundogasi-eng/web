import type { Metadata } from "next";
import { PolicyLayout } from "@/components/PolicyLayout";

export const metadata: Metadata = { title: "Kullanım Koşulları", description: "Yağmurun Doğası web sitesi kullanım koşulları.", alternates: { canonical: "/kullanim-kosullari" } };

export default function TermsPage() {
  return (
    <PolicyLayout title="Kullanım Koşulları" description="Web sitesindeki bilgi, görsel ve yönlendirmelerin kullanım çerçevesini açıklar.">
      <h2>1. Bilgilendirme amacı</h2>
      <p>Bu web sitesi ürünleri tanıtmak ve ziyaretçiyi resmi iletişim kanallarına yönlendirmek amacıyla hazırlanmıştır. Sayfalardaki bilgiler tek başına satış teklifi, stok garantisi veya sipariş onayı oluşturmaz.</p>
      <h2>2. Ürün bilgileri</h2>
      <p>El yapımı ve dönemsel ürünlerde renk, doku, boyut, ambalaj ve bulunabilirlik farklılık gösterebilir. Güncel içerik, gramaj, fiyat ve stok bilgisi iletişim sırasında teyit edilmelidir.</p>
      <h2>3. Sağlık ve beslenme içerikleri</h2>
      <p>Blog ve ürün açıklamaları genel gıda kullanımı içindir; tıbbi tavsiye, tanı veya tedavi vaadi değildir. Özel sağlık durumlarında uzman görüşü alınmalıdır.</p>
      <h2>4. Fikri haklar</h2>
      <p>Marka adı, logo, özgün metinler ve tasarım öğeleri hak sahiplerine aittir. Stok fotoğraflar ilgili lisans koşullarına göre kullanılır ve proje içindeki fotoğraf kredileri dosyasında kaynakları belirtilir.</p>
      <h2>5. Harici platformlar</h2>
      <p>WhatsApp ve Instagram bağlantılarında ilgili platformların kullanım ve gizlilik koşulları geçerlidir. Harici platformların kesintisi veya veri işleme uygulamalarından bu site sorumlu değildir.</p>
      <h2>6. Değişiklikler</h2>
      <p>Ürün listesi, içerikler ve koşullar ihtiyaç halinde güncellenebilir. Önemli değişikliklerde sayfanın güncelleme tarihi yenilenir.</p>
    </PolicyLayout>
  );
}
