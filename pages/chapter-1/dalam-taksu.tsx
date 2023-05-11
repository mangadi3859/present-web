import Image from "next/image";
import Page from "@/components/Page";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCard from "@/components/SwiperCard";

import LastDay from "@/public/assets/all-lastday.jpg";
import Gallery1 from "@/public/assets/gallery-1.jpg";
import Gallery2 from "@/public/assets/gallery-2.jpg";
import Gallery3 from "@/public/assets/gallery-3.jpg";
import Gallery4 from "@/public/assets/gallery-4.jpg";
import Gallery5 from "@/public/assets/gallery-5.jpg";

export default function DalamTaksu() {
    return (
        <Page nextChapter="/chapter-2" prevChapter="/" nextRoute="/chapter-2" prevRoute="/chapter-1">
            <div className="container flex flex-col gap-12 items-center">
                <div className="head">
                    <h1 className="type-head-3 text-center font-bold slide slide-up">Dalam PT. Taksu Teknologi Indonesia</h1>
                    {/* <h1 className="type-head-5 text-center font-bold slide slide-up"> PT. Taksu Teknologi Indonesia</h1> */}
                </div>
                <div className="card flex justify-between gap-12 items-start">
                    <Image src={LastDay} alt="" className="w-1/2 rounded-lg slide slide-right shadow-xl" />

                    <div className="type-body-lg slide slide-left w-1/2  flex flex-col gap-6">
                        <h1 className="type-head-5 font-bold px-4 py-2 bg-white shadow-[-.35rem_.35rem_0_.015rem_#858bdd]">Kondisi Ruangan PT. Taksu Teknologi Indonesia</h1>
                        <p>Lingkungan dan ruangan kerja di sini sangatlah bersih dan menyejukan.</p>
                        <p>Suasananya sangat nyaman, dan dari pihak industri juga menyediakan air, dan makanan ringan untuk pegawai</p>
                        <p>Para pegawai juga terlihat sangat antusias pada tugas mereka masing masing. jarang ada suasana tegang di sini</p>
                    </div>
                </div>
                <Swiper className="w-full slide slide-up" loop spaceBetween={50} slidesPerView={3} modules={[Autoplay, Pagination]} autoplay={{ delay: 2000 }} pagination={{ clickable: false }}>
                    <SwiperSlide>
                        <SwiperCard src={LastDay} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SwiperCard src={Gallery1} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SwiperCard src={Gallery2} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SwiperCard src={Gallery3} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SwiperCard src={Gallery4} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SwiperCard src={Gallery5} />
                    </SwiperSlide>
                </Swiper>
            </div>
        </Page>
    );
}
