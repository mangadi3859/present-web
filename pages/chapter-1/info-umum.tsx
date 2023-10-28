import Image from "next/image";
import Page from "@/components/Page";
import Link from "next/link";
import { FaLink } from "react-icons/fa";

import Taksu from "@/public/assets/taksu-front-view.png";
import TaksuLogo from "@/public/assets/taksu-logo.svg";

export default function InfoUmum() {
    return (
        <Page nextChapter="/chapter-2" prevChapter="/chapter-1/info-umum" nextRoute="/chapter-1/dalam-taksu" prevRoute="/chapter-1">
            <div className="container flex flex-col gap-12 items-center">
                <div className="head">
                    <h1 className="type-head-3 text-center font-bold slide slide-up">Informasi Umum</h1>
                    <h1 className="type-head-5 text-center font-bold slide slide-up"> PT. Taksu Teknologi Indonesia</h1>
                </div>
                <Image src={Taksu} alt="" className="rounded-lg slide slide-down shadow-lg" />

                <div className="grid w-full grid-cols-[max-content,max-content,1fr] type-body-lg gap-2">
                    <p className="title font-bold">Pimpinan</p> <span>:</span> <p>I Putu Surya Diputra</p>
                    <p className="title font-bold">Alamat</p> <span>:</span> <p>No. 394D Jalan Cokroaminoto Ubung Kaja Denpasar 80115 Indonesia</p>
                    <p className="title font-bold">Website</p> <span>:</span>
                    <Link className="link font-semibold w-min flex justify-start gap-2 items-center hover:underline" href="https://www.taksu.tech" target="_blank">
                        taksu.tech <FaLink />
                    </Link>
                    <p className="title font-bold">Logo</p> <span>:</span> <Image src={TaksuLogo} alt="Logo Taksu" height={50} />
                </div>

                <div className="type-body-lg">
                    <b>PT. Taksu Teknologi Indonesia</b> adalah sebuah perusahaan yang bergerak dibidang teknologi khususnya <i>Web Development</i> dan <i>Mobile Development</i> bersekala nasional dan internasional
                </div>
            </div>
        </Page>
    );
}
