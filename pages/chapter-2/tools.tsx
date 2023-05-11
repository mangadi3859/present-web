import Image from "next/image";
import Page from "@/components/Page";

import VSCode from "@/public/assets/vscode.svg";
import VSCodeBG from "@/public/assets/vscode-bg.png";

import Figma from "@/public/assets/figma.svg";
import FigmaBG from "@/public/assets/figma-bg.png";

import Bitbucket from "@/public/assets/bitbucket.svg";
import BitbucketBG from "@/public/assets/bitbucket-bg.png";

export default function Home() {
    return (
        <Page nextChapter="/chapter-3" prevChapter="/chapter-1" nextRoute="/chapter-2/tugas-tugas" prevRoute="/chapter-2">
            <div className="container flex flex-col gap-24 items-center">
                <div className="head">
                    <h1 className="type-head-3 text-center font-bold slide slide-up">Tools Yang Saya Gunakan Saat Di</h1>
                    <h1 className="type-head-5 text-center font-bold slide slide-up">PT. Taksu Teknologi Indonesia</h1>
                </div>

                <div className="wrapper flex flex-col gap-12">
                    <div className="card slide slide-up even:flex-row-reverse relative rounded-lg overflow-hidden  isolate flex px-8 py-12 justify-between gap-12">
                        <Image src={VSCodeBG} alt="" className="w-full blur-[6px] brightness-50 h-full left-0 top-0 object-cover z-[-2] absolute" />
                        <div className="z-[-1] absolute inset-0 bg-accent-200 opacity-40"></div>

                        <div className="wrapper grid place-items-center w-1/2">
                            <Image src={VSCode} alt="Logo VSCode" className="w-1/2 h-auto drop-shadow-[0_0_3rem_rgb(255_255_255_/_.4)]" />
                        </div>

                        <div className="type-body-lg w-1/2 flex flex-col gap-6 text-white">
                            <h1 className="type-head-3 font-bold ">Visual Studio Code</h1>
                            <p>
                                Visual Studio Code ada sebuah <i>Code Editor</i> yang populer dan sangat berguna.
                            </p>
                            <p>
                                Komunitasnya juga sangat aktif mengembangkan <i>extension</i> yang membuat <i>software</i> ini dapat menjadi <i>IDE (Integrated Development Environtment)</i> kedua para developer.
                            </p>
                        </div>
                    </div>
                    <div className="card slide slide-up even:flex-row-reverse relative rounded-lg overflow-hidden  isolate flex px-8 py-12 justify-between gap-12">
                        <Image src={FigmaBG} alt="" className="w-full blur-[6px] brightness-50 h-full left-0 top-0 object-cover z-[-2] absolute" />
                        <div className="z-[-1] absolute inset-0 bg-[#f12a2a] opacity-40"></div>

                        <div className="wrapper grid place-items-center w-1/2">
                            <Image src={Figma} alt="Logo VSCode" className="w-1/2 h-auto drop-shadow-[0_0_3rem_rgb(255_255_255_/_.4)]" />
                        </div>

                        <div className="type-body-lg w-1/2 flex flex-col gap-6 text-white">
                            <h1 className="type-head-3 font-bold ">Figma</h1>
                            <p>
                                Figma adalah sebuah aplikasi untuk membuat desain. Bisa untuk desain produk atau <i>Website</i>
                            </p>
                            <p>
                                Aksesnya yang mudah, cara pemakainya yang <i>Beginner Friendly</i> juga membuat aplikasi ini sangat populer di kalangan <i>UI/UX</i> Desainer.
                            </p>
                        </div>
                    </div>
                    <div className="card slide slide-up even:flex-row-reverse relative rounded-lg overflow-hidden  isolate flex px-8 py-12 justify-between gap-12">
                        <Image src={BitbucketBG} alt="" className="w-full blur-[6px] brightness-50 h-full left-0 top-0 object-cover z-[-2] absolute" />
                        <div className="z-[-1] absolute inset-0 bg-cs-dark opacity-40"></div>

                        <div className="wrapper grid place-items-center w-1/2">
                            <Image src={Bitbucket} alt="Logo VSCode" className="w-1/2 h-auto drop-shadow-[0_0_3rem_rgb(255_255_255_/_.4)]" />
                        </div>

                        <div className="type-body-lg w-1/2 flex flex-col gap-6 text-white">
                            <h1 className="type-head-3 font-bold ">Bitbucket</h1>
                            <p>
                                Bitbucket adalah sebuah aplikasi <i>code management</i>. Aplikasi ini memungkinkan kita untuk bekerja di dalam tim dengan efisien.
                            </p>
                            <p>
                                Bitbucket hampir mirip dengan github dari segi fungsional, tapi bitbucket memiliki <i>UI</i> yang lebih jelas dan mudah dipahami.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Page>
    );
}
