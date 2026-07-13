import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";
import { ArrowRightIcon } from "./Icons";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="product-card">
      <Link className="product-card__image" href={`/urunler/${product.slug}`} aria-label={`${product.name} ürün detayını aç`}>
        <Image src={product.image} alt={product.imageAlt} fill sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 33vw" />
      </Link>
      <div className="product-card__body">
        <p className="product-card__category">{product.category}</p>
        <h3><Link href={`/urunler/${product.slug}`}>{product.name}</Link></h3>
        <p>{product.summary}</p>
        <Link className="text-link" href={`/urunler/${product.slug}`}>
          Ürünü incele <ArrowRightIcon width={18} height={18} />
        </Link>
      </div>
    </article>
  );
}
