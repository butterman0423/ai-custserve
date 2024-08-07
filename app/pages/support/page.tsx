'use client'
import { useState, useRef, useEffect } from "react";

import Record from "@/components/Record";
import TextCard from "@/components/TextCard";
import InputField from "@/components/InputField";

export default function Support() {
    const [messages, setMessages] = useState<string[]>([]);
    const lastCard = useRef<HTMLDivElement | null>(null);

    const cards = messages.map((txt, idx, arr) => {
        return (
            <TextCard 
                className='bg-primary'
                key={idx} name='Sample' 
                time={0} text={txt}
                ref={idx === arr.length - 1 ? lastCard : null} />
        );
    });

    useEffect(() => {
        if(lastCard.current == null) {
            console.warn("Missing ref");
            return;
        }
        lastCard.current.scrollIntoView();
    }, [cards, lastCard]);

    async function sendPrompt(txt: string) {
        const searchParams = new URLSearchParams({
            prompt: txt
        })
        const res = await fetch(`/api/talk?${searchParams.toString()}`);
        setMessages([...messages, txt, await res.text()]);
    }

    return (
        <div className="container mx-auto h-screen bg-secondary">
            <div className="w-full h-4/6 mb-4">
                <Record className="w-full h-full">
                    { cards }
                </Record>
            </div>
            
            <InputField className="w-100 h-1/6 p-6" onClick={sendPrompt}/>
        </div>
    );
}