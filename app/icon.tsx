import { ImageResponse } from "next/og";
 
export const size = {
  width: 64,
  height: 64,
};
 
export const contentType = "image/png";
 
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#050505",
          borderRadius: 14,
        }}
      >
        <div
          style={{
            width: 46,
            height: 46,
            borderRadius: 14,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background:
              "radial-gradient(circle at 30% 30%, rgba(94,252,11,0.95) 0%, rgba(94,252,11,0.35) 55%, rgba(0,0,0,0) 75%)",
            boxShadow: "0 0 18px rgba(94,252,11,0.55)",
          }}
        >
          <div
            style={{
              fontSize: 30,
              fontWeight: 900,
              color: "#eaffda",
              textShadow: "0 0 12px rgba(94,252,11,0.65)",
              fontFamily:
                'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Arial',
              lineHeight: 1,
            }}
          >
            P
          </div>
        </div>
      </div>
    ),
    size
  );
}
