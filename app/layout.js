import { spaceGrotesk, inter, jetbrainsMono } from "./fonts";
import "./globals.css";

export const metadata = {
  title: "Aditya K — ECE Student & Embedded Systems Engineer",
  description:
    "Portfolio of Aditya K, an ECE student specializing in embedded systems, UAV design, and computer vision.",
  keywords: [
    "embedded systems",
    "portfolio",
    "ECE",
    "electronics",
    "UAV",
    "computer vision",
    "NVIDIA Jetson",
  ],
  openGraph: {
    title: "Aditya K — ECE Student & Embedded Systems Engineer",
    description:
      "Portfolio of Aditya K, an ECE student specializing in embedded systems, UAV design, and computer vision.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
