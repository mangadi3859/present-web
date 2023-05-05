import Image from "next/image";
import Page from "@/components/Page";

import Taksu from "@/public/assets/taksu-front.png";
import TaksuLogo from "@/public/assets/taksu-logo.svg";

export default function Home() {
    return (
        <Page nextChapter="/chapter-2" prevChapter="/" nextRoute="/" prevRoute="/chapter-1">
            <div className="container flex flex-col gap-12 items-center">
                <div className="head">
                    <h1 className="type-head-3 text-center font-bold slide slide-up">Informasi Umum</h1>
                    <h1 className="type-head-5 text-center font-bold slide slide-up"> PT. Taksu Teknologi Indonesia</h1>
                </div>
                <Image src={Taksu} alt="" className="rounded-lg slide slide-down" />

                <div className="grid grid-cols-[max-content,max-content,1fr] type-body-lg gap-2 items-center">
                    <p className="title font-bold">Pimpinan</p> <span>:</span> <p>I Putu Surya Diputra</p>
                    <p className="title font-bold">Alamat</p> <span>:</span> <p>No. 394D Jalan Cokroaminoto Ubung Kaja Denpasar 80115 Indonesia</p>
                    <p className="title font-bold">Logo</p> <span>:</span> <Image src={TaksuLogo} alt="Logo Taksu" height={50} />
                </div>
            </div>
        </Page>
    );
}
