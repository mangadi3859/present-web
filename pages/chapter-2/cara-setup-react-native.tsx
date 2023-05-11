import Image from "next/image";
import Page from "@/components/Page";

import G1 from "@/public/assets/g1.png";
import G2 from "@/public/assets/g2.png";
import G3 from "@/public/assets/g3.png";
import G4 from "@/public/assets/g4.png";
import G5 from "@/public/assets/g5.png";
import G6 from "@/public/assets/g6.png";
import G7 from "@/public/assets/g7.png";

export default function Home() {
    return (
        <Page nextChapter="/chapter-3" prevChapter="/chapter-1" nextRoute="/chapter-3/" prevRoute="/chapter-2/tugas-tugas">
            <div className="container flex flex-col gap-24 items-center">
                <div className="head">
                    <h1 className="type-head-3 text-center font-bold slide slide-up">Cara Setup React Native</h1>
                    <h1 className="type-head-5 text-center font-bold slide slide-up">Untuk Android Development Di Windows 10</h1>
                </div>

                <div className="wrapper flex flex-col gap-4 type-body-lg">
                    <p className="slide slide-up">
                        1. Pastikan <b>Nodejs, NPM, Android Studio, Android SDK</b>, dan <b>Java JDK</b> terinstall,
                    </p>
                    <p className="slide slide-up">
                        2. Pastikan <b>JAVA_HOME</b> dan <b>ANDROID_HOME</b> ada di System Environtment Variable,
                    </p>
                    <div className="w-full grid place-items-center slide slide-up">
                        <Image src={G1} alt="System Environtment Variable" className="max-w-[75%] w-full h-auto" />
                    </div>
                    <p className="slide slide-up">
                        3. Pastikan sudah ada Emulasi Android di <b>Android Studio</b>,
                    </p>
                    <div className="w-full grid place-items-center slide slide-up">
                        <Image src={G2} alt="Device Manager" className="max-w-[85%] w-full h-auto" />
                    </div>
                    <p className="slide slide-up">4. Pastikan bahwa komputer terhubung dengan internet,</p>
                    <p className="slide slide-up">5. Buka CMD Prompt,</p>
                    <p className="slide slide-up">
                        6. Ketik <b>npx react-native@latest init namaFolder</b> pada CMD,
                    </p>
                    <div className="w-full grid place-items-center slide slide-up">
                        <Image src={G3} alt="CMD React Native Init" className="max-w-[85%] w-full h-auto" />
                    </div>
                    <p className="slide slide-up">7. Tunggu sampai installasi selesai,</p>
                    <div className="w-full grid place-items-center slide slide-up">
                        <Image src={G4} alt="Installasi React Native" className="max-w-[85%] w-full h-auto" />
                    </div>
                    <p className="slide slide-up">
                        8. Buka folder yang telah dibuat dengan mengetik <b>cd namaFolder pada CMD</b>,
                    </p>
                    <div className="w-full grid place-items-center slide slide-up">
                        <Image src={G5} alt="Buka Folder Proyek" className="max-w-[85%] w-full h-auto" />
                    </div>
                    <p className="slide slide-up">
                        9. Ketik <b>npm i</b> untuk memastikan semua dependency yang dibutuhkan benar benar terinstall,
                    </p>
                    <p className="slide slide-up">
                        10. Ketik <b>npm start</b> untuk menjalankan program,
                    </p>
                    <p className="slide slide-up">11. Tunggu beberapa saat untuk metro dijalankan sampai muncul pilihan,</p>
                    <div className="w-full grid place-items-center slide slide-up">
                        <Image src={G6} alt="Npm Start" className="max-w-[85%] w-full h-auto" />
                    </div>
                    <p className="slide slide-up">
                        12. Pencet <b>A</b> pada keyboard untuk memilih Android,
                    </p>
                    <div className="w-full grid place-items-center slide slide-up">
                        <Image src={G7} alt="Pilih emulasi android" className="max-w-[85%] w-full h-auto" />
                    </div>
                    <p className="slide slide-up">13. Tunggu sampai react native selesai mengcompilasi kode dan membuka emulasi android,</p>
                    <p className="slide slide-up">14. Tampilan awal dari react native akan muncul dan itu artinya proses berjalan lancar.</p>
                </div>
            </div>
        </Page>
    );
}
