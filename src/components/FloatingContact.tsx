import Link from "next/link";
import { whatsappHref } from "@/data/site";
import { WhatsAppIcon } from "./Icons";

export function FloatingContact() {
  const href = whatsappHref("Merhaba, Yağmurun Doğası ürünleri hakkında bilgi almak istiyorum.");
  const external = href.startsWith("http");

  return (
    <Link
      className="floating-contact"
      href={href}
      aria-label="WhatsApp üzerinden ürün bilgisi iste"
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      <WhatsAppIcon />
      <span>WhatsApp</span>
    </Link>
  );
}
