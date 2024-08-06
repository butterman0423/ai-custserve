'use client'
import { useState } from "react";

import Record from "@/components/Record";
import TextCard from "@/components/TextCard";
import InputField from "@/components/InputField";

export default function Support() {
    const [messages, setMessages] = useState<string[]>([]);
    return (
        <div>
            <Record>
                { messages.map((txt, idx) => {
                    return (
                        <TextCard key={idx} name='Sample' time={0} text={txt}/>
                    );
                })}
            </Record>
            <InputField onClick={async (txt) => {
                const searchParams = new URLSearchParams({
                    prompt: txt
                })
                const res = await fetch(`/api/talk?${searchParams.toString()}`);
                setMessages([...messages, txt, await res.text()]);
            }}/>
        </div>
    );
}