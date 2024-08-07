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
            <textarea 
                className='block text-black w-full h-5/6' 
                style={{ resize: 'none' }}
                placeholder='Enter your text here'
                ref={textRef} />
            <div className="w-full mt-2">
                <button className='float-end h-full bg-neutral-500' onClick={handleClick}>
                    Send
                </button>
            </div>
            
        </div>
    );
}