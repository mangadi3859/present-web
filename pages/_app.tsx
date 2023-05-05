import "@/styles/globals.css";
import type { AppProps } from "next/app";
import useAnimateSlide from "@/lib/useAnimateSlide";

export default function App({ Component, pageProps }: AppProps) {
    useAnimateSlide();
    return <Component {...pageProps} />;
}
