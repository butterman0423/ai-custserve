'use client'
import { signOut } from "next-auth/react"

export function OutButton() {
    return <button onClick={() => signOut()}>Sign Out</button>
}