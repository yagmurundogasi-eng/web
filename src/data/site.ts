const vercelHost = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
const resolvedSiteUrl = process.env.NEXT_PUBLIC_SITE_URL || (vercelHost ? `https://${vercelHost}` : "http://localhost:3000");

export const siteConfig = {
  name: "Yağmurun Doğası",
  shortName: "Yağmurun Doğası",
  description:
    "Dut ürünleri, kurutmalık sebzeler, bitkiler, köy kahvaltılıkları ve ev yapımı lezzetler hakkında şeffaf ürün bilgisi sunan bilgilendirme sitesi.",
  slogan: "Doğanın en güzel lezzetleri, köyümüzden sofranıza...",
  instagramHandle: "@yagmurdandogal2026",
  instagramUrl: "https://www.instagram.com/yagmurdandogal2026/",
  siteUrl: resolvedSiteUrl.replace(/\/$/, ""),
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "",
  phoneDisplay: process.env.NEXT_PUBLIC_PHONE_DISPLAY || "",
  location: process.env.NEXT_PUBLIC_LOCATION || "Türkiye",
};

export const whatsappNumber = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+90 552 423 11 23").replace(/\D/g, "");

export function whatsappHref(message: string = "") {
  const msg = message || "Merhabalar, web siteniz üzerinden size ulaşıyorum";
  if (!/^\d{10,15}$/.test(whatsappNumber)) return "/iletisim#whatsapp";
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`;
}

export function absoluteUrl(path = "") {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.siteUrl}${normalized}`;
}
