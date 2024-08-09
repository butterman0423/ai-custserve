'use client'
import { signOut } from "next-auth/react"

type Options = {
    afterSignOut?: () => void,
    className? : string,
}

export default function SignOutButton({
    afterSignOut, className
}: Options) {
<<<<<<< HEAD
    return <button 
    className={className} 
    
    onClick={async () => {
=======
    return <button className={className} onClick={async () => {
>>>>>>> 17b00ef (Basic nav bar styling)
        try {
            await signOut();
        } catch(e) {
            console.error("Sign Out Failed.", (e as Error).message);
        }
    }}>Sign Out</button>
}