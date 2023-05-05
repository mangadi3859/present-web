import Header from "./Header";
import Navigation from "./Navigation";
import { Fira_Code } from "next/font/google";

const font = Fira_Code({ subsets: ["latin"] });

interface IProps {
    children: React.ReactNode;
    hideHeader?: boolean;
    hideFooter?: boolean;
    disablePrevious?: boolean;
    nextRoute: string;
    prevRoute: string;
    nextChapter: string;
    prevChapter: string;
}

export default function Page({ children, nextChapter, nextRoute, prevChapter, prevRoute, disablePrevious, hideFooter, hideHeader }: IProps) {
    return (
        <div className={`${font.className} bg-cs-white-100`}>
            <Header disabled={disablePrevious} />
            <main className="my-12 overflow-visible">{children}</main>
            <Navigation nextChapter={nextChapter} nextRoute={nextRoute} prevChapter={prevChapter} prevRoute={prevRoute} />
        </div>
    );
}
