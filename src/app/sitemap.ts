import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog";
import { products } from "@/data/products";
import { absoluteUrl } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/hakkimizda"), changeFrequency: "monthly", priority: .7 },
    { url: absoluteUrl("/urunler"), changeFrequency: "weekly", priority: .9 },
    { url: absoluteUrl("/blog"), changeFrequency: "weekly", priority: .8 },
    { url: absoluteUrl("/iletisim"), changeFrequency: "monthly", priority: .7 },
    { url: absoluteUrl("/sik-sorulan-sorular"), changeFrequency: "monthly", priority: .6 },
    { url: absoluteUrl("/teslimat-ve-siparis"), changeFrequency: "monthly", priority: .5 },
    { url: absoluteUrl("/gizlilik-politikasi"), changeFrequency: "yearly", priority: .2 },
    { url: absoluteUrl("/kvkk"), changeFrequency: "yearly", priority: .2 },
    { url: absoluteUrl("/kullanim-kosullari"), changeFrequency: "yearly", priority: .2 },
  ];

  const productPages: MetadataRoute.Sitemap = products.map((product) => ({
    url: absoluteUrl(`/urunler/${product.slug}`),
    changeFrequency: "monthly",
    priority: .75,
  }));

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: new Date(`${post.updatedAt}T12:00:00+03:00`),
    changeFrequency: "monthly",
    priority: .7,
  }));

  return [...staticPages, ...productPages, ...blogPages];
}
