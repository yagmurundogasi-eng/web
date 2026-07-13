import type { Metadata } from "next";
import { PolicyLayout } from "@/components/PolicyLayout";

export const metadata: Metadata = { title: "KVKK Aydınlatma Metni", description: "Yağmurun Doğası KVKK aydınlatma metni taslağı.", alternates: { canonical: "/kvkk" } };

export default function KvkkPage() {
  return (
    <PolicyLayout title="KVKK Aydınlatma Metni" description="Kişisel verilerin işlenmesine ilişkin temel bilgilendirme taslağıdır.">
      <div className="legal-warning"><strong>Önemli:</strong> Veri sorumlusunun ticari unvanı, açık adresi, MERSİS/VKN bilgisi ve resmi iletişim kanalı henüz verilmediği için bu sayfa yayın öncesi doldurulması gereken bir taslaktır.</div>
      <h2>1. Veri sorumlusu</h2>
      <p>[İŞLETME TİCARİ UNVANI], 6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında veri sorumlusudur. Resmi adres ve iletişim bilgileri işletme tarafından yayın öncesinde eklenmelidir.</p>
      <h2>2. İşlenebilecek kişisel veriler</h2>
      <p>WhatsApp, Instagram veya e-posta üzerinden iletişim kurulması halinde ad-soyad, telefon, kullanıcı adı, e-posta, teslimat ili, mesaj içeriği ve sipariş görüşmesine konu ürün bilgileri işlenebilir.</p>
      <h2>3. İşleme amaçları</h2>
      <ul><li>Ürün, stok, fiyat ve teslimat sorularını yanıtlamak</li><li>Sipariş görüşmesini yürütmek</li><li>Müşteri talep ve şikâyetlerini sonuçlandırmak</li><li>Hukuki yükümlülükleri yerine getirmek</li><li>Bilgi güvenliğini ve hizmet sürekliliğini sağlamak</li></ul>
      <h2>4. Hukuki sebepler ve aktarım</h2>
      <p>Veriler; sözleşmenin kurulması veya ifası, hukuki yükümlülük, meşru menfaat ve gerektiğinde açık rıza hukuki sebeplerine dayanarak işlenebilir. WhatsApp, Instagram, e-posta ve barındırma servislerinin kullanımı yurt içi veya yurt dışı veri aktarımı doğurabilir; kullanılan servisler kesinleşince bu bölüm ayrıntılandırılmalıdır.</p>
      <h2>5. Saklama süresi</h2>
      <p>Veriler, işleme amacı ve ilgili mevzuatta öngörülen süre boyunca tutulur; amaç ortadan kalktığında güvenli biçimde silinir, yok edilir veya anonim hale getirilir. Kesin saklama süreleri işletmenin veri envanterine göre belirlenmelidir.</p>
      <h2>6. İlgili kişinin hakları</h2>
      <p>KVKK’nın 11. maddesi kapsamındaki erişim, düzeltme, silme, işleme itiraz ve zarar giderimi talepleri resmi başvuru kanalına iletilebilir. Başvuru adresi ve yöntemi yayın öncesinde eklenmelidir.</p>
    </PolicyLayout>
  );
}
