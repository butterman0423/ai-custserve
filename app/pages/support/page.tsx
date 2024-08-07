'use client'
import { useState } from "react";

import Record from "@/components/Record";
import TextCard from "@/components/TextCard";
import InputField from "@/components/InputField";

export default function Support() {
    const [messages, setMessages] = useState<string[]>([]);
    return (
        <div className="container mx-auto h-screen bg-secondary">
            <Record className="w-100 h-4/6 mb-4">
                { messages.map((txt, idx) => {
                    return (
                        <TextCard 
                            className='bg-primary min-h-32'
                            key={idx} name='Sample' 
                            time={0} text={txt} />
                    );
                })}
            </Record>
            <InputField className="w-100 h-1/6 p-6" onClick={async (txt) => {
                const searchParams = new URLSearchParams({
                    prompt: txt
                })
                const res = await fetch(`/api/talk?${searchParams.toString()}`);
                setMessages([...messages, txt, await res.text()]);
            }}/>
        </div>
    );
}