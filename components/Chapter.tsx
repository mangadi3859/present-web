interface IProps {
    title: string;
    subtitle: string;
}

export default function Chapter({ subtitle, title }: IProps) {
    return (
        <div className="container flex h-[80vh] gap-4 flex-col justify-center items-center">
            <h1 className="type-head-2 slide slide-up font-bold">{title}</h1>
            <h3 className="type-head-3 slide slide-up font-bold">{subtitle}</h3>
        </div>
    );
}
