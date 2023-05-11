import Image from "next/image";
import Page from "@/components/Page";
import Chapter from "@/components/Chapter";

export default function Home() {
    return (
        <Page nextChapter="/" prevChapter="/chapter-2" nextRoute="/chapter-3/penutup" prevRoute="/chapter-2/cara-setup-react-native">
            <Chapter title="Chapter 3" subtitle="Penutup" />
        </Page>
    );
}
