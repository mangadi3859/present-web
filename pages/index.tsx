import Image from "next/image";
import Page from "@/components/Page";
import GambarTI from "@/public/assets/ti-korup.png";

export default function Home() {
    return (
        <Page disablePrevious nextChapter="/" prevChapter="/" nextRoute="/chapter-1" prevRoute="/chapter-1">
            <div className="container flex flex-col justify-start items-center">
                <h1 className="type-head-4 slide slide-up text-center font-semibold">
                    PRESENTASI LAPORAN PRAKTIK KERJA LAPANGAN <br /> DI <br /> PT. TAKSU TEKNOLOGI INDONESIA
                </h1>
                <Image src={GambarTI} alt="" className="slide slide-up" />

                <h2 className="type-head-5 font-semibold slide slide-up">Dipersembahkan oleh:</h2>
                <div className="grid slide slide-up grid-cols-[max-content,max-content,1fr] type-body-lg gap-2 items-center">
                    <span className="font-bold">Nama</span>
                    <span className="font-bold">:</span>
                    <p>Komang Adi Wirawan</p>
                    <span className="font-bold">NIS</span>
                    <span className="font-bold">:</span>
                    <p>5856</p>
                    <span className="font-bold">Kelas</span>
                    <span className="font-bold">:</span>
                    <p>XI RPL 3</p>
                </div>
            </div>
        </Page>
    );
}
