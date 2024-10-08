import type { ReactElement } from "react";

type Options = {
    children?: ReactElement | ReactElement[]
    className?: string,
}

export default function Record({
    children, className
}: Options) {
    return (
        <div className={`overflow-auto ${className}`}>
            <div className={`w-full min-h-full flex flex-col justify-end divide-y`}>
                { children }
            </div>
        </div>
        
    );
}