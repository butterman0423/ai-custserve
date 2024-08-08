'use client'
import { signIn } from "next-auth/react"

type Options = {
    afterSignIn?: () => void
}


export default function SignInButton({
    afterSignIn
}: Options) {
    return <button onClick={async () => {
        try {
            await signIn();
        } catch(e) {
            console.error("Sign In Failed.", (e as Error).message);
        }
    }}>Sign In</button>
}