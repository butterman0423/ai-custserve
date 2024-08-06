'use client'
import 'dotenv/config';
import { useEffect } from "react";

export default function Test() {
    useEffect(() => {
        (async () => {
            const res = await fetch('/api/read?prompt=hello');
            console.log(await res.text())
        })()
    })
    return (
        <h1>Hello World</h1>
    );
}