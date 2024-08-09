import type { StartChatParams } from "@google/generative-ai";
import { firestore } from "./firestore";

const NEW_HIST: Readonly<StartChatParams> = {
    history: [
        {
            role: 'user',
            parts: [{text: ''}]
        }
    ]
}

function getUserHist(id: string) {
    return firestore
        .collection('users')
        .doc(id)
        .collection('histories')
}

export async function createHistory(id: string) {
    await getUserHist(id)
        .doc('_default')
        .set(NEW_HIST);
}

export async function getHistory(id: string) {
    return getUserHist(id)
        .doc('_default')
        .get();
}

export async function updateHistory(id: string, hist: StartChatParams) {
    return getUserHist(id)
        .doc('_default')
        .set(hist);
}