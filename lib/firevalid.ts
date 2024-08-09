import type { NextApiRequest } from "next";
import { firestore } from "./firestore";
import type { Session } from "next-auth";

type AccountTokens = {
    access_token: string,
    provider: string,
    providerId: string,
}

export function getAccountTokens(session: Session): AccountTokens {
    const { access_token, provider, providerId } = session as Session & AccountTokens;
    return { access_token, provider, providerId };
}

export async function getUserSessionId(tokens: AccountTokens): Promise<string | undefined> {
    const query = await firestore
        .collection('accounts')
        // .where('access_token', '==', tokens.access_token)    // This is causing problems and I dont have time to fix them
        .where('provider', '==', tokens.provider)
        .where('providerAccountId', '==', tokens.providerId)
        .get();
    
    if(query.size == 0 || query.size > 1) {
        throw Error("Invalid token recieved");
    }

    return query.docs[0].get('userId')
}