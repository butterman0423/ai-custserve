import { ReactElement, ReactNode } from "react";

type Options = {
    children?: ReactElement | ReactElement[]
    className?: string
}

export default function Record({
    children, className
}: Options) {
    return (
        <div className={`flex flex-col justify-end divide-y ${className}`}>
            { children }
        </div>
    );
}