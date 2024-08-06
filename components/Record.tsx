import { ReactElement, ReactNode } from "react";

type Options = {
    children?: ReactElement | ReactElement[]
}

export default function Record({
    children
}: Options) {
    return (
        <div>
            { children }
        </div>
    );
}