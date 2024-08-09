'use client'
import { signIn } from "next-auth/react"

type Options = {
    afterSignIn?: () => void,
    className?: string,
}


export default function SignInButton({
    afterSignIn, className
}: Options) {
    return <button className={className} onClick={async () => {
        try {
            await signIn();
        } catch(e) {
            console.error("Sign In Failed.", (e as Error).message);
        }
    }}>Sign In</button>
}