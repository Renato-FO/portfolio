import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter, JetBrains_Mono } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family:
            ${inter.style.fontFamily}, ui-sans-serif, system-ui, sans-serif;
        }
        .fontCode,
        code,
        pre {
          font-family:
            ${jetbrainsMono.style.fontFamily}, ui-monospace, monospace;
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
