import type { AppProps } from "next/app";
import "@/styles/base/global.css";


export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
