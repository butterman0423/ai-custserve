'use client'
import { signOut } from "next-auth/react"

type Options = {
    afterSignOut?: () => void
}

export default function SignOutButton({
    afterSignOut
}: Options) {
    return <button onClick={async () => {
        try {
            await signOut();
        } catch(e) {
            console.error("Sign Out Failed.", (e as Error).message);
        }
    }}>Sign Out</button>
}