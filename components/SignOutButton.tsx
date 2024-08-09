'use client'
import { signOut } from "next-auth/react"

type Options = {
    afterSignOut?: () => void,
    className? : string,
}

export default function SignOutButton({
    afterSignOut, className
}: Options) {
    return <button 
    className={className} 
    
    onClick={async () => {
        try {
            await signOut();
        } catch(e) {
            console.error("Sign Out Failed.", (e as Error).message);
        }
    }}>Sign Out</button>
}