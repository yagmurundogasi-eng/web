# Yağmurun Doğası

Yağmurun Doğası için hazırlanmış, mobil uyumlu ve arama motoru odaklı bilgilendirme web sitesi.

Bu proje **e-ticaret değildir**. Sepet, ödeme, üyelik ve otomatik sipariş kaydı bulunmaz. Ziyaretçi ürünleri inceler; güncel gramaj, içerik, fiyat, stok ve gönderim bilgisini WhatsApp veya Instagram üzerinden teyit eder.

## Teknoloji

- Next.js 16 App Router
- React 19
- TypeScript
- Saf CSS; ek UI kütüphanesi yok
- Yerel ve optimize edilmiş WebP görseller
- Vercel uyumlu statik/SSG sayfalar

## İçerik

- Özgün ana sayfa
- Hakkımızda
- 5 ürün kategorisi ve 18 ürün detay sayfası
- 6 bilgilendirici blog rehberi
- WhatsApp mesaj hazırlama formu
- Instagram yönlendirmesi
- Sık sorulan sorular
- Sipariş ve teslimat bilgilendirmesi
- Gizlilik, KVKK ve kullanım koşulları taslakları
- 404 sayfası

## SEO ve makine okunabilirlik

- Sayfa bazlı title, description, canonical ve Open Graph verileri
- Organization, WebSite, Product, ItemList, BlogPosting, BreadcrumbList ve FAQPage JSON-LD verileri
- Otomatik `sitemap.xml`
- Otomatik `robots.txt`
- Dinamik Open Graph görseli
- Semantik HTML ve erişilebilir navigasyon
- Ürünler ve blog yazıları arasında dahili bağlantılar
- `/llms.txt` bilgi özeti

`llms.txt` tamamlayıcı bir metindir; arama motoru veya yapay zekâ görünürlüğü garantisi vermez. Asıl yapı; taranabilir HTML, açık sayfa mimarisi, özgün içerik, canonical URL, sitemap ve yapılandırılmış veriye dayanır.

## Kurulum

Node.js 20.9 veya daha yeni bir sürüm kullanın.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Tarayıcıda `http://localhost:3000` adresini açın.

## Ortam değişkenleri

`.env.local` veya Vercel Project Settings > Environment Variables alanına aşağıdaki değerleri girin:

```env
NEXT_PUBLIC_SITE_URL=https://www.alanadiniz.com
NEXT_PUBLIC_WHATSAPP_NUMBER=905551112233
NEXT_PUBLIC_CONTACT_EMAIL=merhaba@alanadiniz.com
NEXT_PUBLIC_PHONE_DISPLAY=0555 111 22 33
NEXT_PUBLIC_LOCATION=İlçe, İl
```

### WhatsApp numarası biçimi

- Yalnızca rakam girin.
- Türkiye için `90` ülke koduyla başlayın.
- Başta `+` veya `0` kullanmayın.
- Örnek: `905551112233`

Numara eklenene kadar WhatsApp bağlantıları iletişim sayfasına yönlenir; site hatalı veya uydurma bir numara kullanmaz.

## GitHub ve Vercel yayını

```bash
git init
git add .
git commit -m "Yağmurun Doğası ilk sürüm"
git branch -M main
git remote add origin GITHUB_REPO_ADRESINIZ
git push -u origin main
```

Ardından:

1. Vercel'de **Add New > Project** seçin.
2. GitHub deposunu içe aktarın.
3. Framework otomatik olarak Next.js algılanır.
4. Yukarıdaki ortam değişkenlerini ekleyin.
5. Deploy işlemini başlatın.
6. Alan adını bağladıktan sonra `NEXT_PUBLIC_SITE_URL` değerini gerçek alan adıyla güncelleyin ve yeniden deploy edin.

## İçerik güncelleme

- Marka ve iletişim ayarları: `src/data/site.ts`
- Ürünler ve kategoriler: `src/data/products.ts`
- Blog yazıları: `src/data/blog.ts`
- Sık sorulan sorular: `src/data/faq.ts`
- Tasarım: `src/app/globals.css`
- Görseller: `public/images`

## Fotoğraf yaklaşımı

Projede AI üretimi görsel kullanılmadı. Tüm mevcut fotoğraflar gerçek Pexels stok fotoğraflarıdır ve yerel WebP dosyaları olarak optimize edilmiştir. Kaynaklar `PHOTO_CREDITS.md` dosyasında listelenmiştir.

Bununla birlikte stok fotoğraflar, gönderilecek ürünü birebir temsil etmez. Güven ve dönüşüm için aşağıdaki marka fotoğraflarının ilk fırsatta çekilmesi önerilir:

- Gerçek dut bahçesi ve üretim noktası
- Her ürünün sade fonda ön/arka ambalajı
- Açık ürün yakın planı
- Tartı üzerinde gerçek gramaj
- Paketleme süreci
- Üretici ve marka hikâyesi
- Kargo kolisi ve koruyucu ambalaj

Yeni fotoğraflar aynı dosya adlarıyla `public/images` klasörüne konursa kod değişikliği gerektirmeden kullanılabilir.

## Yayın öncesi zorunlu kontrol listesi

- Gerçek WhatsApp numarası
- E-posta ve işletme konumu
- Alan adı
- Ticari unvan, vergi/MERSİS ve veri sorumlusu bilgileri
- Ürünlerin doğrulanmış içerik, alerjen, menşei ve gramaj bilgileri
- Gerçek fiyat ve stok süreci
- Kargo firması, ücret ve teslim süresi
- İade/cayma koşulları
- Organik ibaresi kullanılacaksa geçerli sertifika
- Gizlilik, KVKK ve tüketici metinlerinin hukuk danışmanı kontrolü

## Kalite kontrolü

Proje hazırlanırken aşağıdaki komutlar başarıyla çalıştırılmıştır:

```bash
npm run typecheck
npm run lint
npm run build
```

Production build 41 statik/SSG sayfa üretmektedir.
