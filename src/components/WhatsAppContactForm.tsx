"use client";

import { FormEvent, useState } from "react";
import { InstagramIcon, WhatsAppIcon } from "./Icons";

export function WhatsAppContactForm({ whatsappNumber, instagramUrl }: { whatsappNumber: string; instagramUrl: string }) {
  const [notice, setNotice] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const product = String(form.get("product") || "").trim();
    const note = String(form.get("note") || "").trim();

    if (!name || !product) {
      setNotice("Lütfen adınızı ve ilgilendiğiniz ürünü yazın.");
      return;
    }

    if (!/^\d{10,15}$/.test(whatsappNumber)) {
      setNotice("WhatsApp numarası henüz site ayarlarına eklenmedi. Şimdilik Instagram üzerinden ulaşabilirsiniz.");
      return;
    }

    const text = [
      "Merhaba, Yağmurun Doğası web sitesinden yazıyorum.",
      `Adım: ${name}`,
      `İlgilendiğim ürün: ${product}`,
      note ? `Notum: ${note}` : "",
      "Güncel gramaj, içerik, stok ve gönderim bilgisi rica ederim.",
    ].filter(Boolean).join("\n");

    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
    setNotice("WhatsApp görüşmesi yeni sekmede açıldı.");
  }

  return (
    <div className="contact-form-card" id="whatsapp">
      <div className="contact-form-card__heading">
        <p className="eyebrow">Hızlı ürün bilgisi</p>
        <h2>WhatsApp mesajınızı hazırlayın</h2>
        <p>Form ödeme veya sipariş kaydı oluşturmaz; yalnızca ürün hakkında görüşme başlatır.</p>
      </div>
      <form onSubmit={submit}>
        <label>
          Adınız
          <input name="name" type="text" autoComplete="name" placeholder="Ad Soyad" required />
        </label>
        <label>
          İlgilendiğiniz ürün
          <input name="product" type="text" placeholder="Örn. dut pekmezi" required />
        </label>
        <label>
          Notunuz
          <textarea name="note" rows={5} placeholder="Gramaj, teslimat ili veya öğrenmek istediğiniz ayrıntı..." />
        </label>
        <button className="button button--primary button--wide" type="submit"><WhatsAppIcon /> WhatsApp Mesajını Aç</button>
        {notice ? <p className="form-notice" role="status">{notice}</p> : null}
      </form>
      <div className="form-alternative">
        <span>Alternatif iletişim</span>
        <a href={instagramUrl} target="_blank" rel="noreferrer"><InstagramIcon width={19} height={19} /> Instagram’dan yazın</a>
      </div>
    </div>
  );
}
