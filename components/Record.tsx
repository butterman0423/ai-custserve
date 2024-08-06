import { ReactElement, ReactNode } from "react";

type Options = {
    children?: ReactElement | ReactElement[]
    className?: string
}

export default function Record({
    children, className
}: Options) {
    return (
        <div className={`flex flex-col gap-4 justify-end ${className}`}>
            { children }
        </div>
    );
}