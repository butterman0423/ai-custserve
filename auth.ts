import NextAuth from "next-auth"
import authConfig from "./auth.config"

import { FirestoreAdapter } from "@auth/firebase-adapter"
import { firestore } from "@/lib/firestore"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: FirestoreAdapter(firestore),
  session: { strategy: 'jwt' },
  callbacks: {
    // Thank god for this
    // https://github.com/nextauthjs/next-auth/issues/7913

    jwt: async ({ token, account }) => {
      if (account && account.access_token) {
          token.accessToken = account.access_token; // <-- adding the access_token here
          token.provider = account.provider;
          token.providerId = account.providerAccountId;
      }
      return token
    },
    session: async ({ session, token }) => {
      // If we want to make the accessToken available in components, then we have to explicitly forward it here.
      return { ...session, 
        access_token: token.accessToken, 
        provider: token.provider,
        providerId: token.providerId
      }
  },

  },
  ...authConfig
})