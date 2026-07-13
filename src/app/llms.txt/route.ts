import { blogPosts } from "@/data/blog";
import { products } from "@/data/products";
import { siteConfig } from "@/data/site";

export const dynamic = "force-static";

export function GET() {
  const body = `# ${siteConfig.name}\n\n${siteConfig.description}\n\n## Site purpose\nThis is a Turkish informational website. It does not provide a shopping cart, online checkout or user accounts. Visitors are directed to WhatsApp or Instagram to confirm current product content, package size, stock, price and delivery conditions.\n\n## Important editorial rules\n- No medical diagnosis, treatment or cure claims.\n- Organic certification is claimed only when documented.\n- Product information may vary by production batch and must be confirmed before an order.\n- Some current images are licensed real stock photos used for presentation and should not be interpreted as the exact shipment.\n\n## Main pages\n- ${siteConfig.siteUrl}/\n- ${siteConfig.siteUrl}/hakkimizda\n- ${siteConfig.siteUrl}/urunler\n- ${siteConfig.siteUrl}/blog\n- ${siteConfig.siteUrl}/sik-sorulan-sorular\n- ${siteConfig.siteUrl}/iletisim\n\n## Product pages\n${products.map((product) => `- ${product.name}: ${siteConfig.siteUrl}/urunler/${product.slug}`).join("\n")}\n\n## Editorial guides\n${blogPosts.map((post) => `- ${post.title}: ${siteConfig.siteUrl}/blog/${post.slug}`).join("\n")}\n\n## Official social account\n- Instagram: ${siteConfig.instagramUrl}\n`;

  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
