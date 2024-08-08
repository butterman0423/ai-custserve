
import type { NextAuthConfig } from "next-auth"
import gitHub from "next-auth/providers/github"
import google from "next-auth/providers/google"

export default { providers: [gitHub, google] } satisfies NextAuthConfig