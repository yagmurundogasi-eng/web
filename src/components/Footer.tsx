import Link from "next/link";
import { siteConfig, whatsappHref } from "@/data/site";
import { InstagramIcon, LeafIcon, MailIcon, MapPinIcon, WhatsAppIcon } from "./Icons";
import { Logo } from "./Logo";

const year = new Date().getFullYear();

export function Footer() {
  const whatsapp = whatsappHref("Merhaba, Yağmurun Doğası ürünleri hakkında bilgi almak istiyorum.");
  const external = whatsapp.startsWith("http");

  return (
    <footer className="site-footer">
      <section className="footer-cta">
        <div className="container footer-cta__inner">
          <div>
            <p className="eyebrow eyebrow--light">Sorunuz mu var?</p>
            <h2>Ürünü seçmeden önce doğrudan bize sorun.</h2>
            <p>Güncel gramaj, stok, içerik ve gönderim bilgisini WhatsApp üzerinden paylaşalım.</p>
          </div>
          <Link
            className="button button--cream"
            href={whatsapp}
            {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
          >
            <WhatsAppIcon /> WhatsApp’tan Yazın
          </Link>
        </div>
      </section>

      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo compact />
          <p>{siteConfig.description}</p>
          <div className="footer-socials">
            <a href={siteConfig.instagramUrl} target="_blank" rel="noreferrer" aria-label={`Instagram ${siteConfig.instagramHandle}`}>
              <InstagramIcon />
            </a>
            <Link href={whatsapp} aria-label="WhatsApp" {...(external ? { target: "_blank", rel: "noreferrer" } : {})}>
              <WhatsAppIcon />
            </Link>
          </div>
        </div>

        <div>
          <h3>Keşfedin</h3>
          <ul>
            <li><Link href="/hakkimizda">Hikâyemiz</Link></li>
            <li><Link href="/urunler">Tüm ürünler</Link></li>
            <li><Link href="/blog">Doğal Yaşam Rehberi</Link></li>
            <li><Link href="/sik-sorulan-sorular">Sık Sorulan Sorular</Link></li>
          </ul>
        </div>

        <div>
          <h3>Bilgilendirme</h3>
          <ul>
            <li><Link href="/teslimat-ve-siparis">Sipariş ve teslimat</Link></li>
            <li><Link href="/gizlilik-politikasi">Gizlilik politikası</Link></li>
            <li><Link href="/kvkk">KVKK aydınlatma metni</Link></li>
            <li><Link href="/kullanim-kosullari">Kullanım koşulları</Link></li>
          </ul>
        </div>

        <div>
          <h3>İletişim</h3>
          <ul className="footer-contact">
            <li><MapPinIcon /> <span>{siteConfig.location}</span></li>
            {siteConfig.email ? <li><MailIcon /> <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></li> : null}
            {siteConfig.phoneDisplay ? <li><WhatsAppIcon /> <span>{siteConfig.phoneDisplay}</span></li> : null}
            <li><InstagramIcon /> <a href={siteConfig.instagramUrl} target="_blank" rel="noreferrer">{siteConfig.instagramHandle}</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom__inner">
          <span>© {year} Yağmurun Doğası. Tüm hakları saklıdır.</span>
          <span><LeafIcon width={16} height={16} /> Ürün bilgisi, sipariş öncesinde güncel haliyle teyit edilir.</span>
        </div>
      </div>
    </footer>
  );
}
