'use client'
import { useState, useRef, useEffect } from "react";

import Record from "@/components/Record";
import TextCard from "@/components/TextCard";
import InputField from "@/components/InputField";
import { sendStatusCode } from "next/dist/server/api-utils";

type Message = {
    text: string,
    sender: string,
    timestamp: number
}

export default function Support() {
    const [messages, setMessages] = useState<Message[]>([]);
    const lastCard = useRef<HTMLDivElement | null>(null);

    const cards = messages.map(({text, sender, timestamp}, idx, arr) => {
        console.log(sender)
        return (
            <TextCard 
                className='bg-primary'
                key={idx} name={sender} 
                time={timestamp} text={text}
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
        if(txt === '') {
            console.error("No message was provided");
            return;
        }

        const searchParams = new URLSearchParams({
            prompt: txt
        })
        
        // Initial user message
        const userMsg = {
            text: txt, sender: 'User', timestamp: Date.now()
        }
        setMessages([...messages, userMsg]);

        // Server message
        const res = await fetch(`/api/talk?${searchParams.toString()}`);
        const aiMsg = {
            text: await res.text(),
            sender: 'Chatbot',
            timestamp: Date.now()
        }
        setMessages([...messages, userMsg, aiMsg]);
    }

    return (
        <div className="container mx-auto h-screen bg-secondary">
            <div className="w-full h-4/6 mb-4">
                <Record className="w-full h-full">
                    { cards }
                </Record>
            </div>
            
            <InputField className="w-100 h-1/6 p-6" onClick={sendPrompt} onKeyDown={sendPrompt}/>
        </div>
    );
}