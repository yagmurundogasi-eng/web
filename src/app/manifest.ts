import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Yağmurun Doğası",
    short_name: "Yağmurun Doğası",
    description: "Yağmur Hanım'ın girişimiyle köy ürünlerini ve ev yapımı lezzetleri bir araya getiren marka.",
    start_url: "/",
    display: "standalone",
    background_color: "#fffdf8",
    theme_color: "#42512b",
    lang: "tr",
    icons: [{ src: "/brand-mark.svg", sizes: "any", type: "image/svg+xml", purpose: "any" }],
  };
}
