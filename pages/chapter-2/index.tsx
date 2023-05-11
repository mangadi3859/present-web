import Image from "next/image";
import Page from "@/components/Page";
import Chapter from "@/components/Chapter";

export default function Home() {
    return (
        <Page nextChapter="/chapter-3" prevChapter="/chapter-1" nextRoute="/chapter-2/tools" prevRoute="/chapter-1/dalam-taksu">
            <Chapter title="Chapter 2" subtitle="Pengalaman Praktik Kerja Lapangan" />
        </Page>
    );
}
