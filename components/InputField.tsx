import { useState, useRef } from "react";

type Options = {
    onClick: ((input: string) => void) | ((input: string) => Promise<void>),
    onKeyDown: ((input: string) => void) | ((input : string) => Promise<void>),
    className?: string
}

export default function InputField({
    onClick, onKeyDown, className
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
    async function handleKeyDown(e: any) {
        // Stop if unable to grab text
        if(e.key === "Enter" && !e.shiftKey){
            if(textRef == null || textRef.current === null) {
                return;
            }
            setDisabled(true);
            e.preventDefault();
            const txt = textRef.current.value;
            textRef.current.value = '';
            textRef.current.blur()
            await onKeyDown(txt);
            setDisabled(false);
        }
    }
    

    return (
        <div className={`${className}`}>
            {/* <div className="relative w-full h-full bg-primary rounded-md">
                <textarea 
                    className='block w-full h-full bg-transparent p-4' 
                    style={{ resize: 'none' }}
                    placeholder='Enter your text here'
                    onKeyDown={handleKeyDown} 
                    ref={textRef} />
                <div className="absolute w-full h-1/4 bottom-0 px-5 text-accent">
                    <button className={`float-end h-full ${disabled ? 'text-slate-700' : ''}`} 
                        onClick={handleClick} disabled={disabled}>
                        Send
                    </button>
                </div>
            </div> */}
            <div className="relative w-full h-full bg-textfield rounded-lg flex">
            <textarea 
                className='block w-full bg-transparent p-4 text-white placeholder-white focus:outline-none focus:ring-0' 
                style={{ resize: 'none' }}
                placeholder='Enter your text here'
                onKeyDown={handleKeyDown} 
                ref={textRef} 
            />

                <button 
                    className={`ml-4 border-2 border-white p-4 rounded-lg text-white hover:bg-primary`} 
                    onClick={handleClick} 
                    disabled={disabled}>
                    Send
                </button>
            </div>

        </div>
    );
}