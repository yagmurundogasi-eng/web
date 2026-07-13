import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Yağmurun Doğası",
    short_name: "Yağmurun Doğası",
    description: "Doğal köy ürünleri ve ev yapımı lezzetler hakkında bilgilendirme sitesi.",
    start_url: "/",
    display: "standalone",
    background_color: "#fffdf8",
    theme_color: "#42512b",
    lang: "tr",
    icons: [{ src: "/brand-mark.svg", sizes: "any", type: "image/svg+xml", purpose: "any" }],
  };
}
