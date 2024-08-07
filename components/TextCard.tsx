import { ForwardedRef, forwardRef } from "react";

type Options = {
    name: string,
    time: number,
    text: string,
    className?: string
}

export default forwardRef(function TextCard({
    name, time, text, className
}: Options, ref: ForwardedRef<HTMLDivElement>) {
    const date = new Date(time);
    const ftime = date.toLocaleString();

    return (
        <div className={`p-4 ${className}`} ref={ref}>
            <div className="">
                <span>{ name }</span>
                <span className="float-right">
                    <i>{ ftime }</i>
                </span>
            </div>
            <p>{ text }</p>
        </div>
    );
});