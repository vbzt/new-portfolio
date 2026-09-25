import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Vitor Buzato — Software Engineering";

export default function Image() {
  return new ImageResponse(
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", height: "100%", padding: 76, background: "#0B0B0D", color: "#F4F4F5", fontFamily: "Arial, sans-serif" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 24 }}><span style={{ fontWeight: 700, letterSpacing: -2 }}>VB</span><span style={{ color: "#A1A1AA", fontSize: 18 }}>PORTFOLIO / 2026</span></div>
      <div style={{ display: "flex", flexDirection: "column" }}><strong style={{ fontSize: 82, letterSpacing: -5, lineHeight: 1 }}>Vitor de C. Buzato</strong><span style={{ color: "#A1A1AA", fontSize: 28, marginTop: 28 }}>Software development · Backend and APIs</span></div>
      <div style={{ display: "flex", height: 3, width: 136, background: "#FF4D5A" }} />
    </div>,
    size,
  );
}
