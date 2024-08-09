import { firestore } from "./firestore";

export async function getUserSessionId(token: string): Promise<string | undefined> {
    const query = await firestore
        .collection('accounts')
        .where('id_token', '==', token)
        .get();
    
    if(query.size == 0 || query.size > 1) {
        throw Error("Invalid token recieved");
    }

    return query.docs[0].get('userId')
}