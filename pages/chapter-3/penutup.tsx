import Image from "next/image";
import Page from "@/components/Page";

import PenyerahanSertifikat from "@/public/assets/penyerahan-sertifikat.jpg";

export default function Home() {
    return (
        <Page nextChapter="/" prevChapter="/chapter-2" nextRoute="/" prevRoute="/chapter-3">
            <div className="container flex flex-col justify-start items-center gap-12 slide slide-up type-head-2 font-bold">
                <Image src={PenyerahanSertifikat} alt="" className="w-[60%] rounded-md shadow-xl overflow-hidden h-auto oject-cover" />
                <p>Terima Kasih Waktunya</p>
            </div>
        </Page>
    );
}
