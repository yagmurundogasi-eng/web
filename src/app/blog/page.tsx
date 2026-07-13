import type { Metadata } from "next";
import { BlogCard } from "@/components/BlogCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { blogPosts } from "@/data/blog";
import { absoluteUrl } from "@/data/site";

export const metadata: Metadata = {
  title: "Doğal Yaşam Rehberi",
  description: "Dut pekmezi, kuşburnu, ıhlamur, kurutmalık sebzeler, ev eriştesi ve salamura yaprak için kullanım ve saklama rehberleri.",
  alternates: { canonical: "/blog" },
  openGraph: { title: "Doğal Yaşam Rehberi | Yağmurun Doğası", url: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Blog",
        name: "Yağmurun Doğası Doğal Yaşam Rehberi",
        url: absoluteUrl("/blog"),
        inLanguage: "tr-TR",
        blogPost: blogPosts.map((post) => ({
          "@type": "BlogPosting",
          headline: post.title,
          url: absoluteUrl(`/blog/${post.slug}`),
          datePublished: post.publishedAt,
          dateModified: post.updatedAt,
        })),
      }} />
      <div className="page-hero">
        <div className="container">
          <Breadcrumbs items={[{ name: "Ana Sayfa", href: "/" }, { name: "Doğal Yaşam Rehberi" }]} />
          <p className="eyebrow">Bilgi merkezi</p>
          <h1>Doğal ürünleri seçme, hazırlama ve saklama rehberi</h1>
          <p>Ürünlerin ne işe yaradığına dair abartılı vaatler yerine; nasıl hazırlanacağı, nasıl saklanacağı ve nelere dikkat edilmesi gerektiğine odaklanıyoruz.</p>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <div className="blog-grid blog-grid--all">
            {blogPosts.map((post) => <BlogCard post={post} key={post.slug} />)}
          </div>
        </div>
      </section>
      <section className="section section--tinted">
        <div className="container content-policy">
          <div><p className="eyebrow">Yayın ilkesi</p><h2>Okura yararlı, ölçülü ve güncellenebilir içerik</h2></div>
          <div><p>Rehberler genel gıda kullanımı ve hazırlama bilgisi sunar. Sağlık iddiası içeren konularda güvenilir kaynaklara yönelmeyi ve gerektiğinde uzman görüşü almayı esas alırız.</p><p>Ürün, yöntem veya mevzuat değiştiğinde içeriklerin güncellenme tarihini sayfa üzerinde belirtiriz.</p></div>
        </div>
      </section>
    </>
  );
}
