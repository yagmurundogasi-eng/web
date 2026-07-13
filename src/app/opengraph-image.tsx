import { ImageResponse } from "next/og";

export const alt = "Yağmurun Doğası — Köy ürünleri ve doğal lezzetler";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden", background: "#f8f1e3", color: "#344024", fontFamily: "serif" }}>
      <div style={{ position: "absolute", width: 520, height: 520, right: -130, top: -170, borderRadius: "50%", border: "2px solid #d9dfc9" }} />
      <div style={{ position: "absolute", width: 390, height: 390, left: -190, bottom: -180, borderRadius: "50%", border: "2px solid #e5d7bb" }} />
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "70px" }}>
        <div style={{ display: "flex", fontSize: 22, letterSpacing: 8, textTransform: "uppercase", color: "#6d7e4d", marginBottom: 34 }}>Köyden sofranıza</div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", fontSize: 86, lineHeight: .92, letterSpacing: -3 }}>
          <span>YAĞMURUN</span><span>DOĞASI</span>
        </div>
        <div style={{ display: "flex", maxWidth: 820, marginTop: 32, fontSize: 31, lineHeight: 1.3, color: "#624a37" }}>Doğanın en güzel lezzetleri, köyümüzden sofranıza...</div>
      </div>
    </div>,
    size,
  );
}
