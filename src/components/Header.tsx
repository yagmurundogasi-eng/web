import Link from "next/link";
import { siteConfig, whatsappHref } from "@/data/site";
import { InstagramIcon, LeafIcon, MenuIcon, TruckIcon, VillageIcon, WhatsAppIcon } from "./Icons";
import { Logo } from "./Logo";

const navItems = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/urunler", label: "Ürünler" },
  { href: "/blog", label: "Doğal Yaşam Rehberi" },
  { href: "/iletisim", label: "İletişim" },
];

export function Header() {
  const whatsapp = whatsappHref("Merhaba, Yağmurun Doğası ürünleri hakkında bilgi almak istiyorum.");
  const whatsappExternal = whatsapp.startsWith("http");

  return (
    <header className="site-header">
      <div className="utility-bar">
        <div className="container utility-bar__inner">
          <div className="utility-bar__proofs" aria-label="Marka özellikleri">
            <span><LeafIcon width={17} height={17} /> Şeffaf içerik bilgisi</span>
            <span><VillageIcon width={17} height={17} /> Küçük üretici yaklaşımı</span>
            <span><TruckIcon width={17} height={17} /> Türkiye geneli gönderim bilgisi</span>
          </div>
          <div className="utility-bar__social">
            <a href={whatsapp} {...(whatsappExternal ? { target: "_blank", rel: "noreferrer" } : {})} aria-label="WhatsApp İletişim">
              <WhatsAppIcon width={18} height={18} /> <span>WhatsApp: +90 552 423 11 23</span>
            </a>
            <a href={siteConfig.instagramUrl} target="_blank" rel="noreferrer" aria-label={`Instagram ${siteConfig.instagramHandle}`}>
              <InstagramIcon width={18} height={18} /> <span>{siteConfig.instagramHandle}</span>
            </a>
          </div>
        </div>
      </div>

      <div className="container header-main">
        <Logo />
        <nav className="desktop-nav" aria-label="Ana menü">
          {navItems.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
        </nav>
        <div className="header-actions">
          <Link
            className="button button--small button--primary"
            href={whatsapp}
            {...(whatsappExternal ? { target: "_blank", rel: "noreferrer" } : {})}
          >
            <WhatsAppIcon width={19} height={19} /> Ürün Bilgisi Al
          </Link>
          <details className="mobile-menu">
            <summary aria-label="Menüyü aç"><MenuIcon /></summary>
            <nav aria-label="Mobil menü">
              {navItems.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
              <a href={siteConfig.instagramUrl} target="_blank" rel="noreferrer">Instagram</a>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
