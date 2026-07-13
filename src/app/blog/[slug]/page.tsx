import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogCard } from "@/components/BlogCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { CalendarIcon, ClockIcon, LeafIcon } from "@/components/Icons";
import { blogPosts, getBlogPost } from "@/data/blog";
import { absoluteUrl, siteConfig } from "@/data/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      images: [{ url: post.image, alt: post.imageAlt }],
    },
  };
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("tr-TR", { day: "numeric", month: "long", year: "numeric" }).format(new Date(`${value}T12:00:00`));
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();
  const related = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3);

  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description: post.description,
        image: [absoluteUrl(post.image)],
        datePublished: post.publishedAt,
        dateModified: post.updatedAt,
        inLanguage: "tr-TR",
        mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
        author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.siteUrl },
        publisher: { "@type": "Organization", name: siteConfig.name, logo: { "@type": "ImageObject", url: absoluteUrl("/brand-mark.svg") } },
      }} />
      <article className="article-page">
        <header className="article-header">
          <div className="container container--narrow">
            <Breadcrumbs items={[{ name: "Ana Sayfa", href: "/" }, { name: "Rehber", href: "/blog" }, { name: post.title }]} />
            <p className="eyebrow">Doğal Yaşam Rehberi</p>
            <h1>{post.title}</h1>
            <p className="article-header__lead">{post.description}</p>
            <div className="article-meta">
              <span><CalendarIcon /> Güncellendi: {formatDate(post.updatedAt)}</span>
              <span><ClockIcon /> {post.readMinutes} dakika okuma</span>
              <span><LeafIcon /> Yağmurun Doğası editoryası</span>
            </div>
          </div>
        </header>

        <div className="container container--article">
          <div className="article-cover">
            <Image src={post.image} alt={post.imageAlt} fill priority sizes="(max-width: 900px) 100vw, 900px" />
          </div>
          <div className="article-layout">
            <div className="article-toc">
              <strong>Bu rehberde</strong>
              <ol>{post.sections.map((section, index) => <li key={section.heading}><a href={`#bolum-${index + 1}`}>{section.heading}</a></li>)}</ol>
            </div>
            <div className="article-content">
              {post.sections.map((section, index) => (
                <section id={`bolum-${index + 1}`} key={section.heading}>
                  <h2>{section.heading}</h2>
                  {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  {section.bullets ? <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul> : null}
                </section>
              ))}
              <div className="health-disclaimer"><strong>Editoryal not:</strong> Bu içerik genel bilgilendirme içindir; tanı, tedavi veya kişisel beslenme önerisi yerine geçmez. Ürünün ambalaj ve üretici talimatları önceliklidir.</div>
            </div>
          </div>
        </div>
      </article>

      <section className="section section--tinted">
        <div className="container">
          <div className="category-heading"><div><p className="eyebrow">Okumaya devam edin</p><h2>Diğer rehberler</h2></div><Link className="text-link text-link--large" href="/blog">Tüm yazılar</Link></div>
          <div className="blog-grid">{related.map((item) => <BlogCard post={item} key={item.slug} />)}</div>
        </div>
      </section>
    </>
  );
}
