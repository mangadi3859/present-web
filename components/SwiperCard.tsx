import Image, { StaticImageData } from "next/image";

interface IProps {
    src: StaticImageData;
}

export default function SwiperCard({ src }: IProps) {
    return (
        <div className="card flex overflow-hidden rounded-md max-w-[100vw] shadow-xl">
            <Image src={src} alt="" className="aspect-video object-cover w-full h-auto" />
        </div>
    );
}
