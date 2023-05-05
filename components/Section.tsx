interface IProps {
    children: React.ReactNode;
}

export default function Section({ children }: IProps) {
    return <div className="container">{children}</div>;
}
