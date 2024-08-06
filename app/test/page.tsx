'use client'
import 'dotenv/config';
import { useEffect } from "react";

export default function Test() {
    useEffect(() => {
        (async () => {
            const res = await fetch(`/api/ai/read?prompt=Hello`)
            console.log(await res.text())
        })()
    })
    return (
        <h1>Hello World</h1>
    );
}