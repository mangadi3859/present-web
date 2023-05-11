import Image from "next/image";
import Page from "@/components/Page";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCard from "@/components/SwiperCard";

//CV Project
import CV1 from "@/public/assets/cv-1.png";
import CV2 from "@/public/assets/cv-2.png";
import CV3 from "@/public/assets/cv-3.png";
import CV4 from "@/public/assets/cv-4.png";

//Desain
import Fig1 from "@/public/assets/figma-1.png";
import Fig2 from "@/public/assets/figma-2.png";
import Fig3 from "@/public/assets/figma-3.png";
import Fig4 from "@/public/assets/figma-4.png";
import Fig5 from "@/public/assets/figma-5.png";
import Fig6 from "@/public/assets/figma-6.png";

//Website
import Plotigo1 from "@/public/assets/plotigo-1.png";
import Plotigo2 from "@/public/assets/plotigo-2.png";
import Plotigo3 from "@/public/assets/plotigo-3.png";
import Plotigo4 from "@/public/assets/plotigo-4.png";
import Plotigo5 from "@/public/assets/plotigo-5.png";
import Plotigo6 from "@/public/assets/plotigo-6.png";

export default function Home() {
    return (
        <Page nextChapter="/chapter-3" prevChapter="/chapter-1" nextRoute="/chapter-2/cara-setup-react-native" prevRoute="/chapter-2/tools">
            <div className="container flex flex-col gap-24 items-center">
                <div className="head">
                    <h1 className="type-head-3 text-center font-bold slide slide-up">Tugas Yang Saya Kerjakan Di</h1>
                    <h1 className="type-head-5 text-center font-bold slide slide-up">PT. Taksu Teknologi Indonesia</h1>
                </div>

                <div className="wrapper flex flex-col gap-12">
                    <div className="flex flex-col gap-4 slide slide-up">
                        <h2 className="type-head-5 font-bold">1. NextJS CV</h2>
                        <p>
                            Tugas ini adalah tugas yang pertama diberikan kepada saya dan teman teman saya. Tugas ini mengharuskan kita untuk membuat website CV dengan menggunakan <b>NextjS</b> dan <b>TailwindCSS</b>
                        </p>

                        <Swiper className="container" spaceBetween={50} slidesPerView={2} modules={[Autoplay, Pagination]} autoplay={{ delay: 2000 }} pagination={{ clickable: false }}>
                            <SwiperSlide>
                                <SwiperCard src={CV1} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <SwiperCard src={CV2} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <SwiperCard src={CV3} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <SwiperCard src={CV4} />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="flex flex-col gap-4 slide slide-up">
                        <h2 className="type-head-5 font-bold">2. Plotigo Design</h2>
                        <p>
                            Tugas ini adalah tugas kedua yang diberikan kepada kami. Kita ditugaskan untuk membuat desain company profile dari perusahaan Plotigo. walau ini tugas bersama, di bulan april saya ditugaskan untuk mendesain ulang
                            company profile mereka.
                        </p>

                        <Swiper className="container" spaceBetween={50} slidesPerView={2} modules={[Autoplay, Pagination]} autoplay={{ delay: 2000 }} pagination={{ clickable: false }}>
                            <SwiperSlide>
                                <SwiperCard src={Fig1} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <SwiperCard src={Fig2} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <SwiperCard src={Fig3} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <SwiperCard src={Fig4} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <SwiperCard src={Fig5} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <SwiperCard src={Fig6} />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="flex flex-col gap-4 slide slide-up">
                        <h2 className="type-head-5 font-bold">3. Plotigo Website</h2>
                        <p>
                            Setelah membuat desain kita langsung ditugaskan untuk menggarap website dari plotigo ini dan dibantu oleh <i>intern</i> lain.
                        </p>

                        <Swiper className="container" spaceBetween={50} slidesPerView={2} modules={[Autoplay, Pagination]} autoplay={{ delay: 2000 }} pagination={{ clickable: false }}>
                            <SwiperSlide>
                                <SwiperCard src={Plotigo1} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <SwiperCard src={Plotigo2} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <SwiperCard src={Plotigo3} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <SwiperCard src={Plotigo4} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <SwiperCard src={Plotigo5} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <SwiperCard src={Plotigo6} />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </Page>
    );
}
