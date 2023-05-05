import Link from "next/link";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

interface IProps {
    nextRoute: string;
    prevRoute: string;
    nextChapter: string;
    prevChapter: string;
}

export default function Navigation({ nextChapter, nextRoute, prevChapter, prevRoute }: IProps) {
    return (
        <div className="border-t border-r-cs-dark-100 border-opacity-15 shadow-sm bg-white">
            <div className="flex flex-col gap-4 container py-4">
                <div className="flex w-full justify-between items-center">
                    <Link href={prevRoute} className="flex font-bold gap-2 link items-center justify-start">
                        <FaAngleLeft /> Section Sebelumnya
                    </Link>
                    <Link href={nextRoute} className="flex font-bold gap-2 link items-center justify-end">
                        Section Selanjutnya <FaAngleRight />
                    </Link>
                </div>
                <div className="flex w-full justify-between items-center">
                    <Link href={prevChapter} className="flex font-bold gap-2 link items-center justify-start bg-accent-500 px-4 py-2 rounded-md text-white">
                        <FaAngleLeft /> Chapter Sebelumnya
                    </Link>
                    <Link href={nextChapter} className="flex font-bold gap-2 link items-center justify-end bg-accent-500 px-4 py-2 rounded-md text-white">
                        Chapter Selanjutnya <FaAngleRight />
                    </Link>
                </div>
            </div>
        </div>
    );
}
