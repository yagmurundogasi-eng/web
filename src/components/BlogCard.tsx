import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/data/blog";
import { ArrowRightIcon, ClockIcon } from "./Icons";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="blog-card">
      <Link className="blog-card__image" href={`/blog/${post.slug}`} aria-label={`${post.title} yazısını aç`}>
        <Image src={post.image} alt={post.imageAlt} fill sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 33vw" />
      </Link>
      <div className="blog-card__body">
        <span className="reading-time"><ClockIcon width={16} height={16} /> {post.readMinutes} dk okuma</span>
        <h3><Link href={`/blog/${post.slug}`}>{post.title}</Link></h3>
        <p>{post.excerpt}</p>
        <Link className="text-link" href={`/blog/${post.slug}`}>
          Rehberi oku <ArrowRightIcon width={18} height={18} />
        </Link>
      </div>
    </article>
  );
}
