import Image from "next/image";
import Link from "next/link";
import type { ProductCategory } from "@/data/products";
import { ArrowRightIcon } from "./Icons";

export function CategoryCard({ category }: { category: ProductCategory }) {
  return (
    <article className="category-card">
      <Image src={category.image} alt={category.imageAlt} fill sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 33vw" />
      <div className="category-card__overlay" />
      <div className="category-card__content">
        <h3>{category.name}</h3>
        <p>{category.description}</p>
        <Link href={`/urunler#${category.slug}`}>
          Kategoriyi gör <ArrowRightIcon width={18} height={18} />
        </Link>
      </div>
    </article>
  );
}
