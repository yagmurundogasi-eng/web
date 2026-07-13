import { ImageResponse } from "next/og";

export const alt = "Yağmurun Doğası - Yağmur Hanım'ın girişimi";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden", background: "#f8f1e3", color: "#344024", fontFamily: "serif", borderTop: "14px solid #344024", borderBottom: "14px solid #b6904b" }}>
      <div style={{ width: 1080, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "46px 70px" }}>
        <svg width="108" height="108" viewBox="0 0 128 128">
          <path d="M18 10h44c36 0 60 21 60 54s-24 54-60 54H18V10Z" fill="#344024" />
          <path d="M34 27h28c25.5 0 43 14.2 43 37s-17.5 37-43 37H34V27Z" fill="#faf5e9" />
          <path d="M47 89c6-3.5 11.7-5 17-5s11.3 1.5 18 5" fill="none" stroke="#b6904b" strokeWidth="3" strokeLinecap="round" />
          <path d="M64 91V60" fill="none" stroke="#415326" strokeWidth="6" strokeLinecap="round" />
          <path d="M64 61C53 60 45 52 44 41c11 0 19 7 20 20Z" fill="#6d7e4d" />
          <path d="M64 61c2-11 10-18 22-19-1 11-9 18-22 19Z" fill="#b6904b" />
        </svg>
        <div style={{ display: "flex", fontSize: 20, letterSpacing: 7, textTransform: "uppercase", color: "#6d7e4d", marginTop: 18, marginBottom: 20 }}>Yağmur Hanım’ın girişimi</div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", lineHeight: 1, letterSpacing: 0 }}>
          <span style={{ fontSize: 82 }}>Yağmurun</span>
          <span style={{ marginTop: 12, fontFamily: "sans-serif", fontSize: 23, fontWeight: 700, letterSpacing: 9, textTransform: "uppercase", color: "#624a37" }}>Doğası</span>
        </div>
        <div style={{ display: "flex", maxWidth: 820, marginTop: 26, fontSize: 30, lineHeight: 1.3, color: "#624a37" }}>Yağmur’un özeni, doğanın lezzeti.</div>
      </div>
    </div>,
    size,
  );
}
