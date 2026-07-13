import Link from "next/link";

export default function NotFound() {
  return (
    <div className="not-found">
      <div>
        <p className="eyebrow">404 · Sayfa bulunamadı</p>
        <h1>Aradığınız sayfa doğada kaybolmuş olabilir.</h1>
        <p>Bağlantı değişmiş ya da sayfa kaldırılmış olabilir. Ürün kataloğuna dönerek devam edebilirsiniz.</p>
        <Link className="button button--primary" href="/urunler">Ürünlere Dön</Link>
      </div>
    </div>
  );
}
