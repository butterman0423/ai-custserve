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
        <div className={`p-5 rounded-2xl border-0 border-primary mx-4 my-2 text-wrap relative text-white ${className}`} ref={ref}>
            <div className="">
                <span>{ name }</span>
                <span className="float-right">
                    <i>{ ftime }</i>
                </span>
            </div>
            {name === "Chatbot" ? 
                (
                    <>
                    <div className="h-8 w-8 absolute -left-4 bottom-0 bg-primary"></div>
                    <div className="h-8 w-4 bg-secondary absolute -left-4 bottom-5  rounded-botText"></div>
                    </>
                ) 
                : 
                (
                    <>
                    <div className="h-8 w-8 absolute -right-4 bottom-0 bg-primary"></div>
                    <div className="h-8 w-4 bg-secondary absolute -right-4 bottom-5 rounded-userText"></div>
                    </>
                )}
            
            <Markdown>{text}</Markdown>
        </div>
    );
});