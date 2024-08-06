import { useRef } from "react";

type Options = {
    onClick: (input: string) => void
}

export default function InputField({
    onClick
}: Options) {
    const textRef = useRef<HTMLTextAreaElement>(null);

    function handleClick() {
        // Stop if unable to grab text
        if(textRef == null || textRef.current === null) {
            return;
        }

        const txt = textRef.current.value;
        onClick(txt);
    }

    return (
        <div>
            <textarea className={'text-black'} ref={textRef}></textarea>
            <button onClick={handleClick}>Send</button>
        </div>
    );
}