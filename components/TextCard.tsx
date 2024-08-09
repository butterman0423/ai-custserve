import { ForwardedRef, forwardRef } from "react";
import Markdown from "react-markdown";

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
        <div className={`p-4 rounded-2xl border-0 border-primary mx-4 my-2 text-wrap relative text-white ${className}`} ref={ref}>
            <div className="">
                <span>{ name }</span>
                <span className="float-right">
                    <i>{ ftime }</i>
                </span>
            </div>
            {name === "User" ? 
                (
                    <div className="h-6 w-10 absolute -right-6 bottom-0 bg-primary"></div>
                ) 
                : 
                (
                    <div className="h-6 w-10 absolute -left-6 bottom-0 bg-primary"></div>
                )}
            <Markdown>{ text }</Markdown>
        </div>
    );
});