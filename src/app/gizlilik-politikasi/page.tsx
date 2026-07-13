import type { Metadata } from "next";
import { PolicyLayout } from "@/components/PolicyLayout";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = { title: "Gizlilik Politikası", description: "Yağmurun Doğası web sitesi gizlilik ve veri kullanımı açıklaması.", alternates: { canonical: "/gizlilik-politikasi" } };

export default function PrivacyPage() {
  return (
    <PolicyLayout title="Gizlilik Politikası" description="Web sitesini ziyaret ederken hangi teknik verilerin işlenebileceğini ve iletişim kanallarının nasıl çalıştığını açıklar.">
      <h2>1. Kapsam</h2>
      <p>Bu politika, {siteConfig.name} bilgilendirme sitesinin ziyaret edilmesi sırasında oluşabilecek teknik veriler ile ziyaretçinin kendi isteğiyle iletişim kanallarında paylaştığı bilgileri kapsar.</p>
      <h2>2. Site üzerinde veri toplama</h2>
      <p>Mevcut sürümde site üzerinde üyelik, sepet, ödeme veya sunucuya gönderilen iletişim formu bulunmaz. WhatsApp mesaj formu, girdiğiniz metni tarayıcıda hazırlar ve yalnızca WhatsApp bağlantısını açar.</p>
      <h2>3. Teknik kayıtlar</h2>
      <p>Barındırma hizmeti; güvenlik, hata analizi ve hizmetin çalışması için IP adresi, istek zamanı, tarayıcı türü ve ziyaret edilen sayfa gibi standart teknik kayıtlar tutabilir. Bu kayıtların saklama koşulları kullanılan barındırma sağlayıcısının politikalarına tabidir.</p>
      <h2>4. Harici bağlantılar</h2>
      <p>WhatsApp ve Instagram bağlantıları ilgili platformlara yönlendirir. Bu platformlarda paylaşılan veriler, platformların kendi gizlilik politikalarına göre işlenir.</p>
      <h2>5. Çerezler ve analiz araçları</h2>
      <p>Proje varsayılan halinde reklam, yeniden pazarlama veya üçüncü taraf analiz çerezi içermez. İleride ölçüm aracı eklenirse bu metin ve gerekli açık rıza mekanizması güncellenmelidir.</p>
      <h2>6. İletişim</h2>
      <p>Gizlilik talepleri için yayın öncesinde tanımlanacak resmi e-posta adresi veya <a href={siteConfig.instagramUrl} target="_blank" rel="noreferrer">{siteConfig.instagramHandle}</a> hesabı kullanılabilir.</p>
      <div className="legal-warning"><strong>Yayın öncesi not:</strong> Bu metin teknik proje taslağıdır. İşletmenin unvanı, adresi, veri sorumlusu bilgisi, saklama süreleri ve kullanılan üçüncü taraf servisler kesinleştiğinde hukuk danışmanı tarafından gözden geçirilmelidir.</div>
    </PolicyLayout>
  );
}
