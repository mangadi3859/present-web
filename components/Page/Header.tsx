import { FaAngleLeft } from "react-icons/fa";
import { useRouter } from "next/router";

interface IProps {
    disabled?: boolean;
    hidden?: boolean;
}

export default function Header({ disabled, hidden }: IProps) {
    let route = useRouter();

    function handleBack() {
        route.back();
    }

    return (
        <div className="w-full py-4 border-b border-b-cs-dark border-opacity-10 shadow-sm bg-white">
            <div className="container flex justify-between items-center">
                <button
                    title="Kembali ke page sebelumnya"
                    disabled={disabled}
                    onClick={handleBack}
                    className="link flex gap-2 items-center type-body-lg font-bold hover:[not(:disabled)]:gap-3 disabled:cursor-not-allowed disabled:opacity-25"
                >
                    <FaAngleLeft /> Kembali
                </button>

                <span className="type-body-lg text-accent-600 font-bold">Komang Adi Wirawan</span>
            </div>
        </div>
    );
}
