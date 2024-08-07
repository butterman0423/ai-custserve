import { useState, useRef } from "react";

type Options = {
    onClick: ((input: string) => void) | ((input: string) => Promise<void>),
    className?: string
}

export default function InputField({
    onClick, className
}: Options) {
    const textRef = useRef<HTMLTextAreaElement>(null);
    const [disabled, setDisabled] = useState<boolean>(false);

    async function handleClick() {
        // Stop if unable to grab text
        if(textRef == null || textRef.current === null) {
            return;
        }
        setDisabled(true);

        const txt = textRef.current.value;
        textRef.current.value = '';
        await onClick(txt);
        setDisabled(false);
    }

    return (
        <div className={`${className}`}>
            <div className="relative w-full h-full bg-primary rounded-md">
                <textarea 
                    className='block w-full h-full bg-transparent p-4' 
                    style={{ resize: 'none' }}
                    placeholder='Enter your text here'
                    ref={textRef} />
                <div className="absolute w-full h-1/4 bottom-0 px-5 text-accent">
                    <button className={`float-end h-full ${disabled ? 'text-slate-700' : ''}`} 
                        onClick={handleClick} disabled={disabled}>
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
}