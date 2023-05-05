import Image from "next/image";
import Page from "@/components/Page";
import Chapter from "@/components/Chapter";

export default function Home() {
    return (
        <Page nextChapter="/chapter-2" prevChapter="/" nextRoute="/chapter-1/info-umum" prevRoute="/">
            <Chapter title="Chapter 1" subtitle="Tentang Industri" />
        </Page>
    );
}
