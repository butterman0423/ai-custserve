'use client'
import { signIn } from "next-auth/react"

type Options = {
    provider: string
}

export function InButton({
    provider
}: Options) {
    return <button onClick={() => signIn(provider, {redirect: true, redirectTo: '/'})}>Sign In With { provider }</button>
}