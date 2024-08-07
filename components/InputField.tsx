import { useRef } from "react";

type Options = {
    onClick: (input: string) => void,
    className?: string
}

export default function InputField({
    onClick, className
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
        <div className={`${className}`}>
            <div className="relative w-full h-full bg-primary rounded-md">
                <textarea 
                    className='block w-full h-full bg-transparent p-4' 
                    style={{ resize: 'none' }}
                    placeholder='Enter your text here'
                    ref={textRef} />
                <div className="absolute w-full h-1/4 bottom-0 px-5 text-accent">
                    <button className='float-end h-full' onClick={handleClick}>
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
}